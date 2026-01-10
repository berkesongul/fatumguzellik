# Fatum Güzellik Salonu - HTML/CSS/JS Versiyonu

Bu repo, Fatum Güzellik Salonu web sitesinin HTML5, CSS3 ve Vanilla JavaScript ile oluşturulmuş hafif ve hızlı sürümüdür.

## Özellikler

✅ **Tamamen Statik** - Veritabanı gerekmez
✅ **Responsive Tasarım** - Tüm cihazlarda çalışır
✅ **Yüksek Performans** - Hızlı yükleme süreleri
✅ **SEO Uyumlu** - Arama motorları için optimize edilmiş
✅ **Mobil Menü** - Hamburger menü ile mobil navigasyon
✅ **İletişim Formu** - Basit form doğrulaması ve gönderimi
✅ **Pürüzsüz Kaydırma** - Smooth scroll efektleri

## Dosya Yapısı

```
fatumguzellik/
│
├── index.html                 # Ana HTML dosyası
├── css/
│   └── style.css             # Tüm CSS stilleri
├── js/
│   └── script.js             # Interaktivite ve işlevsellik
├── assets/                    # Resimler ve diğer kaynaklar (opsiyonel)
└── README.md                 # Bu dosya
```

## Kurulum & Çalıştırma

### Yöntem 1: Basit Dosya Açma
1. `index.html` dosyasını doğrudan web tarayıcınızda açın

### Yöntem 2: Local Server (Önerilen)
1. Python yüklüyse:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

2. VS Code'da Live Server uzantısını kullanın:
   - Extensions'da "Live Server" arayın ve kurun
   - `index.html`'e sağ tıklayın ve "Open with Live Server" seçin

3. Node.js'in http-server paketini kullanın:
```bash
npx http-server
```

Ardından tarayıcınızda `http://localhost:8000` (veya gösterilen port) adresini ziyaret edin.

## Bölümler

### Hero Section
- Ana başlık ve açıklama
- Call-to-action butonu
- Yer tutucu görsel

### Why Us Section
- 5 ana özellik kartı
- Uzmanlık, kişiye özel yaklaşım, hijyen, teknoloji, konfor

### Statistics Section
- Memnuniyet oranı, hizmet alanı, deneyim, başarılı uygulamalar

### Story Section
- Şirket hikayesi
- Vizyon ve Misyon ifadeleri

### Services Section
- 6 ana hizmet kartı
- Lazer Epilasyon, Cilt Bakımı, Bölgesel İncelme, Manikür/Pedikür, Protez Tırnak, Ağda

### Contact Section
- İletişim bilgileri (adres, telefon, e-posta)
- Çalışan iletişim formu

## Özelleştirme

### Renkleri Değiştirme
`css/style.css` dosyasının başında yer alan değişkenleri düzenleyin:
```css
:root {
    --primary-color: #d4a574;      /* Ana renk */
    --secondary-color: #8b6f47;    /* İkinci renk */
    --dark-color: #2c2c2c;         /* Koyu renk */
    --light-color: #f8f8f8;        /* Açık renk */
    --white: #ffffff;              /* Beyaz */
}
```

### İçeriği Güncelleme
`index.html` dosyasında doğrudan içeriği düzenleyebilirsiniz:
- Metinleri güncelleyin
- Yer tutucu görsellerin yerine gerçek görselleri ekleyin
- İletişim bilgilerini ve sosyal medya bağlantılarını değiştirin

### İletişim Formunu Ayarlama
`js/script.js` dosyasında `submitForm()` fonksiyonunu düzenleyin:
- Backend API'nize bağlayın
- Email gönderimi ayarları yapın
- Formdan sonraki yönlendirmeler tanımlayın

## Görselleri Ekleme

1. Görselleri `assets` klasörüne ekleyin
2. HTML'de yer tutucu görselleri değiştirin:
```html
<!-- Eski -->
<div class="placeholder-image">
    <i class="fas fa-spa"></i>
</div>

<!-- Yeni -->
<img src="assets/your-image.jpg" alt="Açıklama">
```

## Performans İpuçları

1. **Görselleri Optimize Et**: JPG/WebP formatını kullan, çok yüksek çözünürlüklerden kaçın
2. **CSS/JS Minify Et**: Prodüksiyonda dosyaları sıkıştır
3. **CDN Kullan**: Font Awesome gibi harici kaynaklar için CDN kullan
4. **Lazy Loading**: Görseller için lazy loading ekle

## SEO Optimizasyonu

- Meta etiketler HTML'de tanımlı
- Responsive tasarım mobil SEO için hazır
- Semantic HTML yapısı
- Hızlı yükleme süresi

## Tarayıcı Desteği

- Chrome/Edge (son 2 sürüm)
- Firefox (son 2 sürüm)
- Safari 12+
- Mobile browsers

## Lisans

© 2025 Fatum Güzellik Salonu. Tüm hakları saklıdır.

## İletişim

- 📍 Namazgah mah. Gazi Osman Paşa cad No:47 K:1 D:1, Soma, Manisa
- 📞 0 501 141 3051
- 📧 iletisim@fatumguzellik.com

---

**Not:** Bu statik versiyon veritabanı gerektirmez ve herhangi bir web sunucusunda çalışabilir.
