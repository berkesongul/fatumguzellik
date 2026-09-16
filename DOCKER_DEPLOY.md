# VPS üzerinde Docker ile yayınlama

Bu proje statik HTML/CSS/JS dosyalarını Nginx container'ında sunar. **Mevcut `45.131.1.31` VPS'inde host Nginx zaten 80/443 portlarını kullanıyor. Bu sunucuda yalnızca `compose.yaml` kullanılmalıdır; `compose.public.yaml` ile Caddy başlatılmamalıdır.**

İki genel kurulum seçeneği vardır:

- VPS'te zaten bir HTTPS reverse proxy varsa yalnızca `compose.yaml` kullanın. Site varsayılan olarak `127.0.0.1:8080` üzerinde açılır.
- VPS'te 80/443 portlarını kullanan başka servis yoksa `compose.public.yaml` ile Caddy'yi ekleyin. Caddy alan adı için HTTPS sertifikasını otomatik yönetir.

## Ön koşullar

- VPS'te [Docker Engine](https://docs.docker.com/engine/install/) ve [Docker Compose plugin](https://docs.docker.com/compose/install/linux/) kurulu olmalı.
- Repo son değişikliklerle GitHub'a gönderilmiş olmalı. GitHub'a gönderilmeyen yerel dosyalar VPS'teki `git clone` ile gelmez.
- Caddy seçeneğinde alan adının A/AAAA DNS kayıtları VPS IP'sini göstermeli; 80/tcp ve 443/tcp (isteğe bağlı 443/udp) dışarıdan erişilebilir olmalı.
- Sunucuda 80/443 portları zaten doluysa Caddy seçeneğini açmayın; mevcut reverse proxy'yi kullanın.

## Bu VPS: host Nginx + Docker site

Proje dizini `/var/www/fatumguzellik`. Docker site `127.0.0.1:8080` üzerinde, host Nginx ise `fatumguzellik.com` ve `www.fatumguzellik.com` isteklerini bu adrese yönlendirir. HTTPS sertifikası host Certbot tarafından yönetilir; container içinde sertifika yoktur.

```bash
cd /var/www/fatumguzellik
docker compose config
docker compose up -d --build
docker compose ps
curl -fsS http://127.0.0.1:8080/healthz
curl -I https://fatumguzellik.com/
```

Host Nginx kaydı `/etc/nginx/sites-available/fatumguzellik` içinde, etkin bağlantısı `/etc/nginx/sites-enabled/fatumguzellik` içindedir. Değişiklikten sonra `nginx -t` başarılı olmadan `systemctl reload nginx` çalıştırmayın. Sertifika yenilemesi `certbot renew --dry-run` ile test edilebilir.

Yeni içerik deploy ederken önce güncel dosyaların gerçekten bu dizine geldiğini doğrulayın. Git ile güncelliyorsanız repo temiz ve değişiklikler remote'a gönderilmiş olmalı; elle yükleme yapıyorsanız dosyaları senkronize ettikten sonra `docker compose up -d --build` çalıştırın.

## Yeni VPS alternatifi — Caddy ile doğrudan HTTPS

VPS'e SSH ile bağlandıktan sonra:

```bash
git clone https://github.com/berkesongul/fatumguzellik.git
cd fatumguzellik
cp .env.example .env
```

`.env` içindeki `SITE_DOMAIN` değerini gerçek alan adınızla doldurun. Örnek: `SITE_DOMAIN=fatumguzellik.com`. Bu dosya Git'e eklenmez.

```bash
docker compose -f compose.yaml -f compose.public.yaml config
docker compose -f compose.yaml -f compose.public.yaml up -d --build
docker compose -f compose.yaml -f compose.public.yaml ps
docker compose -f compose.yaml -f compose.public.yaml logs --tail=100 site caddy
```

DNS ve firewall hazırsa siteyi `https://ALAN_ADINIZ` üzerinden kontrol edin. Yerel sağlık kontrolü:

```bash
curl -fsS http://127.0.0.1:8080/healthz
```

## Alternatif — mevcut HTTPS reverse proxy arkasında

Yukarıdaki klonlama ve `.env` hazırlığından sonra yalnızca temel Compose dosyasını çalıştırın:

```bash
docker compose up -d --build
curl -fsS http://127.0.0.1:8080/healthz
```

Mevcut Nginx/Caddy/Traefik reverse proxy'nizde alan adını `http://127.0.0.1:8080` adresine yönlendirin. `SITE_PORT` ile yerel port değiştirilebilir. HTTPS sonlandırmasını ve sertifika yenilemesini mevcut proxy yapar. `SITE_BIND_ADDRESS=0.0.0.0` yalnızca portu bilerek dışarı açmak istediğinizde kullanılmalıdır; tek başına HTTPS sağlamaz.

## Güncelleme / tekrar deploy

Bu VPS'te Git ile güncelliyorsanız, sunucudaki repo temizken:

```bash
git pull --ff-only
docker compose up -d --build
docker compose ps
```

Başka bir VPS'te Caddy seçeneğini kullanıyorsanız komutlara `-f compose.yaml -f compose.public.yaml` ekleyin. Compose yalnızca değişen image/container'ları yeniden oluşturur. Caddy'nin sertifikaları `caddy_data` Docker volume'unda kalır; `docker compose down -v` kullanmayın.

## Kontrol ve sorun giderme

```bash
docker compose ps
docker compose logs --tail=200 site
curl -I http://127.0.0.1:8080/
curl -I http://127.0.0.1:8080/lazer-epilasyon.html
curl -I https://fatumguzellik.com/lazer-epilasyon.html
```

`site` sağlıksız görünüyorsa container Nginx loglarını kontrol edin. Yeni VPS'teki Caddy sertifika alamıyorsa önce DNS ve 80/443 erişimini kontrol edin. Gerekirse `docker compose ... config` ile birleşmiş Compose ayarlarını inceleyin.

## Yayına almadan önce önemli not

Ana sayfadaki iletişim formu mevcut hâliyle gerçek e-posta göndermiyor; JavaScript yalnızca gönderilmiş gibi başarı mesajı gösteriyor. Nginx container'ı bir form backend'i eklemez. Bu formu gerçek bir e-posta/form servisine bağlamadan ziyaretçilerden mesaj toplamak için kullanmayın.
