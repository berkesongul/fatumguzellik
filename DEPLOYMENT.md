# Dağıtım ve Yayınlama Rehberi

Bu dokümantasyon, Fatum Güzellik Salonu web sitesini farklı platformlarda nasıl yayınlayacağınızı anlatır.

## 1. Sunucu Gereksinimleri

Bu statik web sitesi herhangi bir hosting sunucusunda çalışabilir:
- **Veritabanı:** Gerekli DEĞIL ✅
- **PHP/Python:** Gerekli DEĞIL ✅
- **Disk Alanı:** ~5MB (görseller hariç)
- **Bant Genişliği:** Minimum 1 GB/ay yeterli

## 2. Yayınlama Yöntemleri

### Yöntem A: FTP/SFTP ile (En Basit)

1. **FTP İstemcisini İndirin**
   - FileZilla (Ücretsiz) - https://filezilla-project.org/
   - WinSCP (Ücretsiz) - https://winscp.net/
   - Cyberduck (Ücretsiz) - https://cyberduck.io/

2. **Bağlantı Bilgileri Hazırlayın**
   - Hosting sağlayıcısından FTP bilgileri alın
   - Host: ftp.fatumguzellik.com (örnek)
   - Kullanıcı adı: web_user
   - Şifre: (hosting sağlayıcıdan)
   - Port: 21 (FTP) veya 22 (SFTP)

3. **Dosyaları Yükleyin**
   - FTP istemcisini açın
   - Bağlanın
   - Local: `e:/Github Repos/fatumguzellik/`
   - Remote: `/public_html/` (veya `/www/`)
   - Tüm dosyaları yükleyin

### Yöntem B: Control Panel (Hosting Paneli) ile

1. **cPanel/Plesk'e Giriş Yapın**
   - Hosting sağlayıcınızın hosting paneline girin
   - Dosya Yöneticisi (File Manager) seçin

2. **Dosyaları Yükleyin**
   - `public_html` klasörüne gidin
   - "Dosya Yükle" veya "Upload" seçin
   - ZIP dosya halinde yükleyebilir veya klasör klasör yükleyebilirsiniz

3. **ZIP Dosyasını Çıkartın**
   - Dosya Yöneticisinde ZIP dosyaya sağ tıklayın
   - "Extract" seçin

### Yöntem C: Git ile (Gelişmiş)

1. **GitHub'a Yükleyin**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/fatumguzellik.git
git push -u origin main
```

2. **Sunucuya Deploy Edin**
```bash
# Sunucuya SSH ile bağlanın
ssh user@fatumguzellik.com

# Public_html klasörüne gidin
cd public_html

# Repository'yi klonlayın
git clone https://github.com/yourusername/fatumguzellik.git .

# veya pull yapın (güncellemeler için)
git pull origin main
```

### Yöntem D: Netlify ile (En Kolay - Ücretsiz)

1. **GitHub'a Yükleyin** (Yukarıdaki git adımlarını izleyin)

2. **Netlify'ye Gidin**
   - https://netlify.com adresini açın
   - "Sign up" butonuna tıklayın
   - GitHub hesabıyla giriş yapın

3. **Deploy Edin**
   - "New site from Git" seçin
   - Repository'nizi seçin
   - Deploy ayarlarını onaylayın
   - Otomatik deploy kurun

4. **Domain Bağlayın**
   - Netlify'de alan adı ayarlarını yapın
   - DNS kayıtlarını güncelleyin

### Yöntem E: Vercel ile (Ücretsiz)

1. **Vercel'e Gidin**
   - https://vercel.com adresini açın
   - GitHub hesabıyla kaydolun

2. **Import edin**
   - GitHub repository'nizi seçin
   - "Deploy" butonuna tıklayın

3. **Otomatik Deploy**
   - Her push otomatik deploy olur

## 3. Alan Adı Ayarlama

### 1. Alan Adı Satın Alın
- **Sağlayıcılar:** Namecheap, GoDaddy, Nihat Host, Uygun, vb.
- **Fiyat:** ~100-200 TL/yıl

### 2. DNS Kayıtlarını Güncelle
Hosting sağlayıcısından verilen nameserver'ları kullan:

```
NS1: ns1.hosting.com
NS2: ns2.hosting.com
```

### 3. SSL Sertifikası Aktyve Et
- Hosting panelinde "SSL Certificate" arayın
- Let's Encrypt (Ücretsiz) ile sertifika oluşturun
- Auto-renew seçeneğini aktive edin

## 4. SEO ve Google Oluştur

### Google Search Console'u Ayarlayın
1. https://search.google.com/search-console adresine gidin
2. Sitenizi ekleyin
3. DNS kaydı ile doğrulayın
4. Sitemap gönderin
5. robots.txt kontrol edin

### Google My Business
1. https://www.google.com/business adresine gidin
2. İşletmeyi ekleyin
3. Adres ve telefon doğrulayın
4. Fotoğraf ve açılış saatleri ekleyin

## 5. E-posta Ayarlama

### Gmail ile Kurumsal E-posta
1. Hosting panelinde e-posta hesabı oluşturun
   - E-posta: iletisim@fatumguzellik.com
   - İçerik: kontakt formundan gelen mesajları burada görün

2. Gmail'de POP3/IMAP ayarlayın
   - Gmail Ayarları → Başka hesaplar
   - E-posta hesabı ekle
   - POP3 bilgilerini girin

### İletişim Formundan E-posta Alma

**Option 1: Formspree Kullanımı (Basit)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="ad" required>
    <input type="email" name="email" required>
    <textarea name="mesaj" required></textarea>
    <button type="submit">Gönder</button>
</form>
```

**Option 2: Backend Scripti Yazma (PHP)**
```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'iletisim@fatumguzellik.com';
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad: $name\nE-posta: $email\n\nMesaj:\n$message";
    
    mail($to, $subject, $body);
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
```

## 6. Performans Optimizasyonu

### Caching Ayarları (htaccess)
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>
```

### Gzip Sıkıştırma (htaccess)
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

## 7. Backup Stratejisi

### Düzenli Backup Alın
- Haftada 1 kez manuel backup yapın
- Hosting panelinde otomatik backup aktive edin
- Lokal bilgisayarınızda kopyası tutun

```bash
# Backup için
zip -r backup-$(date +%Y%m%d).zip /home/user/public_html/
```

## 8. Güvenlik Kontrolleri

### HTTPS Etkin Mi?
- Siteyi ziyaret edin
- URL bar'da 🔒 simgesini görün

### Robots.txt Kontrol Edin
Kök dizinde robots.txt dosyası mevcut mu?
```
User-agent: *
Allow: /
```

### Sitemap XML Mevcut Mi?
`sitemap.xml` dosyasını oluşturun:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fatumguzellik.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://fatumguzellik.com/#hizmetler</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://fatumguzellik.com/#iletisim</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 9. Sonrası Bakım

### Aylık Kontrol Listesi
- [ ] Google Analytics trafiğini kontrol edin
- [ ] Hata loglarını kontrol edin
- [ ] Linkler bozuk mu diye kontrol edin
- [ ] Mobil uyumluluğu test edin
- [ ] Sayfa hızını kontrol edin (GTmetrix)

### Yıllık Görevler
- [ ] SSL sertifikasını yenile
- [ ] Alan adını yenile
- [ ] Hosting paketini kontrol et
- [ ] Güvenlik güncellemelerini kontrol et

## 10. Sorun Giderme

### 404 Hatası
- Dosya yollarını kontrol edin
- Dosya ve klasör isimlerinin büyük/küçük harflerini kontrol edin
- Index.html dosyasının ana dizinde olduğundan emin olun

### Sayfanın Yüklenmemesi
- İnternet bağlantısını kontrol edin
- DNS kayıtlarını kontrol edin
- Hosting sağlayıcınıza başvurun

### CSS ve JS Yüklenmemesi
- Dosya yollarının doğru olduğundan emin olun
- Dosya izinlerini kontrol edin (644 veya 755)

### E-posta Gönderilemyse
- PHP mail() fonksiyonu aktive mi? (hosting panelinden kontrol edin)
- Form ayarlarını kontrol edin
- Spam klasörünü kontrol edin

---

**İpucu:** İlk dağıtımdan sonra, siteyi farklı tarayıcılarda ve cihazlarda test etmeyi unutmayın!

**Yardım:** Sorun yaşarsanız hosting sağlayıcınızın destek ekibine başvurun.
