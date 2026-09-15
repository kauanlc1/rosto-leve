# Rosto Leve — Roteiro/Shotlist do Vídeo Mestre (7 min)

Pipeline validada: **still da cena com a @morena (versão madura) → animar no Kling 3.0 (imagem→vídeo)**.
Guia oficial = **@morena madura** (recipe: character `morena` + prompt "early forties, mature").

## Decisões de formato
- **Vertical 9:16** (consumo no celular / follow-along no espelho).
- **Estrutura:** vídeo = clipes da guia (gerados) + b-roll P&B (seus 6 clipes de drenagem, já em `assets/video/`) + **timer e rótulos de fase** na tela + **narração PT-BR** contínua (voz de IA).
- **Montagem:** CapCut (ou `video_concatenate`). Os 7 min NÃO são de vídeo gerado — geramos ~8 clipes curtos (5s) da guia; a narração + b-roll + timer preenchem o tempo.
- **Aesthetic:** clima do site (monocromático quente, luz de manhã, foco raso, 85mm, grão). "Séria, sem sorrir".

## Guia = ativo fixo (gerar 1 vez, reusar)
Todos os stills da guia saem do mesmo recipe (character `morena` + "early forties, mature",
cena de banheiro claro/manhã). Assim ela é a mesma pessoa em todos os clipes.

---

## Estrutura por seção (com fonte de cada shot)

Legenda: **[GERAR]** = clipe novo da guia · **[B-ROLL]** = usar `hero-X.mp4` · **[TELA]** = texto/timer/still.

### 0 · Abertura (~40s)
- **[GERAR] Clipe 1 — Boas-vindas:** guia olha pra câmera, micro-aceno. Narração: *"Se o seu rosto muda de um dia pro outro, esse ritual de 7 minutos é pra você. Vem comigo."*
- **[GERAR] Clipe 2 — Reframe:** guia séria, leve inclinar de cabeça. Narração: *"O que muda o seu rosto de manhã quase nunca é gordura — é retenção. E retenção a gente resolve na ordem certa."*
- **[TELA]** Cartela: "MÉTODO ROSTO LEVE · 4 fases · 7 minutos".

### 1 · Fase ABRIR (1 min)
- **[GERAR] Clipe 3 — Ensino "abrir":** guia desliza dedos do pescoço até a clavícula (o clipe que já validamos serve de base).
- **[B-ROLL] hero-3 / hero-4** em close (pescoço/clavícula).
- **[TELA]** Timer 1:00 + rótulo "FASE 1 · ABRIR". Narração conduz a respiração e o número de repetições.

### 2 · Fase DRENAR (3 min) — a mais longa, mais b-roll
- **[GERAR] Clipe 4 — Ensino "drenar":** guia demonstra a manobra central (centro do rosto → saídas).
- **[B-ROLL] hero-1, hero-2, hero-5, hero-6** alternados em close (bochecha, mandíbula, olhos).
- **[TELA]** Timer 3:00 + "FASE 2 · DRENAR" + sub-rótulos (bochecha / mandíbula / área dos olhos).
- Narração guia cada sub-movimento com pressão leve ("como acariciar a pele de um bebê").

### 3 · Fase GELAR (2 min)
- **[GERAR] Clipe 5 — Ensino "gelar":** guia com roller gelado / compressa fria no rosto.
  *(Não temos b-roll de frio — este clipe é gerado; talvez 2 clipes.)*
- **[TELA]** Timer 2:00 + "FASE 3 · GELAR". Narração: segurança (5–10s por vez, sem exagero).

### 4 · Fase SELAR (1 min)
- **[GERAR] Clipe 6 — Ensino "selar":** guia aplica hidratante, expressão calma de fim de ritual.
- **[TELA]** Timer 1:00 + "FASE 4 · SELAR" + bullets dos hábitos (água, sódio, postura de dormir).

### 5 · Fechamento (~30s)
- **[GERAR] Clipe 7 — Encerramento:** guia olha pra câmera, leve sorriso contido (aqui pode sorrir sutil).
  Narração: *"Faça isso amanhã de manhã e observe seu rosto. Esse é o Rosto Leve."*
- **[TELA]** Cartela final: wordmark "Rosto Leve." + "Bom ritual."

---

## Orçamento estimado (créditos)
| Item | Qtd | Unit | Total |
|---|---|---|---|
| Stills da guia (stills p/ cada clipe) | ~8 | 75 | ~600 |
| Clipes Kling 3.0 (1080p, 5s) | ~8 | 450 | ~3.600 |
| Narração PT-BR (audio_tts) | 1 | ~baixo | ~100–200 |
| B-roll P&B (já prontos) | 6 | 0 | 0 |
| **Total estimado** | | | **~4.300–4.500** |

Sobra folgada nos ~19.185 restantes. **Economia possível:** clipes de b-roll/secundários em 720p (350)
em vez de 1080p; reusar o mesmo still animado com movimentos diferentes.

## Ordem de produção (quando aprovar)
1. Travar o **look da guia** (1 still de referência aprovado — já temos o `YMmQDbcWeC`).
2. Gerar os **stills** de cada cena (lote).
3. Gerar os **clipes** no Kling 3.0 (lote, 1 por vez).
4. Gerar a **narração** (TTS PT-BR) por seção.
5. Montar no CapCut (guia + b-roll + timer/rótulos + narração + trilha).

> Antes de gerar em lote (gasto grande), confirmar este roteiro. Ajustes de narração/ordem são de graça.

---

## PILOTO — Abertura (FEITO, aguardando aprovação do Kauan)

**Decisão travada:** entregável **SEM lipsync**. Narração em **voz off** por cima da guia demonstrando + b-roll.
Motivo: lipsync (Veed Fabric) custou **4.160 créditos/clipe** — inviável pro vídeo inteiro. Voz off = 42/trecho.

**Peças do piloto já geradas (no Personal Project da Magnific):**
- Guia — still de boas-vindas aprovado (mãos relaxadas, olhando p/ câmera).
- Guia — clipe "boas-vindas" (Kling 3.0, 1080p, 5s, presença natural, sem falar).
- Guia — clipe "Abrir" (Kling 3.0, 1080p, 5s — o que o Kauan aprovou).
- Montagem: "Rosto Leve - Abertura (guia, montagem piloto)" = boas-vindas + Abrir (~10s, silencioso).
- Narração BR — 2 opções: **Joana Teixeira** (madura, interior SP) e **Scheila Martins** (BR, clara).

**Falta (montagem final):** juntar vídeo + narração + timer/rótulos + trilha suave. Isso é passo de **CapCut**
(aqui na plataforma não há mux de voz-off sobre vídeo sem lipsync; e não há ffmpeg local). Receita CapCut:
1. Importar a montagem da guia + os 6 b-rolls P&B (`assets/video/hero-*.mp4`).
2. Colocar a **narração escolhida** por cima como voz off.
3. Adicionar **rótulo de fase + timer** e um wordmark "Rosto Leve." no fim.
4. Trilha instrumental suave, bem baixa.

## Modelo de custo REAL por seção (sem lipsync)
- Narração (TTS): ~42 · Still da cena (@morena): ~75 · Clipe guia (Kling 3.0 1080p 5s): ~450 · B-roll P&B: 0.
- Vídeo mestre 7 min estimado: ~6–8 clipes guia + stills + narrações ≈ **~4.000–4.500 créditos**.

## Ledger de créditos (sessão)
Início 20.000. Gastos: teste Kling 2.5 (140) + 2 stills abertura (150) + still maduro (75) +
clipe "Abrir" (450) + still boas-vindas (75) + narração teste Leonor (42) + **lipsync Veed (4.160)** +
clipe boas-vindas (450) + narração Joana (42) + narração Scheila (42) = **~5.626**.
**Restante ≈ 14.374.** (O lipsync de 4.160 foi o erro de custo assumido — não repetir.)

## Decisão do Kauan (amanhã)
1. Escolher a **voz** (Joana ou Scheila).
2. Aprovar seguir pra **produção completa** (as 4 fases) nesse modelo voz-off — OU pedir a montagem
   final do piloto da Abertura no CapCut primeiro.

---

## PRODUÇÃO COMPLETA — FEITA ✅ (voz: Scheila Martins)

Guia = @morena madura. Tudo baixado no projeto:
- **Vídeos** (`assets/video/entregavel/`): `1-abertura-boasvindas`, `2-abrir`, `3-drenar`, `4-gelar`,
  `5-selar`, `6-fechamento` (clipes 5s, 1080p, 9:16) + `guia-sequencia-completa.mp4` (as 6 em sequência).
- **Narrações** (`assets/audio/entregavel/`): `narr-0-abertura` … `narr-5-fechamento` (Scheila, PT-BR).
- **B-roll P&B** (`assets/video/hero-1..6.mp4`): closes reais de drenagem.

### Sobre a duração (importante)
Não precisamos de 7 min de FOOTAGE. O vídeo **ensina** cada fase (mostra o movimento 1x) → dá ~**3–4 min**.
Os "7 minutos" são o ritual que a espectadora **executa**, guiada pela narração + **timer na tela**.
Isso é melhor de consumir e realista com o material que temos.

### Receita de montagem (CapCut) — timeline 9:16
Para cada bloco: [clipe da guia] + [b-roll quando houver] + [narração] + [rótulo de fase + timer] + trilha baixa.

| Bloco | Vídeo | Narração | B-roll | Tela |
|---|---|---|---|---|
| Abertura | 1-abertura + 2-abrir | narr-0-abertura | — | Cartela "MÉTODO ROSTO LEVE · 4 fases" |
| Fase 1 Abrir | 2-abrir | narr-1-abrir | hero-3, hero-4 | Timer 1:00 · "FASE 1 · ABRIR" |
| Fase 2 Drenar | 3-drenar | narr-2-drenar | hero-1,2,5,6 | Timer 3:00 · "FASE 2 · DRENAR" |
| Fase 3 Gelar | 4-gelar | narr-3-gelar | (sem b-roll; loop/slow o clipe) | Timer 2:00 · "FASE 3 · GELAR" |
| Fase 4 Selar | 5-selar | narr-4-selar | — | Timer 1:00 · "FASE 4 · SELAR" |
| Fechamento | 6-fechamento | narr-5-fechamento | — | Cartela "Rosto Leve." |

Dicas: clipes de 5s podem ir a 0.5x (10s) e/ou loop pra preencher; timer na tela sustenta o tempo do ritual;
trilha instrumental suave e bem baixa; legendas grandes da narração ajudam retenção.

### Scripts de narração (para conferência)
- **Abertura:** "Se o seu rosto muda de um dia pro outro, esse ritual de sete minutos é pra você…"
- **Abrir:** "Vamos começar abrindo as saídas. Com as pontas dos dedos, bem de leve…"
- **Drenar:** "Agora a drenagem. Do centro do rosto em direção às saídas…"
- **Gelar:** "Chegou o frio. Ele contrai os vasos e ajuda a devolver o líquido…"
- **Selar:** "Para fechar, sele. Aplique o seu hidratante com toques suaves…"
- **Fechamento:** "Pronto. Esse é o Rosto Leve. Faça amanhã de manhã e observe o seu rosto…"

### Ledger de créditos (atualizado)
Sessão anterior ~5.626 + produção de hoje [4 stills 300 + 5 narrações 230 + 4 clipes 1.800 = 2.330]
= **~7.956 gastos. Restante ≈ 12.044.**

### Opcionais (se quiser, eu gero)
- B-roll extra de **frio** (gelo/roller) pra fase Gelar. · Cartelas de título/rótulos como imagem.
- Versão **16:9** pra YouTube. · Trilha (audio_music_generate).
