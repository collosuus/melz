'use client';

import { useState } from 'react';
import { useLang } from './LangProvider';

interface FaqItem {
  qTr: string;
  qEn: string;
  aTr: string;
  aEn: string;
}

const faqData: FaqItem[] = [
  {
    qTr: 'GTİP kodu nedir ve neden önemlidir?',
    qEn: 'What is an HS code and why is it important?',
    aTr: 'GTİP (Gümrük Tarife İstatistik Pozisyonu), her ürünün uluslararası alanda tanımlandığı 12 haneli bir numaradır. İthalat ve ihracatta uygulanacak vergi oranı bu koda göre belirlenir. Yanlış sınıflandırma cezai yaptırıma yol açabilir.',
    aEn: 'The HS code is a 12-digit number by which each product is internationally identified. The tax rate applicable to imports and exports is determined according to this code. Incorrect classification can lead to penal sanctions.',
  },
  {
    qTr: 'Gümrük işlemleri ne kadar sürer?',
    qEn: 'How long do customs procedures take?',
    aTr: 'Belgelerin eksiksiz olması ve yeşil hat uygulaması durumunda aynı gün gümrükleme mümkündür. Muayene gerektiren işlemlerde 1-3 iş günü öngörülmektedir.',
    aEn: 'If documents are complete and the green lane is applied, same-day customs clearance is possible. For procedures requiring inspection, 1-3 business days are estimated.',
  },
  {
    qTr: 'Gümrük vergisi nasıl hesaplanır?',
    qEn: 'How is customs duty calculated?',
    aTr: 'Gümrük vergisi, ürünün CIF değeri üzerinden GTİP koduna göre belirlenen oran ile hesaplanır. Buna ek olarak KDV, varsa ÖTV uygulanır. Serbest ticaret anlaşmaları kapsamında tercihli tarife uygulanabilir.',
    aEn: 'Customs duty is calculated by multiplying the CIF value of the product by the rate determined according to the HS code. Additionally, VAT and SCT if applicable are added. Preferential tariffs may apply under free trade agreements.',
  },
  {
    qTr: 'AEO statüsü ne avantaj sağlar?',
    qEn: 'What advantages does AEO status provide?',
    aTr: 'AEO statüsü; daha az fiziki muayene, öncelikli gümrükleme ve basitleştirilmiş prosedürler sağlar. Diğer ülkelerin AEO programlarıyla karşılıklı tanıma avantajı da sunar.',
    aEn: 'AEO status provides fewer physical inspections, priority customs clearance, and simplified procedures. It also offers mutual recognition with AEO programs of other countries.',
  },
  {
    qTr: 'İthalatta hangi belgeler gerekir?',
    qEn: 'What documents are required for import?',
    aTr: 'Temel belgeler: ticari fatura, çeki listesi, konşimento, menşe şahadetnamesi. Ürüne göre CE belgesi, gıda analiz raporu veya ithal lisansı da gerekebilir.',
    aEn: 'Basic documents: commercial invoice, packing list, bill of lading, certificate of origin. Depending on the product, CE certificate, food analysis report, or import license may also be required.',
  },
  {
    qTr: 'Antrepo rejiminin avantajı nedir?',
    qEn: 'What is the advantage of the warehouse regime?',
    aTr: 'Antrepo rejimi, malların gümrük vergisi ödenmeksizin antrepoda bekletilmesini sağlar. Vergiyi satış sonrası ödeyerek nakit akışınızı koruyabilirsiniz. Azami 3 yıl kullanılabilir.',
    aEn: 'The warehouse regime allows goods to be stored in bonded warehouses without paying customs duties. You can protect your cash flow by paying the tax after sales. It can be used for a maximum of 3 years.',
  },
  {
    qTr: 'Serbest ticaret anlaşmalarından nasıl yararlanırım?',
    qEn: 'How do I benefit from free trade agreements?',
    aTr: 'STA\'lardan yararlanmak için malın tercihli menşe kurallarını karşılaması ve EUR.1 veya A.TR belgesiyle beyan edilmesi gerekir. Bu, gümrük vergisini sıfırlayabilir.',
    aEn: 'To benefit from FTAs, the goods must meet the preferential rules of origin and be declared with an EUR.1 or A.TR document. This can reduce customs duty to zero.',
  },
  {
    qTr: 'Gümrükte takılan yük için ne yapılır?',
    qEn: 'What to do for a shipment stuck in customs?',
    aTr: 'İlk adım, takılma nedenini tespit etmektir: belge eksikliği, GTİP ihtilafı veya değer kıymet sorunu. Melz uzmanları sorunun kaynağını hızla tespit ederek çözüm sürecini başlatır. Hemen arayın: 0212 564 56 58.',
    aEn: 'The first step is to identify the reason for the hold: missing documents, HS code dispute, or valuation issue. Melz experts quickly identify the source of the problem and initiate the resolution process. Call us: 0212 564 56 58.',
  },
];

function FaqItemRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{lang === 'tr' ? item.qTr : item.qEn}</span>
        <div className="faq-icon">+</div>
      </button>
      <div className="faq-a">
        <p>{lang === 'tr' ? item.aTr : item.aEn}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { lang } = useLang();
  const t = (tr: string, en: string) => lang === 'tr' ? tr : en;
  const left = faqData.slice(0, 4);
  const right = faqData.slice(4);

  return (
    <section id="faq" className="site-section faq-section">
      <div className="section-inner">
        <p className="section-label">{t('Sık Sorulan Sorular', 'FAQ')}</p>
        <h2 className="section-title">{t('Merak Ettikleriniz', 'Your Questions Answered')}</h2>
        <p className="section-desc">{t('Gümrük ve lojistik süreçlerine dair en sık sorulan sorular.', 'The most frequently asked questions about customs and logistics processes.')}</p>
        <div className="faq-grid">
          <div>{left.map((item, i) => <FaqItemRow key={i} item={item} />)}</div>
          <div>{right.map((item, i) => <FaqItemRow key={i} item={item} />)}</div>
        </div>
      </div>
    </section>
  );
}
