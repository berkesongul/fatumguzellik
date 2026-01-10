# 🚀 Hızlı Başlangıç Rehberi

## 5 Dakika İçinde Hazırlanın

### Adım 1: Siteyi Açın ⚡
Terminalden:
```bash
cd e:/Github\ Repos/fatumguzellik
python -m http.server 8000
```

Tarayıcıda aç: `http://localhost:8000`

### Adım 2: İçeriği Düzenle ✏️
`index.html` dosyasını açın ve değiştirin:
- Telefon numarası
- E-posta
- Adres
- Hizmet açıklamaları
- vb.

### Adım 3: Görselleri Ekle 🖼️
1. Görselleri `assets` klasörüne kopyalayın
2. `index.html`'de yorumlu satırları aktive edin
3. Yer tutucu divleri img tagıyla değiştirin

### Adım 4: Renkleri Değiştir 🎨
`css/style.css` dosyasının başında:
```css
:root {
    --primary-color: #d4a574;      /* Bunu değiştir */
    --secondary-color: #8b6f47;    /* Bunu değiştir */
    /* ... */
}
```

### Adım 5: Sunucuya Yükle 📤
[DEPLOYMENT.md](DEPLOYMENT.md) dosyasını okuyun

---

## Yapı Rehberi

```
📦 fatumguzellik/
 ├── 📄 index.html           ← Ana sayfa
 ├── 📁 css/
 │   └── style.css           ← Tüm stiller
 ├── 📁 js/
 │   └── script.js           ← Interaktivite
 ├── 📁 assets/              ← Görseller (boş)
 ├── 📖 README.md            ← Tam dokümantasyon
 ├── 📖 DEPLOYMENT.md        ← Yayınlama rehberi
 └── 📖 IMAGES.md            ← Görsel rehberi
```

---

## Sık Sorulan Sorular

### S: Hangi dosyaları değiştirmem gerekiyor?
**C:** Başlamak için sadece `index.html` dosyasını değiştirin. Tasarım değiştirmek için `css/style.css` dosyasını düzenleyin.

### S: Görseller nasıl eklenir?
**C:** `assets` klasörüne kopyalayın ve HTML'de `<img src="assets/ad.jpg">` yazın. [IMAGES.md](IMAGES.md) dosyasını okuyun.

### S: Renk nasıl değiştirilir?
**C:** `css/style.css` dosyasının en üstündeki `:root` bölümünde renkleri değiştirin.

### S: İletişim formu nasıl çalışır?
**C:** Şu anda demo olarak çalışır. Gerçek e-posta göndermek için [DEPLOYMENT.md](DEPLOYMENT.md) dosyasında "E-posta Ayarlama" bölümünü okuyun.

### S: Mobil telefonda nasıl görünür?
**C:** Tarayıcının Developer Tools'unda (F12) Responsive Design Mode'u açın, veya telefondaki tarayıcıda test edin.

---

## Denetim Listesi

- [ ] `index.html`'de tüm metinleri güncelledim
- [ ] Telefon numarası doğru
- [ ] E-posta doğru
- [ ] Adres doğru
- [ ] Görseller eklendi
- [ ] Renkleri beğendim
- [ ] Mobil'de test ettim
- [ ] Sunucuya yükledim
- [ ] https etkin
- [ ] Google Search Console ekledim

---

## Sonraki Adımlar

1. **Görselleri Ekle:** [IMAGES.md](IMAGES.md) → Görselleri optimize et ve ekle
2. **Yayınla:** [DEPLOYMENT.md](DEPLOYMENT.md) → Sunucuya yükle
3. **Arama Motorları:** Google Search Console + Google My Business
4. **İstatistikler:** Google Analytics ekle
5. **Sosyal Medya:** LinkedIn, Instagram bağlantıları ekle

---

## Kaynaklar

- **HTML/CSS Yardım:** https://www.w3schools.com
- **Renk Seçici:** https://htmlcolorcodes.com
- **Görsel Sıkıştırma:** https://tinypng.com
- **Ücretsiz Hosting:** https://netlify.com, https://vercel.com
- **Domain:** https://www.namecheap.com

---

## İletişim Desteği

Sorun yaşarsanız:
1. Konsolu kontrol edin (F12 → Console)
2. Dosya yollarını kontrol edin
3. Hosting sağlayıcınıza başvurun

---

**Başarılar! 🎉**
