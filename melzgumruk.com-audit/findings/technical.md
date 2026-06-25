# Technical SEO Findings — melzgumruk.com

## Crawlability & Indexability

| Kontrol | Durum | Detay |
|---------|-------|-------|
| robots.txt | ❌ EKSİK | 404 dönüyor, Googlebot tüm sayfaları açık tarıyor |
| sitemap.xml | ❌ EKSİK | 404 dönüyor, arama motorlarına sayfa listesi verilmiyor |
| Canonical tag | ❌ EKSİK | Yineleme sorunu riski var |
| HTML lang attr | ✅ | `lang="tr"` mevcut |
| hreflang | ❌ EKSİK | Site TR/EN ikilidil ama hreflang yok → Google yanlış dil sürümü gösterebilir |
| Viewport meta | ✅ | Mevcut ve doğru |

## HTTPS & Güvenlik

| Kontrol | Durum | Detay |
|---------|-------|-------|
| HTTPS | ✅ | Vercel otomatik SSL |
| HSTS | ✅ | max-age=63072000 (~2 yıl) |
| Content-Security-Policy | ❌ EKSİK | XSS riski |
| X-Frame-Options | ❌ EKSİK | Clickjacking riski |
| X-Content-Type-Options | ❌ EKSİK | MIME sniffing riski |
| X-XSS-Protection | ❌ EKSİK | Eski tarayıcılar için |

## Sayfa Yapısı

| Kontrol | Durum | Detay |
|---------|-------|-------|
| H1 sayısı | ✅ | 1 adet |
| H2 yapısı | ✅ | 4 adet (mantıklı hiyerarşi) |
| Favicon | ❌ EKSİK | Tarayıcı sekmesinde logo yok, arama sonuçlarında görünmez |
| HTML boyutu | ⚠️ | 40KB, minify edilmemiş |
| Open Graph | ❌ EKSİK | Sosyal medya paylaşımlarında önizleme yok |
| Twitter Card | ❌ EKSİK | Twitter/X paylaşımlarında görsel yok |

## Öncelikli Teknik Düzeltmeler

1. **sitemap.xml** ekle — Vercel'de statik dosya olarak
2. **robots.txt** ekle
3. **Canonical tag** ekle
4. **hreflang** ekle (TR ve EN sürümler için)
5. **Favicon** ekle (.ico veya SVG)
6. **OG + Twitter Card** meta etiketleri ekle
7. Vercel **security headers** (`vercel.json` ile)
