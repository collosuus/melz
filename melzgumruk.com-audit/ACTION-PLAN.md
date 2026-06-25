# Öncelikli Eylem Planı — melzgumruk.com

## Bu Hafta Yapılacaklar (Kritik — ~3-5 saat)

### 1. Meta Description Ekle (30 dk)
```html
<!-- index.html <head> içine -->
<meta name="description" content="İstanbul Bakırköy merkezli Melz Gümrük Müşavirliği — ithalat, ihracat ve lojistik süreçlerinizi uçtan uca yönetiyoruz. 15+ yıl deneyim, 80+ ülke bağlantısı." />
```
EN versiyonu için JS ile dil değişimine göre güncelleme yapılabilir.

### 2. Canonical + OG + Schema Ekle (60 dk)
```html
<!-- Canonical -->
<link rel="canonical" href="https://www.melzgumruk.com/" />

<!-- Open Graph -->
<meta property="og:title" content="Melz Gümrük Müşavirliği — İstanbul" />
<meta property="og:description" content="İthalat, ihracat ve lojistik süreçlerinizi uçtan uca yönetiyoruz. 15+ yıl deneyim." />
<meta property="og:url" content="https://www.melzgumruk.com/" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://www.melzgumruk.com/melz-logo-footer-large-500x160.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Melz Gümrük Müşavirliği" />
<meta name="twitter:description" content="İstanbul merkezli gümrük ve lojistik çözümleri." />

<!-- JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.melzgumruk.com/#business",
      "name": "Melz Gümrük Müşavirliği",
      "description": "İstanbul Bakırköy merkezli, 15+ yıl deneyimli gümrük müşavirliği ve lojistik hizmetleri firması.",
      "url": "https://www.melzgumruk.com",
      "telephone": "+90-212-564-56-58",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "E5 Yanyol Cad, Selenium Retro 9, Daire 102, Kat: 14",
        "addressLocality": "Bakırköy",
        "addressRegion": "İstanbul",
        "postalCode": "34144",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.9794,
        "longitude": 28.8573
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "areaServed": "Worldwide",
      "knowsAbout": ["Gümrük Müşavirliği", "İthalat", "İhracat", "Lojistik", "Antrepo"],
      "logo": "https://www.melzgumruk.com/melz-logo-footer-large-500x160.png",
      "image": "https://www.melzgumruk.com/melz-logo-footer-large-500x160.png",
      "foundingDate": "2010",
      "numberOfEmployees": {"@type": "QuantitativeValue", "minValue": 10}
    },
    {
      "@type": "WebSite",
      "@id": "https://www.melzgumruk.com/#website",
      "url": "https://www.melzgumruk.com",
      "name": "Melz Gümrük Müşavirliği",
      "inLanguage": ["tr", "en"],
      "publisher": {"@id": "https://www.melzgumruk.com/#business"}
    }
  ]
}
</script>
```

### 3. Favicon Ekle (15 dk)
Logo dosyalarından `.ico` oluştur veya SVG kullan:
```html
<link rel="icon" type="image/png" href="/melz-logo-header-small-160x50.png" />
<link rel="apple-touch-icon" href="/melz-logo-header-standard-240x75.png" />
```

### 4. robots.txt Oluştur (10 dk)
`/robots.txt` dosyası oluştur:
```
User-agent: *
Allow: /

Sitemap: https://www.melzgumruk.com/sitemap.xml
```

### 5. sitemap.xml Oluştur (15 dk)
`/sitemap.xml` dosyası oluştur:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.melzgumruk.com/</loc>
    <lastmod>2026-06-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="https://www.melzgumruk.com/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.melzgumruk.com/"/>
  </url>
</urlset>
```

### 6. vercel.json ile Güvenlik Header'ları (20 dk)
`/vercel.json` dosyası oluştur:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 2-3. Hafta (Yüksek Etki)

- [ ] **hreflang** — `/en/` alt dizin yapısı veya `?lang=en` ile yönlendirme
- [ ] **Hero video** — WebM formatına dönüştür, `preload="none"` + `poster` ekle
- [ ] **Google Business Profile** — https://business.google.com adresinde oluştur/doğrula
- [ ] **llms.txt** — `/llms.txt` dosyası oluştur
- [ ] **İçerik** — Her hizmet kartına 100-200 kelime daha ekle

## 2. Ay (İçerik & Otorite)

- [ ] Blog bölümü: `GTİP kodu nedir`, `İthalatta hangi belgeler gerekir`, `Gümrük vergisi nasıl hesaplanır`
- [ ] FAQ section: kullanıcı sorularını yanıtla
- [ ] Referans müşteriler / testimonials bölümü
- [ ] Google Search Console + GA4 kurulumu

---

**Tahmini etki:** Faz 1 tamamlandığında skor ~38 → ~65 beklenir.
