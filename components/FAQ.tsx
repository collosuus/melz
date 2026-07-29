'use client';

import { useState } from 'react';
import { useLang } from './LangProvider';

interface FaqItem {
  qTr: string;
  qEn: string;
  qZh: string;
  aTr: string;
  aEn: string;
  aZh: string;
}

const faqData: FaqItem[] = [
  {
    qTr: 'GTİP kodu nedir ve neden önemlidir?',
    qEn: 'What is an HS code and why is it important?',
    qZh: 'HS编码是什么？为何如此重要？',
    aTr: 'GTİP (Gümrük Tarife İstatistik Pozisyonu), her ürünün uluslararası alanda tanımlandığı 12 haneli bir numaradır. İthalat ve ihracatta uygulanacak vergi oranı bu koda göre belirlenir. Yanlış sınıflandırma cezai yaptırıma yol açabilir.',
    aEn: 'The HS code is a 12-digit number by which each product is internationally identified. The tax rate applicable to imports and exports is determined according to this code. Incorrect classification can lead to penal sanctions.',
    aZh: 'HS编码是一个12位数字，用于在国际上标识每一种商品。进出口适用的税率均依此编码确定。错误归类可能导致处罚。',
  },
  {
    qTr: 'Gümrük işlemleri ne kadar sürer?',
    qEn: 'How long do customs procedures take?',
    qZh: '报关手续需要多长时间？',
    aTr: 'Belgelerin eksiksiz olması ve yeşil hat uygulaması durumunda aynı gün gümrükleme mümkündür. Muayene gerektiren işlemlerde 1-3 iş günü öngörülmektedir.',
    aEn: 'If documents are complete and the green lane is applied, same-day customs clearance is possible. For procedures requiring inspection, 1-3 business days are estimated.',
    aZh: '若单证齐全并适用绿色通道，可实现当日清关。需查验的情况预计需要1-3个工作日。',
  },
  {
    qTr: 'Gümrük vergisi nasıl hesaplanır?',
    qEn: 'How is customs duty calculated?',
    qZh: '关税如何计算？',
    aTr: 'Gümrük vergisi, ürünün CIF değeri üzerinden GTİP koduna göre belirlenen oran ile hesaplanır. Buna ek olarak KDV, varsa ÖTV uygulanır. Serbest ticaret anlaşmaları kapsamında tercihli tarife uygulanabilir.',
    aEn: 'Customs duty is calculated by multiplying the CIF value of the product by the rate determined according to the HS code. Additionally, VAT and SCT if applicable are added. Preferential tariffs may apply under free trade agreements.',
    aZh: '关税按产品CIF价值乘以对应HS编码规定的税率计算，另加征增值税及（如适用）特别消费税。在自由贸易协定框架下可能适用优惠税率。',
  },
  {
    qTr: 'AEO statüsü ne avantaj sağlar?',
    qEn: 'What advantages does AEO status provide?',
    qZh: 'AEO认证有哪些优势？',
    aTr: 'AEO statüsü; daha az fiziki muayene, öncelikli gümrükleme ve basitleştirilmiş prosedürler sağlar. Diğer ülkelerin AEO programlarıyla karşılıklı tanıma avantajı da sunar.',
    aEn: 'AEO status provides fewer physical inspections, priority customs clearance, and simplified procedures. It also offers mutual recognition with AEO programs of other countries.',
    aZh: 'AEO认证可减少查验、优先通关并简化手续，同时与其他国家的AEO项目享有互认优势。',
  },
  {
    qTr: 'İthalatta hangi belgeler gerekir?',
    qEn: 'What documents are required for import?',
    qZh: '进口需要哪些单证？',
    aTr: 'Temel belgeler: ticari fatura, çeki listesi, konşimento, menşe şahadetnamesi. Ürüne göre CE belgesi, gıda analiz raporu veya ithal lisansı da gerekebilir.',
    aEn: 'Basic documents: commercial invoice, packing list, bill of lading, certificate of origin. Depending on the product, CE certificate, food analysis report, or import license may also be required.',
    aZh: '基本单证包括：商业发票、装箱单、提单、原产地证明。根据产品不同，可能还需要CE认证、食品检测报告或进口许可证。',
  },
  {
    qTr: 'Antrepo rejiminin avantajı nedir?',
    qEn: 'What is the advantage of the warehouse regime?',
    qZh: '保税仓储制度有何优势？',
    aTr: 'Antrepo rejimi, malların gümrük vergisi ödenmeksizin antrepoda bekletilmesini sağlar. Vergiyi satış sonrası ödeyerek nakit akışınızı koruyabilirsiniz. Azami 3 yıl kullanılabilir.',
    aEn: 'The warehouse regime allows goods to be stored in bonded warehouses without paying customs duties. You can protect your cash flow by paying the tax after sales. It can be used for a maximum of 3 years.',
    aZh: '保税仓储制度允许货物存放于保税仓库而无需立即缴纳关税。您可在销售后再缴税，从而保护现金流，最长可使用3年。',
  },
  {
    qTr: 'Serbest ticaret anlaşmalarından nasıl yararlanırım?',
    qEn: 'How do I benefit from free trade agreements?',
    qZh: '如何享受自由贸易协定优惠？',
    aTr: 'STA\'lardan yararlanmak için malın tercihli menşe kurallarını karşılaması ve EUR.1 veya A.TR belgesiyle beyan edilmesi gerekir. Bu, gümrük vergisini sıfırlayabilir.',
    aEn: 'To benefit from FTAs, the goods must meet the preferential rules of origin and be declared with an EUR.1 or A.TR document. This can reduce customs duty to zero.',
    aZh: '要享受自贸协定优惠，货物须符合优惠原产地规则，并凭EUR.1或A.TR证明文件申报，这可使关税降至零。',
  },
  {
    qTr: 'Gümrükte takılan yük için ne yapılır?',
    qEn: 'What to do for a shipment stuck in customs?',
    qZh: '货物滞留海关该怎么办？',
    aTr: 'İlk adım, takılma nedenini tespit etmektir: belge eksikliği, GTİP ihtilafı veya değer kıymet sorunu. Melz uzmanları sorunun kaynağını hızla tespit ederek çözüm sürecini başlatır. Hemen arayın: 0212 564 56 58.',
    aEn: 'The first step is to identify the reason for the hold: missing documents, HS code dispute, or valuation issue. Melz experts quickly identify the source of the problem and initiate the resolution process. Call us: 0212 564 56 58.',
    aZh: '第一步是查明滞留原因：单证缺失、HS编码争议或估价问题。Melz专家会迅速定位问题根源并启动解决流程。请立即致电：0212 564 56 58。',
  },
];

function FaqItemRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{lang === 'tr' ? item.qTr : lang === 'en' ? item.qEn : item.qZh}</span>
        <div className="faq-icon">+</div>
      </button>
      <div className="faq-a">
        <p>{lang === 'tr' ? item.aTr : lang === 'en' ? item.aEn : item.aZh}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { lang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;
  const left = faqData.slice(0, 4);
  const right = faqData.slice(4);

  return (
    <section id="faq" className="site-section faq-section">
      <div className="section-inner">
        <p className="section-label">{t('Sık Sorulan Sorular', 'FAQ', '常见问题')}</p>
        <h2 className="section-title">{t('Merak Ettikleriniz', 'Your Questions Answered', '您的疑问解答')}</h2>
        <p className="section-desc">{t('Gümrük ve lojistik süreçlerine dair en sık sorulan sorular.', 'The most frequently asked questions about customs and logistics processes.', '关于报关与物流流程的常见问题解答。')}</p>
        <div className="faq-grid">
          <div>{left.map((item, i) => <FaqItemRow key={i} item={item} />)}</div>
          <div>{right.map((item, i) => <FaqItemRow key={i} item={item} />)}</div>
        </div>
      </div>
    </section>
  );
}
