# Performance Findings — melzgumruk.com

## Sunucu & Altyapı

| Metrik | Değer | Değerlendirme |
|--------|-------|---------------|
| CDN | Vercel (Frankfurt) | ✅ Küresel CDN |
| GZIP sıkıştırma | ✅ Aktif | |
| Cache-Control | public, max-age=0, must-revalidate | ⚠️ Edge cache aktif ama TTL 0 |
| HTTPS | ✅ | |
| HTTP/2 | ✅ (Vercel varsayılan) | |

## Sayfa Ağırlığı

| Kaynak | Durum |
|--------|-------|
| HTML | ~41KB (minify edilmemiş) |
| CSS | HTML içinde inline (ayrı dosya yok) |
| JavaScript | HTML içinde inline |
| Video (hero) | 23MB — ⚠️ büyük, lazy load yok |
| Fontlar | Google Fonts CDN (2 aile, 5 ağırlık) |

## Tespit Edilen Performans Sorunları

### ⚠️ Yüksek Öncelik: Video Dosyası (23MB)
Hero bölümündeki `12028815_1920_1080_24fps.mp4` dosyası 23MB. Bu:
- LCP (Largest Contentful Paint) süresini artırır
- Mobil kullanıcılarda sayfa yüklemesini yavaşlatır
- Önerilen: `preload="none"` veya `poster` ile ertelenmiş yükleme

### ⚠️ Orta Öncelik: HTML Minify Edilmemiş
Tüm CSS ve JS HTML içinde ve sıkıştırılmamış. Build adımı eklenerek ~30% boyut azaltılabilir.

### ⚠️ Orta Öncelik: Google Fonts Bloklaması
`<link rel="preconnect">` kullanılmış ✅ ama fontlar render-blocking. 
Öneri: `font-display: swap` + `preload` ile iyileştirilebilir.

### ℹ️ Bilgi: PageSpeed API Kota Aşımı
Otomatik CWV ölçümü API kota sınırı nedeniyle alınamadı.
Manuel test için: https://pagespeed.web.dev/analysis?url=https://www.melzgumruk.com

## Öneriler

1. Video için `preload="none"` + `poster` görseli ekle
2. HTML/CSS/JS minify et (Vercel build ile veya manuel)
3. `<link rel="preload" as="font">` ile kritik fontları önceden yükle
4. Hero videosunu WebM formatına dönüştür (MP4'ten ~30% küçük)
