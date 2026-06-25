import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticleData {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDesc: string;
  tag: string;
  meta: string;
  datePublished: string;
  dateModified: string;
  content: React.ReactNode;
}

const articles: Record<string, ArticleData> = {
  'gtip-kodu-nedir': {
    title: 'GTİP Kodu Nedir? Nasıl Bulunur? | Melz Gümrük Müşavirliği',
    description: 'GTİP kodu nedir, nasıl tespit edilir ve yanlış sınıflandırmanın riskleri nelerdir? Melz Gümrük uzmanlarından kapsamlı rehber.',
    canonical: 'https://www.melzgumruk.com/blog/gtip-kodu-nedir',
    ogTitle: 'GTİP Kodu Nedir? Nasıl Bulunur?',
    ogDesc: 'İthalat ve ihracatta GTİP kodunun önemi, nasıl tespit edildiği ve yanlış sınıflandırmanın riskleri.',
    tag: 'Gümrük',
    meta: 'Melz Gümrük Müşavirliği · Haziran 2026 · 5 dakika okuma',
    datePublished: '2026-06-25',
    dateModified: '2026-06-25',
    content: (
      <>
        <p>İthalat veya ihracat yaparken karşılaştığınız en kritik kavramlardan biri GTİP kodudur. Doğru GTİP kodu tespit edilmeden ne ödeyeceğiniz vergiyi bilebilir ne de yasal kısıtlamaları önceden öğrenebilirsiniz. Bu rehberde GTİP kodunun ne olduğunu, nasıl bulunduğunu ve yanlış sınıflandırmanın nelere yol açabileceğini adım adım açıklıyoruz.</p>
        <h2>GTİP Kodu Nedir?</h2>
        <p>GTİP, <strong>Gümrük Tarife İstatistik Pozisyonu</strong> kelimelerinin kısaltmasıdır. Uluslararası alanda HS (Harmonized System) kodu olarak da bilinir. Dünya Gümrük Örgütü tarafından geliştirilen bu sistem, ticarete konu olan tüm malları 6 haneli uluslararası bir kod altında tanımlar; Türkiye&apos;de buna 2 hane daha eklenerek 12 haneli ulusal GTİP oluşturulur.</p>
        <p>Örnek bir GTİP: <strong>6109.10.00.00.11</strong> → Pamuklu, erkek/erkek çocuk tişört.</p>
        <h2>GTİP Kodu Neden Bu Kadar Önemli?</h2>
        <ul>
          <li><strong>Gümrük vergisi oranı</strong> bu koda göre belirlenir.</li>
          <li><strong>KDV, ÖTV</strong> ve diğer harçların uygulanıp uygulanmayacağı koda bağlıdır.</li>
          <li><strong>Yasak ve kısıtlamalar</strong> (CE belgesi zorunluluğu, ithal lisansı, gözetim vb.) GTİP&apos;e göre tanımlanır.</li>
          <li><strong>Menşe belgesi</strong> (EUR.1, A.TR) ve serbest ticaret anlaşması uygulaması GTİP&apos;e göre yapılır.</li>
          <li>Yanlış kod beyan edildiğinde <strong>cezai yaptırım ve ek vergi tarhiyatı</strong> söz konusu olabilir.</li>
        </ul>
        <h2>GTİP Kodu Nasıl Bulunur?</h2>
        <p>GTİP tespiti ürünün fiziksel özellikleri, bileşimi, kullanım amacı ve menşeine göre yapılır. Genel süreç şu şekildedir:</p>
        <ol>
          <li><strong>Fasıl (Chapter) belirleme:</strong> Türkiye Gümrük Tarife Cetveli&apos;nde ürünün düştüğü ana bölüm bulunur (örneğin 61. Fasıl: Örme giyim eşyası).</li>
          <li><strong>Pozisyon ve alt pozisyon tespiti:</strong> Malın özellikleri detaylandırılarak 4 ve 6 haneli kod daraltılır.</li>
          <li><strong>Ulusal alt açılım:</strong> Türkiye&apos;ye özgü 10-12 haneli tam kod tamamlanır.</li>
          <li><strong>Sınıflandırma kuralları kontrolü:</strong> Genel Yorum Kuralları (GYK) ve ilgili noter kararları incelenir.</li>
        </ol>
        <div className="callout">
          <p>💡 <strong>İpucu:</strong> Ticaret Bakanlığı&apos;nın <em>gumrukrehberi.gtb.gov.tr</em> portalından ön sorgu yapabilirsiniz. Ancak resmi bağlayıcılık için Bağlayıcı Tarife Bilgisi (BTB) başvurusu yapmanızı öneririz.</p>
        </div>
        <h2>Yanlış GTİP Beyanının Riskleri</h2>
        <ul>
          <li>Eksik vergi ödemesi nedeniyle <strong>vergi farkı + %10-30 ceza tarhiyatı</strong></li>
          <li>Gümrük mevzuatı ihlali nedeniyle <strong>idari para cezası</strong></li>
          <li>Yasak/kısıtlamalı ürünlerde <strong>malın müsaderesi</strong></li>
          <li>Tekrarlayan ihlallerde <strong>AEO statüsünün kaybı</strong></li>
          <li>Firmaya yönelik <strong>gümrük denetimi ve soruşturma</strong></li>
        </ul>
        <h2>Bağlayıcı Tarife Bilgisi (BTB) Nedir?</h2>
        <p>Ticaret Bakanlığı&apos;na başvurarak ürününüz için resmi GTİP tespiti yaptırabilirsiniz. BTB, 3 yıl süreyle geçerlidir ve gümrük idareleri tarafından bağlayıcı kabul edilir. Bu yöntem özellikle yüksek hacimli ve riskli ithalat kalemlerinde büyük güvence sağlar.</p>
        <div className="cta-box">
          <h3>GTİP Kodunuzdan Emin Değil Misiniz?</h3>
          <p>Melz uzmanları ürününüzü analiz ederek doğru GTİP kodunu tespit eder, olası vergi risklerini önceden değerlendirir.</p>
          <Link href="/#contact" className="cta-btn">Ücretsiz Danışın</Link>
        </div>
      </>
    ),
  },
  'ithalat-belgeleri': {
    title: 'İthalatta Hangi Belgeler Gerekir? | Melz Gümrük Müşavirliği',
    description: 'İthalat işlemlerinde gerekli tüm belgeler: ticari fatura, konşimento, menşe şahadetnamesi, CE belgesi ve daha fazlası. Eksiksiz rehber.',
    canonical: 'https://www.melzgumruk.com/blog/ithalat-belgeleri',
    ogTitle: 'İthalatta Hangi Belgeler Gerekir?',
    ogDesc: 'İthalat sürecinde ihtiyaç duyulan tüm belgeler hakkında kapsamlı rehber.',
    tag: 'İthalat',
    meta: 'Melz Gümrük Müşavirliği · Haziran 2026 · 6 dakika okuma',
    datePublished: '2026-06-25',
    dateModified: '2026-06-25',
    content: (
      <>
        <p>Yurt dışından mal satın alırken en büyük engellerden biri eksik ya da hatalı belgelerdir. Gümrük sürecinde bir belgenin eksik olması tüm sevkiyatı duraksatabilir, ek maliyet ve gecikmelere yol açabilir. Bu rehberde ithalat işlemlerinde gereken temel ve ürüne özgü belgeleri kapsamlı biçimde ele alıyoruz.</p>
        <h2>Temel Belgeler (Her İthalatta Gerekli)</h2>
        <table>
          <thead>
            <tr><th>Belge</th><th>Açıklama</th><th>Kimden Alınır?</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Ticari Fatura</strong></td><td>Malın satıcısı tarafından düzenlenen, fiyat, miktar ve tarafları gösteren belge. Orijinal veya noter onaylı sureti gereklidir.</td><td>Yabancı satıcı</td></tr>
            <tr><td><strong>Çeki Listesi (Packing List)</strong></td><td>Kolilerin ağırlığını, hacmini ve içeriğini gösteren liste. Muayene ve eşleştirme için zorunludur.</td><td>Yabancı satıcı</td></tr>
            <tr><td><strong>Konşimento (B/L)</strong></td><td>Deniz taşımacılığında taşıyıcı ile yük sahibi arasındaki sözleşme belgesi. Malın tesliminde aslı gerekmektedir.</td><td>Nakliye şirketi</td></tr>
            <tr><td><strong>Airway Bill (AWB)</strong></td><td>Hava taşımacılığındaki konşimento karşılığı. Konşimentodan farklı olarak ciro edilemez, isimli belgedir.</td><td>Havayolu şirketi</td></tr>
            <tr><td><strong>Menşe Şahadetnamesi</strong></td><td>Malın hangi ülkede üretildiğini belgeleyen ticaret odası onaylı belge.</td><td>İhracatçı ülke ticaret odası</td></tr>
          </tbody>
        </table>
        <h2>Tercihli Menşe Belgeleri (STA Kapsamında)</h2>
        <p>Türkiye&apos;nin Serbest Ticaret Anlaşması imzaladığı ülkelerden yapılan ithalatlarda standart gümrük vergisi yerine tercihli (indirimli veya sıfır) vergi uygulanabilir. Bunun için aşağıdaki belgelerden biri gerekir:</p>
        <ul>
          <li><strong>EUR.1 Dolaşım Belgesi:</strong> AB ve pek çok STA ülkesiyle ticarette kullanılır.</li>
          <li><strong>A.TR Dolaşım Belgesi:</strong> Yalnızca AB–Türkiye Gümrük Birliği kapsamındaki sanayii ürünlerinde geçerlidir.</li>
          <li><strong>Form-A (GSP):</strong> Gelişmekte olan ülkelerden yapılan ithalatlarda tercihli tarife için kullanılır.</li>
          <li><strong>Fatura Beyanı:</strong> Belirli limitin altındaki sevkiyatlarda EUR.1 yerine kullanılabilir.</li>
        </ul>
        <h2>Ürüne Özgü Ek Belgeler</h2>
        <table>
          <thead>
            <tr><th>Belge</th><th>Hangi Ürünlerde Gerekir?</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>CE Uygunluk Belgesi</strong></td><td>Elektrikli/elektronik ürünler, makineler, oyuncaklar, tıbbi cihazlar</td></tr>
            <tr><td><strong>Gıda Analiz Raporu</strong></td><td>Gıda maddeleri, tarım ürünleri, katkı maddeleri</td></tr>
            <tr><td><strong>CITES Belgesi</strong></td><td>Nesli tehlike altındaki türlerden elde edilen ürünler</td></tr>
            <tr><td><strong>İthal Lisansı</strong></td><td>Kontrollü madde ve ürünler (Bakanlık iznine tabi)</td></tr>
            <tr><td><strong>Gözetim Belgesi</strong></td><td>Gözetim kapsamındaki ürünler (akreditif/sigorta gibi ön izin)</td></tr>
            <tr><td><strong>Radyasyon Belgesi</strong></td><td>Japonya, Ukrayna ve bazı nükleer kaza geçmiş ülkelerden gelen ürünler</td></tr>
            <tr><td><strong>Helal / Koşer Sertifikası</strong></td><td>Bazı gıda ürünleri (isteğe bağlı veya pazar gerekliliği)</td></tr>
          </tbody>
        </table>
        <div className="callout">
          <p>⚠️ <strong>Dikkat:</strong> Belge eksikliği halinde gümrük idaresi malı serbest bırakmaz. Eksik belgenin tamamlanması için genellikle 30 günlük süre tanınır; bu sürede antrepo maliyetleri alıcıya aittir.</p>
        </div>
        <h2>Sigorta Belgesi</h2>
        <p>CIF (Cost, Insurance, Freight) teslim koşulunda satıcı sigortayı karşılar ve poliçeyi alıcıya devreder. FOB veya EXW koşullarında ise alıcının kendi sigorta poliçesini düzenlemesi gerekir. Gümrük kıymeti CIF değeri üzerinden hesaplandığından, sigorta değerinin doğru beyan edilmesi önemlidir.</p>
        <h2>Belge Yönetiminde Dikkat Edilmesi Gerekenler</h2>
        <ul>
          <li>Fatura üzerindeki HS/GTİP kodu ile beyan edilen kod uyuşmalıdır.</li>
          <li>Belgelerdeki para birimi tutarlı olmalıdır (TL, USD, EUR karışımından kaçının).</li>
          <li>Satıcı ve alıcı bilgileri belgeler arasında birebir eşleşmelidir.</li>
          <li>Konşimentodaki teslim yeri ile fiili giriş gümrük kapısı uyumlu olmalıdır.</li>
        </ul>
        <div className="cta-box">
          <h3>İthalat Belgelerinizi Eksiksiz Hazırlayalım</h3>
          <p>Melz uzmanları tüm ithalat belgelerinizi kontrol eder, eksikleri tespit eder ve gümrük sürecinizi hızlandırır.</p>
          <Link href="/#contact" className="cta-btn">Hemen İletişime Geçin</Link>
        </div>
      </>
    ),
  },
  'gumruk-vergisi-hesaplama': {
    title: 'Gümrük Vergisi Nasıl Hesaplanır? | Melz Gümrük Müşavirliği',
    description: 'CIF değeri, gümrük vergisi oranları, KDV, ÖTV ve tüm kesintilerle adım adım gümrük vergisi hesaplama rehberi. Gerçek örnekle anlat.',
    canonical: 'https://www.melzgumruk.com/blog/gumruk-vergisi-hesaplama',
    ogTitle: 'Gümrük Vergisi Nasıl Hesaplanır?',
    ogDesc: 'Adım adım gümrük vergisi hesaplama: CIF değeri, vergi oranları, KDV ve ÖTV.',
    tag: 'Vergi',
    meta: 'Melz Gümrük Müşavirliği · Mayıs 2026 · 7 dakika okuma',
    datePublished: '2026-05-15',
    dateModified: '2026-06-25',
    content: (
      <>
        <p>İthalat yapmadan önce toplam maliyeti doğru hesaplamak, karlılık analiziniz açısından kritik önem taşır. Gümrük vergisi tek bir kalemden oluşmaz; birden fazla vergi ve harç bir arada uygulanır. Bu rehberde adım adım gümrük vergisi hesaplama yöntemini, gerçek bir örnekle açıklıyoruz.</p>
        <h2>Gümrük Kıymeti: Hesaplamanın Temeli</h2>
        <p>Gümrük vergisi, malın <strong>CIF değeri</strong> üzerinden hesaplanır. CIF değeri şu üç bileşenden oluşur:</p>
        <ul>
          <li><strong>C — Cost (Maliyet):</strong> Faturada belirtilen mal bedeli</li>
          <li><strong>I — Insurance (Sigorta):</strong> Taşıma sigortası ücreti</li>
          <li><strong>F — Freight (Navlun):</strong> Taşıma ücreti</li>
        </ul>
        <p>FOB fiyatıyla alım yapıyorsanız, Türkiye&apos;ye kadar olan navlun ve sigorta bedelini CIF değerine eklemeniz gerekir. Bu değerler döviz kuru üzerinden Türk Lirası&apos;na çevrilir (Merkez Bankası ilan kuru kullanılır).</p>
        <h2>Uygulanan Vergi ve Harçlar</h2>
        <ol>
          <li><strong>Gümrük Vergisi (GV):</strong> CIF değeri × GTİP&apos;e göre belirlenen oran</li>
          <li><strong>Katma Değer Vergisi (KDV):</strong> (CIF + GV) × %20 (genel oran; bazı ürünlerde %10 veya %1)</li>
          <li><strong>Özel Tüketim Vergisi (ÖTV):</strong> Alkol, tütün, akaryakıt, lüks araç gibi ürünlerde ek vergi</li>
          <li><strong>Toplu Konut Fonu (TKF):</strong> Bazı tarım ürünlerinde ek fon</li>
          <li><strong>Antidamping Vergisi:</strong> Belirli ülke–ürün kombinasyonlarında ek koruma vergisi</li>
          <li><strong>Gümrük Hizmet Bedeli:</strong> İdareye ödenen sabit harç tutarı</li>
        </ol>
        <h2>Gerçek Bir Örnek ile Hesaplama</h2>
        <p>Senaryo: Çin&apos;den 1.000 adet pamuklu tişört ithal ediyorsunuz.<br />
        Fatura bedeli: 5.000 USD | Navlun: 300 USD | Sigorta: 50 USD | Kur: 1 USD = 32 TL<br />
        GTİP: 6109.10.00 | GV oranı: %12 | KDV: %20</p>
        <div className="calc-box">
          <h3>Hesaplama Tablosu</h3>
          <div className="calc-row"><span className="calc-label">CIF Değeri (USD)</span><span className="calc-value">5.350 USD</span></div>
          <div className="calc-row"><span className="calc-label">CIF Değeri (TL) — 1 USD = 32 TL</span><span className="calc-value">171.200 TL</span></div>
          <div className="calc-row"><span className="calc-label">Gümrük Vergisi (%12)</span><span className="calc-value">20.544 TL</span></div>
          <div className="calc-row"><span className="calc-label">KDV Matrahı (CIF + GV)</span><span className="calc-value">191.744 TL</span></div>
          <div className="calc-row"><span className="calc-label">KDV (%20)</span><span className="calc-value">38.349 TL</span></div>
          <div className="calc-row"><span className="calc-label">Gümrük Hizmet Bedeli (tahmini)</span><span className="calc-value">~500 TL</span></div>
          <div className="calc-row"><span className="calc-label">Toplam Gümrük Maliyeti</span><span className="calc-value">~59.393 TL</span></div>
        </div>
        <div className="callout">
          <p>💡 <strong>Not:</strong> Bu hesaplama varsayımsal örnek olup güncel kurlar ve mevzuat değişkenlik gösterebilir. Kesin hesaplama için Melz uzmanlarıyla iletişime geçin.</p>
        </div>
        <h2>STA Kapsamında Vergi İndirimi</h2>
        <p>Eğer ithal ettiğiniz ürün Türkiye&apos;nin Serbest Ticaret Anlaşması imzaladığı bir ülkeden geliyorsa ve tercihli menşe koşullarını karşılıyorsa, GV oranı sıfırlanabilir veya önemli ölçüde düşürülebilir. Örneğin AB ülkelerinden gelen sanayi ürünlerinde GV genellikle sıfırdır; yalnızca KDV ödenir.</p>
        <h2>Dikkat Edilmesi Gereken Durumlar</h2>
        <ul>
          <li><strong>Kıymet ihtilafı:</strong> Gümrük idaresi fatura bedelini düşük bulursa emsal kıymet belirleyebilir. Bu durumda daha yüksek vergi hesaplanır.</li>
          <li><strong>Antidamping vergisi:</strong> Özellikle Çin menşeli çelik, seramik ve bazı kimyasal ürünlerde ek vergi uygulanabilir. Beyan öncesi kontrol gereklidir.</li>
          <li><strong>ÖTV matrahı:</strong> ÖTV, GV&apos;nin üstüne değil genellikle CIF değerinin üstüne eklenir; ürüne göre değişkenlik gösterir.</li>
          <li><strong>İndirimli KDV:</strong> Gıda maddelerinin bir kısmında KDV %1, sağlık ürünlerinde %10 uygulanabilir.</li>
        </ul>
        <div className="cta-box">
          <h3>Vergi Yükünüzü Önceden Hesaplayalım</h3>
          <p>İthalatınızın toplam maliyetini Melz uzmanlarıyla birlikte hesaplayın, rekabetçi bir fiyatlandırma stratejisi belirleyin.</p>
          <Link href="/#contact" className="cta-btn">Ücretsiz Maliyet Analizi</Link>
        </div>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.canonical },
    openGraph: { title: article.ogTitle, description: article.ogDesc, url: article.canonical, type: 'article' },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.ogTitle,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { '@type': 'Organization', name: 'Melz Gümrük Müşavirliği' },
    publisher: { '@type': 'Organization', name: 'Melz Gümrük Müşavirliği', url: 'https://www.melzgumruk.com' },
    url: article.canonical,
    inLanguage: 'tr',
  };

  return (
    <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff', lineHeight: 1.7 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="article-nav">
        <Link href="/" className="logo">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span className="logo-main" style={{ marginLeft: 10 }}>Melz</span>
        </Link>
        <Link href="/blog" className="nav-back">← Blog</Link>
      </nav>
      <article className="article-wrap">
        <span className="article-tag">{article.tag}</span>
        <h1>{article.ogTitle}</h1>
        <div className="article-meta">{article.meta}</div>
        {article.content}
      </article>
      <footer className="simple-footer">
        © 2026 Melz Gümrük Müşavirliği · <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>melzgumruk.com</Link>
      </footer>
    </div>
  );
}
