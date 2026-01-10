# Görselleri Ekleme Rehberi

Bu dosya, website'de görselleri nasıl ekleyeceğinizi anlatır.

## Gerekli Görseller

Aşağıdaki görselleri `assets` klasörüne ekleyin:

### 1. Hero Section Görseli
- **Dosya adı:** `hero-image.jpg`
- **Boyut:** Min 400x400px, önerilen 600x600px
- **Format:** JPG, PNG veya WebP
- **Kullanım:** Ana sayfadaki başlık görseli

### 2. Hizmet Görselleri (Opsiyonel)
Eğer hizmet kartlarında görsel göstermek istiyorsanız:
- **Lazer Epilasyon:** `laser-epilasyon.jpg`
- **Cilt Bakımı:** `cilt-bakimi.jpg`
- **Bölgesel İncelme:** `bolgesel-incelme.jpg`
- **Manikür/Pedikür:** `manikur-peditur.jpg`
- **Protez Tırnak:** `protez-tirnak.jpg`
- **Ağda:** `agda.jpg`

### 3. Logo (Opsiyonel)
- **Dosya adı:** `logo.png`
- **Boyut:** 300x100px min
- **Format:** PNG (transparan arka plan)

## Görselleri Yükleme

### HTML'de Görsel Ekleme

1. **Hero Section'da:**
```html
<!-- Eski (yer tutucu) -->
<div class="hero-image">
    <div class="placeholder-image">
        <i class="fas fa-spa"></i>
    </div>
</div>

<!-- Yeni (gerçek görsel) -->
<div class="hero-image">
    <img src="assets/hero-image.jpg" alt="Fatum Güzellik Salonu" class="hero-img">
</div>
```

2. **Hizmet Kartlarında:**
```html
<!-- Eski -->
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-laser"></i>
    </div>
    ...
</div>

<!-- Yeni -->
<div class="service-card">
    <img src="assets/laser-epilasyon.jpg" alt="Lazer Epilasyon" class="service-image">
    ...
</div>
```

## CSS Ayarlamaları

Görseller için CSS ekleyin:

```css
.hero-img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(212, 165, 116, 0.2);
    object-fit: cover;
}

.service-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}
```

## Görsel Optimizasyonu

### Boyut Küçültme
1. https://tinypng.com veya https://imageoptim.com kullanın
2. Başlangıç → Nihai boyut: 500KB → 50KB+

### Format Seçimi
- **Fotoğraflar:** JPG (düşük kalite seçeneği)
- **Logolar/İkonlar:** PNG
- **Modüler görseller:** WebP (daha yeni tarayıcılar için)

### Boyut Önerileri
- Hero görsel: 1200x800px (JPG, 150-200KB)
- Hizmet görselleri: 400x300px (JPG, 50-100KB)
- Logo: 300x100px (PNG, 20-50KB)

## Lazy Loading (Opsiyonel)

Performans için lazy loading ekleyin:

```html
<img 
    src="assets/image.jpg" 
    alt="Açıklama"
    loading="lazy"
    class="service-image"
>
```

## Nasıl Başlayacağız?

1. Görselleri hazırlayın (kamera/AI/stock foto)
2. Baştan sona sıkıştırın
3. `assets` klasörüne yükleyin
4. HTML dosyasında ilgili yerleri güncelleyin
5. Tarayıcıda test edin

## Yararlı Kaynaklar

- **Stock Fotoğraflar:** 
  - https://pixabay.com (Türkçe hizmetler)
  - https://unsplash.com
  - https://pexels.com

- **AI Görsel Oluşturma:**
  - https://openai.com/dall-e-3
  - https://www.midjourney.com
  - https://www.bing.com/create

- **Görsel Sıkıştırma:**
  - https://tinypng.com
  - https://imageoptim.com
  - https://squoosh.app

---

**İpucu:** Görseller sitede en çok alan kaplar. İyi optimize edilmiş görseller sitesini hızlandıracaktır!
