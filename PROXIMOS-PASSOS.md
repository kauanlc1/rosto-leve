# Rosto Leve — Próximos passos

Documento de roadmap. As **páginas** já estão prontas e no GitHub. Faltam 3 frentes:
**(1) o entregável (o produto)**, **(2) o checkout/entrega**, **(3) subir ao ar + rastrear + anunciar**.

---

## 1. O ENTREGÁVEL — o que é e como produzir (sua maior dúvida)

O "entregável" é o **produto que a cliente recebe depois de pagar**. No nosso caso, o método Rosto Leve.
Não precisa ser sofisticado — precisa ser **rápido de consumir e fácil de executar**. Lembre: compra por
impulso → consumo rápido → execução na manhã seguinte.

### O que a cliente recebe (mínimo viável)
1. **Vídeo do Ritual de 7 minutos** (o coração do produto) — a sequência Abrir → Drenar → Gelar → Selar.
2. **PDF "Checklist Manhã Desincha"** (1 página) — o ritual resumido pra colar no espelho.
3. **Os bônus** (PDFs curtos): SOS Rosto, Guia de Fotos & Ângulos, Cardápio Anti-Inchaço 7 dias.

> Você NÃO precisa gravar 6 módulos em vídeo para lançar. Pode lançar com **1 vídeo principal + PDFs** e
> ir gravando o resto depois. O importante é validar a venda primeiro.

### Como produzir o vídeo SEM modelo/influencer (3 caminhos)

**Caminho A — Faceless + seus vídeos de IA (recomendado, mais rápido) ✅**
Você já tem 6 vídeos de IA de drenagem facial (`assets/video/`). Monte assim no CapCut:
- Use os 6 clipes como a **demonstração** dos movimentos.
- Grave uma **narração** com voz de IA em PT-BR (ElevenLabs, ou a própria voz do CapCut) lendo o passo a passo.
- Adicione **texto na tela** e um **timer** ("Fase 1 — Abrir · 1 min").
- Trilha suave de fundo. Exporta em 1080p.
Resultado: um guia profissional, sem ninguém aparecendo falando. É o formato que menos "denuncia" IA.

**Caminho B — Avatar de IA apresentando**
HeyGen / Arcads / Captions: cria uma "apresentadora" que narra o ritual, com os clipes de drenagem como cutaway.
Mais "humano", porém pode soar artificial. Nunca faça o avatar dar depoimento falso.

**Caminho C — Só PDF ilustrado (o mais barato)**
Um PDF bonito com o passo a passo ilustrado + os 6 vídeos como "anexos". Menor esforço, menor percepção
de valor. Serve para um teste rapidíssimo.

### Onde HOSPEDAR / ENTREGAR o produto
- **Área de membros da Cakto** (mais simples): você sobe os vídeos e PDFs lá, e a cliente acessa após pagar. Recomendado.
- **Alternativa gratuita:** vídeos no YouTube (não listado) + PDFs no Google Drive, entregues numa **página
  de obrigado** ou por **e-mail/WhatsApp automático** após a compra.
- Guardar os arquivos-fonte numa pasta do Drive pra você.

### O que EU posso fazer por você aqui
- [ ] **Desenhar os PDFs** (checklist, SOS, guia de fotos, cardápio) no mesmo padrão visual do site — te entrego prontos.
- [ ] **Escrever o roteiro/narração** do vídeo de 7 min, sincronizado com seus 6 clipes (shotlist).
- [ ] Escrever a **VSL** completa (para a página de vendas / anúncio em vídeo).

---

## 2. CHECKOUT E ENTREGA (Cakto)

1. Criar o produto na Cakto: **Rosto Leve — R$37**.
2. Configurar **order bump**: "SOS Rosto" **R$17** (dentro do checkout).
3. Configurar **upsell 1**: "Desafio 21 Dias" **R$47** (pós-compra).
4. Subir os arquivos do produto na **área de membros** (ou configurar entrega por e-mail).
5. Copiar o **link do checkout** e me mandar → eu troco nos botões `data-checkout` das páginas
   (hoje estão como `href="#"`, com o marcador tracejado "TROCAR HREF...").

---

## 3. SUBIR AO AR + RASTREAR + ANUNCIAR

### 3.1 Deploy (Cloudflare Pages) — o repo já está pronto
1. Cloudflare Pages → **Create project** → conectar `kauanlc1/rosto-leve`.
2. **Build command:** vazio · **Output directory:** `/` (raiz).
3. Deploy → você recebe um domínio (ex.: `rosto-leve.pages.dev`). Depois dá pra ligar um domínio próprio.

### 3.2 Pixel da Meta + eventos
- Colar o Pixel no `<head>` das 3 páginas (me peça que eu adiciono).
- Eventos: **ViewContent** (index), **Lead** (fim do quiz), **InitiateCheckout / Purchase** (Cakto).
- Isso é o que permite a Meta otimizar por COMPRA (o evento mais perto do dinheiro).

### 3.3 Criativos + anúncios
- Gerar os criativos P&B (antes/depois, "6h42→6h50", retratos) — prompts em `SUA-PARTE.md`, eu gero pra você.
- Subir os 8 anúncios de `SUA-PARTE.md` (comece com 3–4 ângulos) apontando para o `index.html`.

---

## 4. CAMINHO MÍNIMO PARA VENDER ESSA SEMANA (ordem sugerida)

1. **Produto mínimo:** vídeo de 7 min (Caminho A) + checklist em PDF. (eu faço roteiro + PDFs)
2. **Cakto:** produto R$37 + bump R$17 + área de membros. (você)
3. **Plugar** link da Cakto + suas fotos reais de antes/depois nas páginas. (eu faço)
4. **Deploy** na Cloudflare + **Pixel**. (você conecta / eu ponho o pixel)
5. **3–4 criativos** + subir anúncios. (eu gero criativos / você sobe campanha)
6. Rodar tráfego baixo e **observar as métricas** (abaixo).

---

## 5. COMO SABER SE ESTÁ VALIDANDO (métricas, não achismo)

Valorize sempre o evento **mais perto do dinheiro**:
`Compra > Checkout iniciado > Add to cart > Lead (quiz) > Clique > Visualização`.

Sinais bons no teste inicial:
- CTR do anúncio saudável **e** custo por **Iniciar Checkout** viável.
- Taxa de **order bump > 25%**.
- Conclusão do quiz alta (a maioria que começa, termina).

Regra de ouro: **poucas curtidas com vendas > muitas curtidas sem venda.** Engajamento não é venda.

Objeções a monitorar (já respondidas no FAQ): "é temporário?", "vi de graça no TikTok", "funciona no meu rosto?".

---

## 6. Resumo do que depende de VOCÊ vs. do que eu faço

| Você | Eu (quando você pedir) |
|---|---|
| Criar produto + bump/upsell na Cakto | Roteiro do vídeo de 7 min + shotlist com seus clipes |
| Subir os arquivos na área de membros | Desenhar os PDFs (checklist, SOS, fotos, cardápio) |
| Conectar o repo na Cloudflare Pages | Plugar link da Cakto + fotos reais nas páginas |
| Subir as campanhas na Meta | Gerar os criativos P&B + adicionar o Pixel |
| Gravar/gerar a narração (ou me pedir o roteiro) | Escrever a VSL + página de obrigado |

> Próximo passo mais lógico: me diga **"faz o roteiro do vídeo de 7 min e os PDFs"** — assim seu
> entregável fica pronto e você só precisa montar no CapCut e subir na Cakto.
