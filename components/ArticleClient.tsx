'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from './LangProvider';

interface ArticleClientProps {
  slug: string;
}

interface LocalizedArticle {
  tag: { tr: string; en: string; zh: string };
  title: { tr: string; en: string; zh: string };
  meta: { tr: string; en: string; zh: string };
  content: { tr: React.ReactNode; en: React.ReactNode; zh: React.ReactNode };
}

const articles: Record<string, LocalizedArticle> = {
  'gtip-kodu-nedir': {
    tag: { tr: 'Gümrük', en: 'Customs', zh: '报关' },
    title: {
      tr: 'GTİP Kodu Nedir? Nasıl Bulunur?',
      en: 'What is an HS Code? How to Find It?',
      zh: 'HS编码是什么？如何查询？',
    },
    meta: {
      tr: 'Melz Gümrük Müşavirliği · Haziran 2026 · 5 dakika okuma',
      en: 'Melz Customs Consultancy · June 2026 · 5 min read',
      zh: 'Melz报关咨询 · 2026年6月 · 阅读时间5分钟',
    },
    content: {
      tr: (
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
      en: (
        <>
          <p>One of the most critical concepts you&apos;ll encounter in import or export is the HS code. Without correctly determining the HS code, you can neither know the tax you&apos;ll pay nor learn about legal restrictions in advance. In this guide, we explain step by step what the HS code is, how it&apos;s found, and what incorrect classification can lead to.</p>
          <h2>What is an HS Code?</h2>
          <p>The HS code stands for <strong>Harmonized System</strong> code, developed by the World Customs Organization. This system identifies all goods traded internationally under a 6-digit international code; in Turkey, 2 more digits are added to form a 12-digit national code (GTİP).</p>
          <p>Example HS code: <strong>6109.10.00.00.11</strong> → Cotton, men&apos;s/boys&apos; T-shirt.</p>
          <h2>Why is the HS Code So Important?</h2>
          <ul>
            <li>The <strong>customs duty rate</strong> is determined according to this code.</li>
            <li>Whether <strong>VAT, SCT</strong> and other fees apply depends on the code.</li>
            <li><strong>Prohibitions and restrictions</strong> (CE certificate requirement, import license, surveillance, etc.) are defined according to the HS code.</li>
            <li><strong>Certificate of origin</strong> (EUR.1, A.TR) and free trade agreement application are based on the HS code.</li>
            <li>Declaring the wrong code can result in <strong>penal sanctions and additional tax assessment</strong>.</li>
          </ul>
          <h2>How is the HS Code Determined?</h2>
          <p>HS code determination is based on the product&apos;s physical characteristics, composition, intended use, and origin. The general process is as follows:</p>
          <ol>
            <li><strong>Chapter determination:</strong> The main section the product falls into is found in the Turkish Customs Tariff Schedule (e.g., Chapter 61: Knitted apparel).</li>
            <li><strong>Heading and subheading determination:</strong> The product&apos;s characteristics are detailed to narrow down the 4- and 6-digit code.</li>
            <li><strong>National subdivision:</strong> The full 10-12 digit code specific to Turkey is completed.</li>
            <li><strong>Classification rules check:</strong> General Interpretive Rules (GIR) and relevant rulings are reviewed.</li>
          </ol>
          <div className="callout">
            <p>💡 <strong>Tip:</strong> You can make a preliminary inquiry via the Ministry of Trade&apos;s <em>gumrukrehberi.gtb.gov.tr</em> portal. However, for official binding effect, we recommend applying for Binding Tariff Information (BTI).</p>
          </div>
          <h2>Risks of Incorrect HS Code Declaration</h2>
          <ul>
            <li><strong>Tax shortfall plus 10-30% penalty assessment</strong> due to underpayment</li>
            <li><strong>Administrative fines</strong> for customs regulation violations</li>
            <li><strong>Confiscation of goods</strong> for prohibited/restricted products</li>
            <li><strong>Loss of AEO status</strong> for repeated violations</li>
            <li><strong>Customs audit and investigation</strong> against the company</li>
          </ul>
          <h2>What is Binding Tariff Information (BTI)?</h2>
          <p>You can apply to the Ministry of Trade to obtain an official HS code determination for your product. BTI is valid for 3 years and is considered binding by customs authorities. This method provides significant assurance, especially for high-volume and risky import items.</p>
          <div className="cta-box">
            <h3>Not Sure About Your HS Code?</h3>
            <p>Melz experts analyze your product to determine the correct HS code and assess potential tax risks in advance.</p>
            <Link href="/#contact" className="cta-btn">Get a Free Consultation</Link>
          </div>
        </>
      ),
      zh: (
        <>
          <p>在进出口业务中，您会遇到的最关键的概念之一就是HS编码。若不能正确确定HS编码，您既无法知晓应缴纳的税款，也无法提前了解相关法律限制。本指南将逐步说明HS编码是什么、如何查询，以及错误归类可能带来的后果。</p>
          <h2>什么是HS编码？</h2>
          <p>HS编码即<strong>协调制度编码</strong>（Harmonized System），由世界海关组织制定。该系统以6位国际通用编码对所有贸易商品进行分类；在土耳其，会在此基础上再加2位，形成12位的国家编码（GTİP）。</p>
          <p>HS编码示例：<strong>6109.10.00.00.11</strong> → 棉制男式/男童T恤。</p>
          <h2>HS编码为何如此重要？</h2>
          <ul>
            <li><strong>关税税率</strong>依据此编码确定。</li>
            <li>是否征收<strong>增值税、特别消费税</strong>及其他费用取决于该编码。</li>
            <li><strong>禁止与限制措施</strong>（如CE认证要求、进口许可证、监管措施等）依据HS编码确定。</li>
            <li><strong>原产地证明</strong>（EUR.1、A.TR）及自由贸易协定的适用均以HS编码为基础。</li>
            <li>申报错误编码可能导致<strong>行政处罚及补缴税款</strong>。</li>
          </ul>
          <h2>如何确定HS编码？</h2>
          <p>HS编码的确定依据产品的物理特性、成分、用途及原产地。一般流程如下：</p>
          <ol>
            <li><strong>确定章节：</strong>在土耳其海关税则表中找到产品所属的主要类别（例如第61章：针织服装）。</li>
            <li><strong>确定品目及子目：</strong>详细分析产品特性，缩小至4位及6位编码。</li>
            <li><strong>国家细分编码：</strong>完成土耳其特有的10-12位完整编码。</li>
            <li><strong>核对归类规则：</strong>参照《归类总规则》（GIR）及相关裁定。</li>
          </ol>
          <div className="callout">
            <p>💡 <strong>提示：</strong>您可以通过土耳其贸易部的 <em>gumrukrehberi.gtb.gov.tr</em> 门户进行初步查询。但若需具有官方约束力的结果，我们建议申请约束性关税信息（BTI）。</p>
          </div>
          <h2>错误申报HS编码的风险</h2>
          <ul>
            <li>因少缴税款而产生<strong>税款差额及10%-30%的罚款</strong></li>
            <li>因违反海关法规而受到<strong>行政处罚</strong></li>
            <li>违禁/限制商品可能被<strong>没收</strong></li>
            <li>屡次违规可能导致<strong>AEO资质被取消</strong></li>
            <li>企业可能面临<strong>海关稽查与调查</strong></li>
          </ul>
          <h2>什么是约束性关税信息（BTI）？</h2>
          <p>您可以向贸易部申请，为您的产品获取官方HS编码认定。BTI有效期为3年，海关机关须予以认可。该方式尤其适用于进口量大、风险较高的商品，能提供有力保障。</p>
          <div className="cta-box">
            <h3>不确定您的HS编码？</h3>
            <p>Melz专家将为您分析产品，确定正确的HS编码，并提前评估潜在的税务风险。</p>
            <Link href="/#contact" className="cta-btn">免费咨询</Link>
          </div>
        </>
      ),
    },
  },
  'ithalat-belgeleri': {
    tag: { tr: 'İthalat', en: 'Import', zh: '进口' },
    title: {
      tr: 'İthalatta Hangi Belgeler Gerekir?',
      en: 'What Documents Are Required for Import?',
      zh: '进口需要哪些单证？',
    },
    meta: {
      tr: 'Melz Gümrük Müşavirliği · Haziran 2026 · 6 dakika okuma',
      en: 'Melz Customs Consultancy · June 2026 · 6 min read',
      zh: 'Melz报关咨询 · 2026年6月 · 阅读时间6分钟',
    },
    content: {
      tr: (
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
      en: (
        <>
          <p>One of the biggest obstacles when purchasing goods from abroad is missing or incorrect documents. A missing document during the customs process can hold up the entire shipment, leading to additional costs and delays. In this guide, we comprehensively cover the basic and product-specific documents required for import operations.</p>
          <h2>Basic Documents (Required for Every Import)</h2>
          <table>
            <thead>
              <tr><th>Document</th><th>Description</th><th>Obtained From</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Commercial Invoice</strong></td><td>Issued by the seller, showing price, quantity, and parties involved. Original or notarized copy required.</td><td>Foreign seller</td></tr>
              <tr><td><strong>Packing List</strong></td><td>Lists the weight, volume, and contents of packages. Mandatory for inspection and matching.</td><td>Foreign seller</td></tr>
              <tr><td><strong>Bill of Lading (B/L)</strong></td><td>Contract document between carrier and cargo owner in sea transport. Original required for delivery of goods.</td><td>Shipping company</td></tr>
              <tr><td><strong>Airway Bill (AWB)</strong></td><td>Equivalent of the bill of lading in air transport. Unlike B/L, it is non-negotiable and named.</td><td>Airline company</td></tr>
              <tr><td><strong>Certificate of Origin</strong></td><td>Chamber of commerce-approved document certifying the country where goods were produced.</td><td>Exporting country&apos;s chamber of commerce</td></tr>
            </tbody>
          </table>
          <h2>Preferential Origin Documents (Under FTAs)</h2>
          <p>For imports from countries with which Turkey has signed a Free Trade Agreement, preferential (reduced or zero) duty may apply instead of the standard customs duty. One of the following documents is required:</p>
          <ul>
            <li><strong>EUR.1 Movement Certificate:</strong> Used in trade with the EU and many FTA countries.</li>
            <li><strong>A.TR Movement Certificate:</strong> Valid only for industrial products under the EU–Turkey Customs Union.</li>
            <li><strong>Form-A (GSP):</strong> Used for preferential tariffs on imports from developing countries.</li>
            <li><strong>Invoice Declaration:</strong> Can be used instead of EUR.1 for shipments below a certain limit.</li>
          </ul>
          <h2>Product-Specific Additional Documents</h2>
          <table>
            <thead>
              <tr><th>Document</th><th>Required For</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>CE Conformity Certificate</strong></td><td>Electrical/electronic products, machinery, toys, medical devices</td></tr>
              <tr><td><strong>Food Analysis Report</strong></td><td>Food products, agricultural products, additives</td></tr>
              <tr><td><strong>CITES Certificate</strong></td><td>Products from endangered species</td></tr>
              <tr><td><strong>Import License</strong></td><td>Controlled substances and products (subject to Ministry approval)</td></tr>
              <tr><td><strong>Surveillance Document</strong></td><td>Products under surveillance (prior authorization such as letter of credit/insurance)</td></tr>
              <tr><td><strong>Radiation Certificate</strong></td><td>Products from Japan, Ukraine, and certain countries with past nuclear incidents</td></tr>
              <tr><td><strong>Halal / Kosher Certificate</strong></td><td>Certain food products (optional or market requirement)</td></tr>
            </tbody>
          </table>
          <div className="callout">
            <p>⚠️ <strong>Attention:</strong> Customs authorities will not release goods if documents are missing. A period of generally 30 days is granted to complete missing documents; warehouse costs during this period are borne by the buyer.</p>
          </div>
          <h2>Insurance Document</h2>
          <p>Under CIF (Cost, Insurance, Freight) delivery terms, the seller covers insurance and transfers the policy to the buyer. Under FOB or EXW terms, the buyer must arrange their own insurance policy. Since customs value is calculated based on the CIF value, correctly declaring the insurance value is important.</p>
          <h2>Points to Consider in Document Management</h2>
          <ul>
            <li>The HS code on the invoice must match the declared code.</li>
            <li>Currency must be consistent across documents (avoid mixing TRY, USD, EUR).</li>
            <li>Seller and buyer information must match exactly across documents.</li>
            <li>The delivery location on the bill of lading must be consistent with the actual entry customs point.</li>
          </ul>
          <div className="cta-box">
            <h3>Let Us Prepare Your Import Documents Completely</h3>
            <p>Melz experts check all your import documents, identify gaps, and speed up your customs process.</p>
            <Link href="/#contact" className="cta-btn">Contact Us Now</Link>
          </div>
        </>
      ),
      zh: (
        <>
          <p>从海外采购货物时，最大的障碍之一就是单证缺失或有误。在报关过程中，任何一份单证的缺失都可能导致整批货物滞留，产生额外费用和延误。本指南将全面介绍进口业务所需的基本单证及特定产品所需的附加单证。</p>
          <h2>基本单证（每次进口均需）</h2>
          <table>
            <thead>
              <tr><th>单证</th><th>说明</th><th>由谁提供</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>商业发票</strong></td><td>由卖方开具，注明价格、数量及交易双方信息。需提供正本或公证副本。</td><td>境外卖方</td></tr>
              <tr><td><strong>装箱单</strong></td><td>列明各包装件的重量、体积及内容物，查验及核对时必需。</td><td>境外卖方</td></tr>
              <tr><td><strong>海运提单（B/L）</strong></td><td>海运中承运人与货主之间的合同凭证，提货时须提供正本。</td><td>船运公司</td></tr>
              <tr><td><strong>空运单（AWB）</strong></td><td>空运中相当于提单的单证，与提单不同，不可转让且为记名单证。</td><td>航空公司</td></tr>
              <tr><td><strong>原产地证明</strong></td><td>经商会认证，证明货物生产国的文件。</td><td>出口国商会</td></tr>
            </tbody>
          </table>
          <h2>优惠原产地单证（自贸协定项下）</h2>
          <p>从与土耳其签署自由贸易协定的国家进口货物时，可适用优惠（降低或零）关税，而非标准关税。为此需提供以下单证之一：</p>
          <ul>
            <li><strong>EUR.1运动证书：</strong>适用于与欧盟及多数自贸协定国家的贸易。</li>
            <li><strong>A.TR运动证书：</strong>仅适用于欧盟-土耳其关税同盟范围内的工业产品。</li>
            <li><strong>Form-A（普惠制）：</strong>适用于从发展中国家进口时享受优惠关税。</li>
            <li><strong>发票声明：</strong>低于一定限额的货物可用发票声明代替EUR.1。</li>
          </ul>
          <h2>特定产品所需附加单证</h2>
          <table>
            <thead>
              <tr><th>单证</th><th>适用产品</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>CE认证</strong></td><td>电气/电子产品、机械、玩具、医疗器械</td></tr>
              <tr><td><strong>食品检测报告</strong></td><td>食品、农产品、添加剂</td></tr>
              <tr><td><strong>CITES证书</strong></td><td>濒危物种制品</td></tr>
              <tr><td><strong>进口许可证</strong></td><td>管制物质及产品（须经部委批准）</td></tr>
              <tr><td><strong>监管文件</strong></td><td>受监管产品（如信用证/保险等事前审批）</td></tr>
              <tr><td><strong>辐射检测证明</strong></td><td>来自日本、乌克兰及部分曾发生核事故国家的产品</td></tr>
              <tr><td><strong>清真/犹太洁食认证</strong></td><td>部分食品（视市场要求或自愿申请）</td></tr>
            </tbody>
          </table>
          <div className="callout">
            <p>⚠️ <strong>注意：</strong>单证不全时海关不会放行货物。通常给予30天期限补齐缺失单证，期间产生的仓储费用由买方承担。</p>
          </div>
          <h2>保险单证</h2>
          <p>在CIF（成本、保险费加运费）交货条件下，由卖方投保并将保单转交买方；而在FOB或EXW条件下，则需由买方自行投保。由于关税完税价格是以CIF价值为基础计算的，因此正确申报保险价值非常重要。</p>
          <h2>单证管理注意事项</h2>
          <ul>
            <li>发票上的HS编码须与申报编码一致。</li>
            <li>各单证中的币种应保持一致（避免土耳其里拉、美元、欧元混用）。</li>
            <li>买卖双方信息须在各单证间完全一致。</li>
            <li>提单上的交货地点须与实际入境海关口岸相符。</li>
          </ul>
          <div className="cta-box">
            <h3>让我们为您完整准备进口单证</h3>
            <p>Melz专家将审核您的所有进口单证，发现缺漏并加快您的报关流程。</p>
            <Link href="/#contact" className="cta-btn">立即联系我们</Link>
          </div>
        </>
      ),
    },
  },
  'gumruk-vergisi-hesaplama': {
    tag: { tr: 'Vergi', en: 'Tax', zh: '税费' },
    title: {
      tr: 'Gümrük Vergisi Nasıl Hesaplanır?',
      en: 'How is Customs Duty Calculated?',
      zh: '关税如何计算？',
    },
    meta: {
      tr: 'Melz Gümrük Müşavirliği · Mayıs 2026 · 7 dakika okuma',
      en: 'Melz Customs Consultancy · May 2026 · 7 min read',
      zh: 'Melz报关咨询 · 2026年5月 · 阅读时间7分钟',
    },
    content: {
      tr: (
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
      en: (
        <>
          <p>Correctly calculating the total cost before importing is critical for your profitability analysis. Customs duty is not a single item; multiple taxes and fees are applied together. In this guide, we explain the step-by-step customs duty calculation method with a real example.</p>
          <h2>Customs Value: The Basis of Calculation</h2>
          <p>Customs duty is calculated based on the <strong>CIF value</strong> of the goods. The CIF value consists of three components:</p>
          <ul>
            <li><strong>C — Cost:</strong> The value of goods stated on the invoice</li>
            <li><strong>I — Insurance:</strong> Transport insurance fee</li>
            <li><strong>F — Freight:</strong> Transport fee</li>
          </ul>
          <p>If you are purchasing at FOB price, you must add the freight and insurance costs up to Turkey to the CIF value. These values are converted to Turkish Lira at the exchange rate (the Central Bank&apos;s announced rate is used).</p>
          <h2>Applicable Taxes and Fees</h2>
          <ol>
            <li><strong>Customs Duty (CD):</strong> CIF value × rate determined according to HS code</li>
            <li><strong>Value Added Tax (VAT):</strong> (CIF + CD) × 20% (general rate; 10% or 1% for some products)</li>
            <li><strong>Special Consumption Tax (SCT):</strong> Additional tax on products such as alcohol, tobacco, fuel, luxury vehicles</li>
            <li><strong>Mass Housing Fund:</strong> Additional fund on some agricultural products</li>
            <li><strong>Anti-dumping Duty:</strong> Additional protective duty on certain country–product combinations</li>
            <li><strong>Customs Service Fee:</strong> Fixed fee paid to the authority</li>
          </ol>
          <h2>Calculation with a Real Example</h2>
          <p>Scenario: You are importing 1,000 cotton T-shirts from China.<br />
          Invoice value: $5,000 | Freight: $300 | Insurance: $50 | Rate: 1 USD = 32 TRY<br />
          HS code: 6109.10.00 | CD rate: 12% | VAT: 20%</p>
          <div className="calc-box">
            <h3>Calculation Table</h3>
            <div className="calc-row"><span className="calc-label">CIF Value (USD)</span><span className="calc-value">$5,350</span></div>
            <div className="calc-row"><span className="calc-label">CIF Value (TRY) — 1 USD = 32 TRY</span><span className="calc-value">171,200 TRY</span></div>
            <div className="calc-row"><span className="calc-label">Customs Duty (12%)</span><span className="calc-value">20,544 TRY</span></div>
            <div className="calc-row"><span className="calc-label">VAT Base (CIF + CD)</span><span className="calc-value">191,744 TRY</span></div>
            <div className="calc-row"><span className="calc-label">VAT (20%)</span><span className="calc-value">38,349 TRY</span></div>
            <div className="calc-row"><span className="calc-label">Customs Service Fee (est.)</span><span className="calc-value">~500 TRY</span></div>
            <div className="calc-row"><span className="calc-label">Total Customs Cost</span><span className="calc-value">~59,393 TRY</span></div>
          </div>
          <div className="callout">
            <p>💡 <strong>Note:</strong> This calculation is a hypothetical example; current rates and regulations may vary. Contact Melz experts for an exact calculation.</p>
          </div>
          <h2>Tax Reduction Under FTAs</h2>
          <p>If the product you are importing comes from a country with which Turkey has a Free Trade Agreement and meets preferential origin conditions, the CD rate can be reduced to zero or significantly lowered. For example, CD is generally zero for industrial products from EU countries; only VAT is paid.</p>
          <h2>Points to Watch Out For</h2>
          <ul>
            <li><strong>Valuation dispute:</strong> If customs authorities find the invoice value too low, they may determine a reference value. This results in a higher calculated duty.</li>
            <li><strong>Anti-dumping duty:</strong> Additional duty may apply particularly to Chinese-origin steel, ceramics, and certain chemical products. Verification before declaration is required.</li>
            <li><strong>SCT base:</strong> SCT is generally added on top of the CIF value, not the CD; it varies by product.</li>
            <li><strong>Reduced VAT:</strong> VAT may be 1% for some food items and 10% for health products.</li>
          </ul>
          <div className="cta-box">
            <h3>Let&apos;s Calculate Your Tax Burden in Advance</h3>
            <p>Calculate the total cost of your import together with Melz experts and determine a competitive pricing strategy.</p>
            <Link href="/#contact" className="cta-btn">Free Cost Analysis</Link>
          </div>
        </>
      ),
      zh: (
        <>
          <p>在进口之前准确计算总成本，对您的盈利分析至关重要。关税并非单一税项，而是多种税费的综合征收。本指南将通过一个真实案例，逐步说明关税的计算方法。</p>
          <h2>完税价格：计算的基础</h2>
          <p>关税是以货物的<strong>CIF价值</strong>为基础计算的。CIF价值由以下三部分组成：</p>
          <ul>
            <li><strong>C — 成本（Cost）：</strong>发票上注明的货物金额</li>
            <li><strong>I — 保险（Insurance）：</strong>运输保险费用</li>
            <li><strong>F — 运费（Freight）：</strong>运输费用</li>
          </ul>
          <p>如果您以FOB价格采购，则需将运至土耳其的运费和保险费加入CIF价值中。这些金额将按汇率换算为土耳其里拉（采用土耳其中央银行公布汇率）。</p>
          <h2>适用的税费</h2>
          <ol>
            <li><strong>关税（CD）：</strong>CIF价值 × 依HS编码确定的税率</li>
            <li><strong>增值税（VAT）：</strong>（CIF + 关税）× 20%（一般税率；部分产品为10%或1%）</li>
            <li><strong>特别消费税（SCT）：</strong>针对酒类、烟草、燃油、豪华车辆等产品征收的附加税</li>
            <li><strong>大众住房基金：</strong>部分农产品适用的附加基金</li>
            <li><strong>反倾销税：</strong>针对特定国家-产品组合征收的附加保护性关税</li>
            <li><strong>海关服务费：</strong>缴纳给海关当局的固定费用</li>
          </ol>
          <h2>真实案例计算</h2>
          <p>场景：您从中国进口1,000件棉质T恤。<br />
          发票金额：5,000美元 | 运费：300美元 | 保险费：50美元 | 汇率：1美元=32里拉<br />
          HS编码：6109.10.00 | 关税税率：12% | 增值税：20%</p>
          <div className="calc-box">
            <h3>计算表</h3>
            <div className="calc-row"><span className="calc-label">CIF价值（美元）</span><span className="calc-value">5,350美元</span></div>
            <div className="calc-row"><span className="calc-label">CIF价值（里拉）— 1美元=32里拉</span><span className="calc-value">171,200里拉</span></div>
            <div className="calc-row"><span className="calc-label">关税（12%）</span><span className="calc-value">20,544里拉</span></div>
            <div className="calc-row"><span className="calc-label">增值税计税基数（CIF+关税）</span><span className="calc-value">191,744里拉</span></div>
            <div className="calc-row"><span className="calc-label">增值税（20%）</span><span className="calc-value">38,349里拉</span></div>
            <div className="calc-row"><span className="calc-label">海关服务费（预估）</span><span className="calc-value">约500里拉</span></div>
            <div className="calc-row"><span className="calc-label">总报关成本</span><span className="calc-value">约59,393里拉</span></div>
          </div>
          <div className="callout">
            <p>💡 <strong>提示：</strong>此计算仅为假设性示例，实际汇率及法规可能有所变动。如需精确计算，请联系Melz专家。</p>
          </div>
          <h2>自贸协定项下的关税减免</h2>
          <p>如果您进口的产品来自与土耳其签署自由贸易协定的国家，且符合优惠原产地条件，关税税率可降至零或大幅降低。例如，来自欧盟国家的工业产品关税通常为零，仅需缴纳增值税。</p>
          <h2>需要注意的情况</h2>
          <ul>
            <li><strong>价格争议：</strong>若海关认为发票金额偏低，可能会核定参考价值，从而导致计算出更高的关税。</li>
            <li><strong>反倾销税：</strong>尤其是中国原产的钢铁、陶瓷及部分化工产品可能被征收附加税，申报前需核实。</li>
            <li><strong>特别消费税计税基数：</strong>特别消费税通常是在CIF价值基础上加征，而非在关税基础上，具体因产品而异。</li>
            <li><strong>增值税优惠税率：</strong>部分食品增值税可为1%，保健产品可为10%。</li>
          </ul>
          <div className="cta-box">
            <h3>让我们提前为您计算税负</h3>
            <p>与Melz专家一起计算您进口业务的总成本，制定具有竞争力的定价策略。</p>
            <Link href="/#contact" className="cta-btn">免费成本分析</Link>
          </div>
        </>
      ),
    },
  },
};

export default function ArticleClient({ slug }: ArticleClientProps) {
  const { lang, setLang } = useLang();
  const t = (tr: string, en: string, zh: string) => lang === 'tr' ? tr : lang === 'en' ? en : zh;
  const article = articles[slug];
  if (!article) return null;

  return (
    <div style={{ background: '#0a1628', minHeight: '100vh', color: '#fff', lineHeight: 1.7 }}>
      <nav className="article-nav">
        <Link href="/" className="logo">
          <Image src="/melz-logo-header-mobile-200x60.png" alt="Melz Logo" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span className="logo-main" style={{ marginLeft: 10 }}>Melz</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div className="lang-bar">
            <button className={`lang-btn${lang === 'tr' ? ' active' : ''}`} onClick={() => setLang('tr')}>TR</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn${lang === 'zh' ? ' active' : ''}`} onClick={() => setLang('zh')}>中文</button>
          </div>
          <Link href="/blog" className="nav-back">← {t('Blog', 'Blog', '博客')}</Link>
        </div>
      </nav>
      <article className="article-wrap">
        <span className="article-tag">{t(article.tag.tr, article.tag.en, article.tag.zh)}</span>
        <h1>{t(article.title.tr, article.title.en, article.title.zh)}</h1>
        <div className="article-meta">{t(article.meta.tr, article.meta.en, article.meta.zh)}</div>
        {lang === 'tr' ? article.content.tr : lang === 'en' ? article.content.en : article.content.zh}
      </article>
      <footer className="simple-footer">
        © 2026 Melz Gümrük Müşavirliği · <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>melzgumruk.com</Link>
      </footer>
    </div>
  );
}
