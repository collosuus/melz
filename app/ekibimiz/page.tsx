import type { Metadata } from 'next';
import { sql } from '@/lib/db';
import TeamClient, { type TeamMember } from '@/components/TeamClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Ekibimiz | Melz Gümrük Müşavirliği',
  description: 'Melz Gümrük Müşavirliği ekibiyle tanışın — gümrük, lojistik ve dış ticaret alanında uzman kadromuz.',
  alternates: { canonical: 'https://www.melzgumruk.com/ekibimiz/' },
  openGraph: {
    title: 'Ekibimiz | Melz Gümrük Müşavirliği',
    description: 'Gümrük, lojistik ve dış ticaret alanında uzman kadromuzla tanışın.',
    url: 'https://www.melzgumruk.com/ekibimiz/',
    type: 'website',
  },
};

export default async function TeamPage() {
  let members: TeamMember[] = [];
  try {
    const rows = await sql`
      SELECT * FROM team_members ORDER BY sort_order ASC, created_at ASC
    `;
    members = rows as unknown as TeamMember[];
  } catch {
    members = [];
  }

  return <TeamClient members={members} />;
}
