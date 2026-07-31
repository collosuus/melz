import { NextRequest, NextResponse } from 'next/server';
import { del } from '@vercel/blob';
import { sql } from '@/lib/db';
import { isAuthed } from '@/lib/adminAuth';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const memberId = Number(id);
  if (!Number.isInteger(memberId)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const rows = await sql`
    SELECT photo_url FROM team_members WHERE id = ${memberId}
  `;

  if (rows.length === 0) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const photoUrl = rows[0].photo_url as string | null;
  if (photoUrl) {
    try {
      await del(photoUrl);
    } catch {
      // photo already gone or blob deletion failed; proceed with row deletion regardless
    }
  }

  await sql`DELETE FROM team_members WHERE id = ${memberId}`;

  return NextResponse.json({ ok: true });
}
