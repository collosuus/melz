# Melz Gümrük Müşavirliği — Proje Dokümantasyonu

## Proje Özeti

Melz Gümrük Müşavirliği'nin kurumsal web sitesi. İstanbul Bakırköy merkezli, uluslararası gümrük ve lojistik hizmetleri sunan bir şirkete ait tek sayfalık (single-page) tanıtım sitesi.

## Teknik Yığın

- **Saf HTML/CSS/JavaScript** — framework yok, build tool yok, npm yok
- **Tek dosya:** `index.html` (tüm HTML, CSS ve JS bu dosyada)
- **Fontlar:** Google Fonts — `Barlow Condensed` (başlıklar), `Barlow` (gövde)
- **Dağıtım:** Statik dosya, herhangi bir sunucuya doğrudan yüklenebilir

## Dosya Yapısı

```
melz/
├── index.html                          # Tek kaynak dosya (HTML + CSS + JS)
├── melz-logo-header-mobile-200x60.png  # Nav ve footer logosu
├── melz-logo-header-desktop-320x100.png
├── melz-logo-header-small-160x50.png
├── melz-logo-header-standard-240x75.png
├── melz-logo-footer-large-500x160.png
├── 12028815_1920_1080_24fps.mp4        # Hero bölümü arkaplan videosu
└── CLAUDE.md
```

> **Not:** `10343918-hd_1920_1080_24fps.mp4` (Why bölümü videosu) GitHub'ın 100MB limitini aştığı için git geçmişinden kaldırılmıştır. Dosya local'de tutulabilir ama git'e eklenmez (`.gitignore`'da `*.mp4` kuralı var).

## Renk Paleti (CSS değişkenleri)

| Değişken         | Renk       | Kullanım                        |
|------------------|------------|---------------------------------|
| `--navy`         | `#0a1628`  | Ana arkaplan                    |
| `--navy-mid`     | `#112240`  | Servis/process bölüm arkaplanı  |
| `--blue`         | `#1a4f8a`  | Vurgu efektleri                 |
| `--accent`       | `#c8922a`  | Altın/turuncu ana vurgu rengi   |
| `--accent-light` | `#e8b44a`  | Hover durumları                 |
| `--text-muted`   | `#8a9ab5`  | İkincil metin                   |

## Sayfa Bölümleri

| Bölüm      | ID          | Açıklama                                        |
|------------|-------------|--------------------------------------------------|
| Hero       | `#hero`     | Video arkaplan, slogan, CTA butonları            |
| İstatistik | `.stats-bar`| 15+ yıl, 80+ ülke, 500+ müşteri, 24/7 destek   |
| Hizmetler  | `#services` | 4 hizmet kartı (müşavirlik, lojistik, antrepo, danışmanlık) |
| Neden Melz | `#why`      | 3 özellik (hız, uyumluluk, 80+ ülke erişimi)    |
| Süreç      | `#process`  | 5 adım: Talep → Belge → Beyan → Vergi → Teslimat|
| İletişim   | `#contact`  | Adres/telefon bilgileri + iletişim formu         |
| Footer     | `footer`    | Telif hakkı + hızlı linkler                      |

## Çift Dil Sistemi (TR/EN)

Dil değiştirme mekanizması JavaScript ile çalışır:

- Her metin elementi `data-tr` ve `data-en` nitelikleri taşır
- Input placeholder'ları `data-placeholder-tr` / `data-placeholder-en` ile yönetilir
- `setLang(lang)` fonksiyonu tüm içeriği günceller
- Varsayılan dil: Türkçe (`tr`)

Yeni çevrilebilir metin eklerken:
```html
<span data-tr="Türkçe metin" data-en="English text">Türkçe metin</span>
```

## Hizmetler

1. **Gümrük Müşavirliği** — Beyanname hazırlama, tarife sınıflandırması, vergi hesaplama
2. **Lojistik Yönetimi** — Deniz, hava, kara taşımacılığı entegrasyonu
3. **Antrepo Hizmetleri** — Gümrüklü depolama, elleçleme, paketleme
4. **Ticaret Danışmanlığı** — Yeni pazar girişi, serbest ticaret anlaşmaları, menşe belgelendirmesi

## Şirket Bilgileri

- **Adres:** 7-8-9-10. Kısım Mah, E5 Yanyol Cad, Selenium Retro 9, Daire 102, Kat: 14, Bakırköy / İstanbul
- **Telefon:** 0212 564 56 58
- **Çalışma Saatleri:** Pazartesi – Cuma, 08:00 – 18:00
- **GitHub Repo:** `git@github.com:collosuus/melz.git`

## Animasyonlar

- **Scroll reveal:** `.reveal` sınıflı elementler `IntersectionObserver` ile görünür olunca `visible` sınıfı alır
- **Video arka planlar:** Hero ve Why bölümlerinde `autoplay muted loop playsinline` video
- **Nav:** Scroll 80px geçince arkaplan opaklığı artar
- **Hover efektleri:** Servis kartlarında sol kenar çizgisi, stat hover rengi

## Önemli Kurallar

- **Video dosyaları git'e eklenmez** (`.gitignore`'da `*.mp4`, `*.mov`, `*.avi`, `*.mkv` kapalı)
- **100MB üzeri dosya GitHub'a gönderilemez** — büyük medya için CDN veya harici depolama kullanılmalı
- İletişim formu şu an sadece `alert()` gösterir — backend entegrasyonu yapılmamış
