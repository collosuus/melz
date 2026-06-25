# Schema / Structured Data Findings — melzgumruk.com

## Mevcut Durum

❌ **Sitede hiç JSON-LD schema markup yok.**

Bu, Google'ın sitenin ne hakkında olduğunu anlamasını zorlaştırır ve zengin sonuç (rich result) fırsatını kaçırır.

## Önerilen Schema Türleri

### 1. LocalBusiness + ProfessionalService (KRİTİK)
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Melz Gümrük Müşavirliği",
  "description": "İstanbul merkezli uluslararası gümrük müşavirliği ve lojistik hizmetleri",
  "url": "https://www.melzgumruk.com",
  "telephone": "+90-212-564-56-58",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "E5 Yanyol Cad, Selenium Retro 9, Daire 102, Kat: 14",
    "addressLocality": "Bakırköy",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "areaServed": "Worldwide",
  "serviceType": ["Customs Consultancy", "Logistics", "Warehousing", "Trade Consulting"]
}
```

### 2. WebSite (Sitelink Searchbox için)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.melzgumruk.com",
  "name": "Melz Gümrük Müşavirliği",
  "inLanguage": ["tr", "en"]
}
```

### 3. Service (her hizmet için)
Her `#services` kartı için ayrı `Service` schema önerilir.

### 4. BreadcrumbList (gelecekte çok sayfalı yapı için)

## Beklenen Fayda

- Google arama sonuçlarında **adres, telefon, çalışma saati** gösterimi
- Harita paketi (**Local Pack**) görünürlüğü
- Güvenilirlik sinyali artışı
