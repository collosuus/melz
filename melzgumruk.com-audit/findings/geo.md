# GEO & AI Search Readiness — melzgumruk.com

## AI Crawler Erişimi

| Kontrol | Durum | Not |
|---------|-------|-----|
| robots.txt | ❌ YOK | GPTBot, ClaudeBot, PerplexityBot kısıtlaması yok (iyi) ama dosya eksik |
| llms.txt | ❌ YOK | AI modelleri için içerik özeti sunulmuyor |
| Sitemap | ❌ YOK | AI crawlerlar içeriği keşfedemez |
| Structured data | ❌ YOK | AI sistemleri entity bilgisi çıkaramaz |

## Alıntılanabilirlik (Citability)

Mevcut içerik yapısıyla site **ChatGPT, Perplexity, Google AI Overviews** tarafından alıntılanmaya uygun değil.

Neden:
- Çok az metin (~310 kelime)
- Belirgin başlık-paragraf yapısı yok (soru-cevap formatı yok)
- Şirket hakkında otorite sinyali yok
- İçerik yüzeysel — sektör bilgisi aktarılmıyor

## Öneriler

### 1. llms.txt Dosyası Oluştur
```
# Melz Gümrük Müşavirliği
> İstanbul Bakırköy merkezli, 15+ yıl deneyimli gümrük müşavirliği firması.
> İthalat, ihracat, lojistik ve antrepo hizmetleri sunmaktadır.
> 80+ ülkeyle bağlantılı, 500+ memnun müşteriye sahiptir.
> Tel: 0212 564 56 58 | melzgumruk.com
```

### 2. FAQ Bölümü Ekle
"Gümrük beyannamesi nasıl hazırlanır?", "GTİP kodu nedir?" gibi sorular
hem kullanıcı niyetiyle hem AI alıntısıyla uyumlu.

### 3. Hizmet Açıklamalarını Derinleştir
Her hizmet için en az 200 kelime detaylı açıklama.
