import { cookies } from 'next/headers';

export const ADMIN_COOKIE_NAME = 'melz_admin_session';

export async function isAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const value = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return Boolean(value) && value === process.env.ADMIN_PASSWORD;
}
