'use client';

import Image from 'next/image';
import { useLang } from './LangProvider';

export default function Footer() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={28} height={28} style={{ objectFit: 'contain' }} />
          © 2026 <strong>Melz Gümrük Müşavirliği</strong>. {t('Tüm hakları saklıdır.', 'All rights reserved.')}
        </p>
        <ul className="footer-links">
          <li><a href="#services">{t('Hizmetler', 'Services')}</a></li>
          <li><a href="#why">{t('Hakkımızda', 'About')}</a></li>
          <li><a href="#contact">{t('İletişim', 'Contact')}</a></li>
        </ul>
      </div>
    </footer>
  );
}
