import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { sql } from '@/lib/db';
import { isAuthed } from '@/lib/adminAuth';

export async function GET() {
  const rows = await sql`
    SELECT * FROM team_members ORDER BY sort_order ASC, created_at ASC
  `;
  return NextResponse.json({ members: rows });
}

export async function POST(request: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const name = formData.get('name');
  const titleTr = formData.get('title_tr');
  const titleEn = formData.get('title_en');
  const titleZh = formData.get('title_zh');
  const bioTr = formData.get('bio_tr') ?? '';
  const bioEn = formData.get('bio_en') ?? '';
  const bioZh = formData.get('bio_zh') ?? '';
  const photo = formData.get('photo');

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof titleTr !== 'string' || !titleTr.trim() ||
    typeof titleEn !== 'string' || !titleEn.trim() ||
    typeof titleZh !== 'string' || !titleZh.trim()
  ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  let photoUrl: string | null = null;
  if (photo instanceof File && photo.size > 0) {
    const blob = await put(`team/${Date.now()}-${photo.name}`, photo, {
      access: 'public',
    });
    photoUrl = blob.url;
  }

  const rows = await sql`
    INSERT INTO team_members (name, title_tr, title_en, title_zh, bio_tr, bio_en, bio_zh, photo_url)
    VALUES (${name.trim()}, ${titleTr.trim()}, ${titleEn.trim()}, ${titleZh.trim()}, ${bioTr as string}, ${bioEn as string}, ${bioZh as string}, ${photoUrl})
    RETURNING *
  `;

  return NextResponse.json({ member: rows[0] }, { status: 201 });
}
