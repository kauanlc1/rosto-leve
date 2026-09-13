# Rosto Leve

Funil de vendas low-ticket (estética facial / "de-puff") — site estático em HTML/CSS/JS, sem build step.

## Páginas
- `index.html` — página inicial / advertorial (hero em vídeo, comparador antes/depois, método).
- `quiz.html` — teste de 60s que segmenta e leva para a página de vendas.
- `vendas.html` — página de vendas (oferta R$37, bônus, garantia, FAQ).

## Rodar localmente
```bash
python -m http.server 8123
# abrir http://localhost:8123
```

## Deploy (Cloudflare Pages)
Site 100% estático — não precisa de build.
1. Cloudflare Pages → **Create project** → conectar este repositório do GitHub.
2. **Build command:** (vazio) · **Build output directory:** `/` (raiz).
3. Deploy. O `index.html` da raiz vira a home.

## Antes de anunciar
Ver `SUA-PARTE.md` — copy dos anúncios, prompts dos criativos, VSL e checklist do que trocar
(link do checkout Cakto, fotos reais de antes/depois, Pixel da Meta).

## Estrutura
```
index.html · quiz.html · vendas.html
assets/css/app.css      sistema visual
assets/js/app.js        comparador, quiz, reveals, FAQ
assets/video/           vídeos de fundo do hero
assets/img/             retratos
PRODUCT.md · DESIGN.md  contexto de produto e sistema de design
SUA-PARTE.md            guia de copy / criativos / VSL
```
