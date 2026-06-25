# SEO Tam Denetim Raporu — melzgumruk.com
**Tarih:** 25 Haziran 2026  
**Denetlenen URL:** https://www.melzgumruk.com  
**Altyapı:** Vercel CDN, Statik HTML  
**İş Türü:** Yerel Profesyonel Hizmet — Gümrük Müşavirliği & Lojistik (B2B, İstanbul)

---

## Genel SEO Sağlık Skoru

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   SEO SAĞLIK SKORU:  38 / 100   ████░░░░░░  DÜŞÜK  │
│                                                     │
│   Teknik SEO          35/100  ████░░░░░░            │
│   İçerik Kalitesi     30/100  ███░░░░░░░            │
│   Schema Markup        0/100  ░░░░░░░░░░            │
│   Performans          60/100  ██████░░░░            │
│   AI Arama Hazırlığı  15/100  █░░░░░░░░░            │
│   Yerel SEO           40/100  ████░░░░░░            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

> **Sonuç:** Site görsel olarak profesyonel ancak SEO temelleri büyük ölçüde eksik.
> Kısa vadeli düzeltmelerle skor 65-75 bandına taşınabilir.

---

## Yönetici Özeti

**5 Kritik Sorun:**
1. Meta description yok — Google rastgele snippet seçiyor
2. Schema markup (JSON-LD) tamamen yok — yerel arama görünürlüğü sıfır
3. sitemap.xml ve robots.txt yok
4. hreflang yok — ikilidil site Google'da tek dil gibi işleniyor
5. İçerik çok az (~310 kelime) — sektörde sıralama mümkün değil

**5 Hızlı Kazanım (1 haftada uygulanabilir):**
1. Meta description ekle → CTR artışı
2. LocalBusiness schema ekle → Harita paketi görünürlüğü
3. robots.txt + sitemap.xml ekle → Tarama verimliliği
4. Favicon ekle → Marka güvenilirliği
5. Open Graph etiketleri ekle → Sosyal medya paylaşım kalitesi

---

## Teknik SEO Detayları

### Başarılı

| Kontrol | Durum |
|---------|-------|
| HTTPS (SSL) | ✅ Vercel otomatik sertifika |
| HSTS | ✅ 2 yıl |
| Viewport meta | ✅ |
| HTML lang="tr" | ✅ |
| H1 (tek adet) | ✅ |
| Vercel CDN + GZIP | ✅ |

### Eksikler (Öncelik Sırasıyla)

| Sorun | Önem | Düzeltme |
|-------|------|---------|
| Meta description yok | 🔴 KRİTİK | `<meta name="description" ...>` ekle |
| Schema markup yok | 🔴 KRİTİK | JSON-LD LocalBusiness ekle |
| sitemap.xml yok | 🟠 YÜKSEK | Statik XML dosyası oluştur |
| robots.txt yok | 🟠 YÜKSEK | Kök dizine ekle |
| Canonical tag yok | 🟠 YÜKSEK | `<link rel="canonical">` ekle |
| hreflang yok | 🟠 YÜKSEK | TR/EN için hreflang ekle |
| Open Graph yok | 🟡 ORTA | og:title, og:description, og:image |
| Favicon yok | 🟡 ORTA | favicon.ico veya SVG |
| Güvenlik header'ları | 🟡 ORTA | vercel.json ile CSP, X-Frame-Options |

---

## İçerik Kalitesi

### Kelime Sayısı
**~310 kelime** — Sektör ortalaması 800-1500+ kelime.

### E-E-A-T Değerlendirmesi

| Sinyal | Durum |
|--------|-------|
| Adres | ✅ |
| Telefon | ✅ |
| Çalışma saatleri | ✅ |
| Ekip bilgisi | ❌ |
| Müşteri referansları | ❌ |
| Gümrük Müşavirliği lisans/ruhsat | ❌ |
| Basın/medya linkleri | ❌ |

### Hedef Anahtar Kelimeler (Önerilen)

```
TR Pazarı:
- gümrük müşavirliği istanbul (Yüksek niyet)
- ithalat gümrük işlemleri
- ihracat gümrük müşaviri
- bakırköy gümrük müşavirliği (Yerel)
- lojistik ve gümrük hizmetleri

EN Pazarı:
- customs consultancy istanbul
- turkey customs broker
- import export customs turkey
```

---

## Schema Markup

**Mevcut: 0 blok**

Önerilen şema türleri:
- `LocalBusiness` + `ProfessionalService` — KRİTİK
- `WebSite` — Sitelink Searchbox için
- `Service` — Her hizmet için

Örnek kod: `findings/schema.md` dosyasına bakın.

---

## Performans

| Metrik | Değer |
|--------|-------|
| Sunucu | Vercel (Frankfurt) |
| CDN | ✅ Aktif |
| GZIP | ✅ Aktif |
| HTML boyutu | ~41KB |
| Hero video | 23MB (optimize gerekiyor) |

**En büyük sorun:** Hero videosunun 23MB olması mobil LCP'yi olumsuz etkiler.

---

## Yerel SEO

| Kontrol | Durum |
|---------|-------|
| NAP sayfada | ✅ |
| LocalBusiness schema | ❌ |
| Google Business Profile | Bilinmiyor — doğrulanmalı |
| Müşteri yorumları (GBP) | Bilinmiyor |

---

## AI Arama Hazırlığı (GEO)

**Skor: 15/100** — İçerik AI sistemleri tarafından alıntılanamayacak kadar yüzeysel.

Eksikler: llms.txt, FAQ bölümü, yeterli içerik derinliği, otorite sinyalleri.

---

## Öncelikli Eylem Planı

### Faz 1 — Kritik Düzeltmeler (1. Hafta, ~3-5 saat)

- [ ] Meta description ekle (TR + EN)
- [ ] Canonical tag ekle
- [ ] LocalBusiness + WebSite JSON-LD schema ekle
- [ ] robots.txt oluştur
- [ ] sitemap.xml oluştur
- [ ] Favicon ekle
- [ ] Open Graph + Twitter Card meta etiketleri ekle

### Faz 2 — Yüksek Etkili İyileştirmeler (2-3. Hafta)

- [ ] hreflang etiketleri
- [ ] Hero video WebM + preload=none + poster
- [ ] Google Business Profile oluştur/doğrula
- [ ] vercel.json ile güvenlik header'ları
- [ ] llms.txt dosyası
- [ ] İçerik derinleştirme (her hizmet 300+ kelime)

### Faz 3 — İçerik ve Otorite (2. Ay)

- [ ] Blog bölümü (aylık 2-4 makale)
- [ ] FAQ bölümü
- [ ] Müşteri referansları
- [ ] Ekip/hakkımızda sayfası
- [ ] Sertifikalar ve ruhsat bilgileri
- [ ] Hizmet başına ayrı URL

### Faz 4 — İzleme (Sürekli)

- [ ] Google Search Console bağla
- [ ] Google Analytics 4 kur
- [ ] Aylık sıralama takibi
- [ ] Core Web Vitals takibi

---

## Kaynaklar

- Detaylı teknik bulgular: `findings/technical.md`
- İçerik analizi: `findings/content.md`
- Schema örnekleri: `findings/schema.md`
- Performans analizi: `findings/performance.md`
- AI arama hazırlığı: `findings/geo.md`
- Yapılandırılmış veri: `audit-data.json`
