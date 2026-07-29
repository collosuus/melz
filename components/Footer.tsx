'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

export default function Footer() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={28} height={28} style={{ objectFit: 'contain' }} />
          © 2026 <strong>Melz Gümrük Müşavirliği</strong>. {t('Tüm hakları saklıdır.', 'All rights reserved.', '保留所有权利。')}
        </p>
        <ul className="footer-links">
          <li><a href="#services">{t('Hizmetler', 'Services', '服务项目')}</a></li>
          <li><Link href="/hakkimizda">{t('Hakkımızda', 'About', '关于我们')}</Link></li>
          <li><a href="#contact">{t('İletişim', 'Contact', '联系我们')}</a></li>
        </ul>
      </div>
    </footer>
  );
}
