import { NextResponse } from 'next/server';
import { isAuthed } from '@/lib/adminAuth';

export async function GET() {
  const authed = await isAuthed();
  return NextResponse.json({ authed });
}
