# Product

<!-- impeccable:product-schema 1 -->

<!-- NOTA: PRODUCT.md escrito sem entrevista ao vivo. O usuário autorizou explicitamente
prosseguir sem perguntar ("não me pergunte nada, apenas vá fazendo") e saiu. Os fatos abaixo
foram inferidos do dossiê de oferta produzido nesta mesma conversa e do briefing do usuário.
Fatos INFERIDOS estão marcados [inferido]. Substituir por decisões confirmadas quando ele voltar. -->

## Platform

web

## Stack

delegado ao Claude: HTML/CSS/JS estáticos, sem framework e sem build step. Escolhido para: (1) páginas
de funil independentes que abrem direto no navegador e são fáceis de hospedar em qualquer lugar
(Cakto/checkout, Vercel, Netlify, hospedagem simples); (2) o usuário poder editar/subir sem toolchain;
(3) vídeo de fundo e imagens locais referenciados por caminho relativo. [inferido]

## Users

Mulheres 25–45 no Brasil que percebem o rosto **inchado ao acordar** e que o rosto "muda de um dia
pro outro". Momento de dor agudo: antes de sair de casa, antes de foto/evento, manhã pós-álcool,
antes de chamada de vídeo. Consciência do problema alta, consciência da solução média. Compram por
impulso em low-ticket via Meta Ads/TikTok. Sub-públicos: "emagreci mas o rosto continua redondo",
"ressaqueada social", "noiva/evento". Persona de entrada: "acordo inchada" (25–40).

## Product Purpose

Vender uma oferta digital low-ticket que ensina um **ritual matinal de 7 minutos** para reduzir a
**aparência** de inchaço facial (retenção temporária) e devolver contorno/aspecto descansado no mesmo
dia. O sucesso do produto é: compra por impulso → consumo rápido → execução na manhã seguinte →
resultado visível no espelho → baixa taxa de reembolso + prova social (UGC). Funil: anúncio → página
inicial (advertorial/entrada) e/ou quiz → página de vendas → checkout com order bump → upsell.

## Positioning

Reframe central: **"Talvez seu rosto não esteja gordo. Talvez esteja inchado."** Mecanismo próprio e
defensável: a **"Regra da Saída Primeiro"** — abrir as saídas de drenagem no pescoço/clavícula ANTES
de drenar o rosto (a maioria faz ao contrário) — dentro de uma sequência de 4 fases:
**Abrir → Drenar → Gelar → Selar**. Diferencial vs. conteúdo grátis e cursos de estética genéricos:
curadoria + sequência exata + velocidade (7 min) + posicionamento de resposta direta com resultado
percebido no mesmo dia.

## Operating Context

- Aquisição: Meta Ads (Facebook/Instagram) e TikTok, criativos de imagem preto-e-branco (antes/depois)
  e vídeo.
- Entrega: páginas estáticas → checkout externo (Cakto provável) [inferido]; produto entregue em vídeo
  curto + PDF.
- O usuário NÃO tem modelo/influencer; imagens e vídeos são gerados por IA. Já possui: 6 vídeos de IA
  de "mulher fazendo drenagem/depuffing facial" (em assets/video/hero-1..6.mp4) e retratos de IA em
  estúdio (tom bege quente) que podem servir de rosto de "especialista/fundadora".

## Capabilities and Constraints

- Preços definidos no dossiê: principal **R$37**, order bump **R$17** (SOS Rosto), upsell 1 **R$47**
  (Desafio 21 Dias), upsell 2 R$67–97 (kit físico/comunidade), downsell R$19. Garantia 7 dias.
- Restrições de conformidade (INEGOCIÁVEIS — o produto é ESTÉTICO, não médico):
  - Vender "redução da APARÊNCIA de inchaço", temporária e honesta.
  - PROIBIDO: "reduza cortisol e desinche", "elimina toxinas", "derrete gordura facial", efeito
    permanente, cura, ou qualquer alegação médica/garantia de resultado.
  - Efeitos (frio/drenagem) são **temporários e modestos** — comunicar como "aparência", "por
    algumas horas", "antes de um evento".
  - Incluir bloco de sinais de alerta ("quando NÃO é estético → procure um médico").
- Antes/depois deve ser honesto: mesma pessoa, mesma luz/ângulo, inchaço real vs. pós-ritual.

## Brand Commitments

- Nome/wordmark do método: **ROSTO LEVE**. Voz: madura, editorial, elegante, confiante, acolhedora —
  sem hype gritado, sem "emojis de venda", sem promessa médica.
- Direção estética PINADA pelo usuário: "chique", **monocromática**, ar de profissionalismo/editorial;
  hero grande ocupando a seção com **imagem/vídeo de fundo**. Referências que ele enviou: fotografia
  editorial preto-e-branco de antes/depois (rosto) de alta qualidade; site "Balaclava Ads" (escuro,
  cinematográfico, tipografia editorial grande). Ele autorizou descartar a ideia se prejudicar
  conversão, confiando no meu julgamento.

## Evidence on Hand

- Dossiê de estratégia completo (pesquisa de mercado, ciência vs. hype, voz do cliente, concorrência,
  copy) produzido nesta conversa — é a fonte de verdade do conteúdo das páginas.
- Assets reais do usuário: `assets/video/hero-1.mp4` … `hero-6.mp4` (drenagem facial, IA).
- NÃO existem ainda: depoimentos reais, números de vendas, fotos de antes/depois definitivas, logo
  final. Qualquer depoimento/estatística/antes-depois usado nas páginas é **placeholder sintético** e
  deve ser marcado e substituído por material real antes de anunciar. Não inventar como se fosse real.

## Product Principles

1. Honestidade que vende: alegação estética e temporária, persuasão forte — nunca mentira médica.
2. Resultado percebido rápido: o produto e as páginas giram em torno do "mesmo dia / 7 minutos".
3. Impulso: entender e explorar o "momento de dor" (pré-evento, manhã, pós-álcool) é a maior alavanca.
4. Método proprietário: "Regra da Saída Primeiro" + 4 fases dão sensação de IP, não de dica solta.
5. Prova visual honesta: o antes/depois é o ativo central — reproduzível pela própria cliente (UGC).

## Accessibility & Inclusion

Contraste AA em todo texto; vídeo de fundo apenas decorativo (com overlay que garante legibilidade),
respeitar `prefers-reduced-motion`, foco de teclado visível, quiz operável por teclado.
