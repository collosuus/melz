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
  const title = (formData.get('title') as string | null) ?? '';
  const bio = (formData.get('bio') as string | null) ?? '';
  const photo = formData.get('photo');

  if (typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
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
    VALUES (${name.trim()}, ${title.trim()}, ${title.trim()}, ${title.trim()}, ${bio.trim()}, ${bio.trim()}, ${bio.trim()}, ${photoUrl})
    RETURNING *
  `;

  return NextResponse.json({ member: rows[0] }, { status: 201 });
}
