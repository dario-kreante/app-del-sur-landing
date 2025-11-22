# 🚀 Guía de Deployment - Apps del Sur

## Preview Online Rápido (5 minutos)

### Opción 1: Vercel + GitHub (Recomendado) ⚡

La forma más simple y rápida:

1. **Ve a [vercel.com/new](https://vercel.com/new)**
2. **Conecta tu cuenta de GitHub** (si no lo has hecho)
3. **Import Git Repository**:
   - Busca: `dario-kreante/app-del-sur-landing`
   - Click en **Import**
4. **Configure Project**:
   - Framework Preset: **Next.js** (detectado automáticamente)
   - Build Command: `npm run build` (por defecto)
   - Output Directory: `.next` (por defecto)
   - Install Command: `npm install` (por defecto)
5. **Environment Variables** (opcional para preview):
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=
   ```
6. **Click Deploy** 🎉

**Resultado**: En ~2 minutos tendrás un URL como:
```
https://app-del-sur-landing-git-claude-apps-del-sur-landing-xxx.vercel.app
```

### Opción 2: Vercel CLI (Manual)

Si prefieres deploy desde la terminal:

```bash
# 1. Login a Vercel (abre navegador)
vercel login

# 2. Deploy preview
vercel

# 3. Seguir prompts:
# - Set up and deploy? Y
# - Which scope? [tu cuenta]
# - Link to existing project? N
# - Project name? app-del-sur-landing
# - Directory? ./
# - Want to modify settings? N

# 4. Deploy a producción (cuando estés listo)
vercel --prod
```

### Opción 3: Otras Plataformas

#### **Netlify**
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

#### **Cloudflare Pages**
1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Pages → Create a project → Connect to Git
3. Selecciona el repo
4. Framework: Next.js (App Router)
5. Deploy

---

## 🔧 Configuración de Producción

### 1. Variables de Entorno en Vercel

En el dashboard de Vercel:
- **Settings** → **Environment Variables**
- Agregar:

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# WhatsApp (formato: 56XXXXXXXXX sin + ni espacios)
NEXT_PUBLIC_WHATSAPP_NUMBER=56912345678

# Email Service (Resend recomendado)
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASSWORD=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=contacto@apps-del-sur.cl
```

### 2. Dominio Custom

En Vercel Dashboard:
1. **Settings** → **Domains**
2. **Add Domain**: `apps-del-sur.cl`
3. Configurar DNS (en tu proveedor):
   ```
   A Record:   @   →  76.76.21.21
   CNAME:      www →  cname.vercel-dns.com
   ```
4. SSL se configura automáticamente ✅

### 3. Agregar Imágenes OG

Crear imágenes 1200x630px y subirlas:

```bash
public/images/og/
├── og-home.png          # Landing principal
├── og-ohiggins.png      # Landing O'Higgins
├── og-maule-costa.png   # Landing Maule Costa
└── apps-del-sur-logo.png # Logo (300x300px)
```

**Herramientas recomendadas**:
- [Canva](https://canva.com) (templates gratuitos)
- [OG Image Generator](https://og-playground.vercel.app)
- Figma

### 4. Configurar Email Service

#### **Opción A: Resend (Recomendado)**

1. Crear cuenta en [resend.com](https://resend.com)
2. Verificar dominio `apps-del-sur.cl`
3. Crear API Key
4. Agregar a Environment Variables
5. Instalar SDK:
   ```bash
   npm install resend
   ```
6. Actualizar `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.SMTP_PASSWORD);

   // En el POST handler:
   await resend.emails.send({
     from: 'Apps del Sur <noreply@apps-del-sur.cl>',
     to: process.env.CONTACT_EMAIL_TO!,
     subject: `Nuevo contacto: ${validatedData.name}`,
     html: `...`
   });
   ```

#### **Opción B: SendGrid**
- Free tier: 100 emails/día
- [sendgrid.com](https://sendgrid.com)

#### **Opción C: AWS SES**
- Más económico para volumen
- Requiere configuración más compleja

### 5. Google Analytics

1. Crear propiedad GA4 en [analytics.google.com](https://analytics.google.com)
2. Copiar Measurement ID (G-XXXXXXXXXX)
3. Agregar a Environment Variables
4. Re-deploy

**Verificar eventos**:
- Abrir página con `?debug_mode=true`
- Ver en GA4 → Reports → Realtime

### 6. Google Search Console

1. Agregar propiedad en [search.google.com/search-console](https://search.google.com/search-console)
2. Verificar dominio (DNS TXT record o meta tag)
3. Enviar sitemap: `https://apps-del-sur.cl/sitemap.xml`
4. Verificar robots.txt: `https://apps-del-sur.cl/robots.txt`

### 7. Validaciones SEO

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Schema Markup Validator](https://validator.schema.org/)
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [WAVE Accessibility](https://wave.webaim.org/)

---

## 📊 Checklist Post-Deployment

### Inmediato
- [ ] Sitio carga correctamente en preview URL
- [ ] Todas las páginas accesibles (/, /ohiggins, /maule-costa)
- [ ] Links internos funcionan
- [ ] WhatsApp CTAs abren correctamente
- [ ] Formulario de contacto envía (revisar inbox)
- [ ] Responsive en móvil, tablet, desktop

### Primera Semana
- [ ] Dominio apuntando correctamente
- [ ] SSL activo (candado verde)
- [ ] Google Analytics recibiendo datos
- [ ] Search Console indexando páginas
- [ ] Schema markup sin errores

### Primera Quincena
- [ ] Monitorear Core Web Vitals en PageSpeed
- [ ] Revisar conversiones (form submissions + WhatsApp clicks)
- [ ] Ajustar meta descriptions según CTR en Search Console

---

## 🆘 Troubleshooting

### Build falla en Vercel
```bash
# Verificar build local
npm run build

# Si funciona local pero no en Vercel:
# - Revisar Node version en vercel.json
# - Revisar environment variables
```

### Imágenes no cargan
- Verificar que existan en `public/images/og/`
- Next.js sirve `/public` como `/`
- URL correcta: `https://apps-del-sur.cl/images/og/og-home.png`

### Formulario no envía emails
- Revisar logs en Vercel → Functions → `/api/contact`
- Verificar SMTP credentials
- Probar con servicio de email configurado

### GA4 no registra eventos
- Verificar que `NEXT_PUBLIC_GA_MEASUREMENT_ID` esté configurado
- Usar modo debug: agregar `?debug_mode=true` al URL
- Revisar en GA4 → Admin → DebugView

---

## 📞 Siguientes Pasos

1. **Ahora**: Deploy preview a Vercel → obtener URL compartible
2. **Hoy**: Agregar imágenes OG, configurar email service
3. **Esta semana**: Configurar dominio, GA4, Search Console
4. **Próxima semana**: Monitorear métricas y optimizar

¿Necesitas ayuda con algún paso específico?
