# Brahyam Belalcázar — @iberi22 · "ElBeRi" 👋

[![Open to work](https://img.shields.io/badge/Open%20to%20work-Yes-brightgreen?style=flat-square)](https://www.linkedin.com/in/brahyansbr)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in%2Fbrahyansbr-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brahyansbr)
[![Read in English](https://img.shields.io/badge/Read%20in-English-4285F4?style=flat-square)](README.en.md)

**Full-stack developer & AI engineer** · Fundador de [SouthWest AI Labs](https://github.com/southwest-ai-labs) (SWAL) ·
Construyo **infraestructura de IA local-first y privacy-first** de principio a fin: backend (Rust), móvil (Flutter) y web (TypeScript/Svelte).

`Rust` · `Dart/Flutter` · `TypeScript` · `Svelte/Astro` · `Python` · `NixOS` · `PostgreSQL`

---

## 🌎 SouthWest AI Labs (SWAL) — la idea central y el GOAL

> **La IA debería vivir en TU dispositivo, no en el data center de otra empresa.**

SWAL es un laboratorio open-source fundado y mantenido por mí. El GOAL del laboratorio, en una frase:

> **SWAL es una red de aplicaciones agentic con nodo propio, memoria compartida, mesh de datos y propiedad de las personas — sin suscripciones de pago para el acceso completo.**

Qué significa en la práctica:

- 🏠 **Local-first** — la IA corre en tu teléfono o computador y funciona incluso sin internet.
- 🔐 **Privacy-first** — tus datos no salen de tu control; no hay exfiltración posible.
- 🕊️ **Soberana** — código abierto (AGPL-3.0) y portable: si el laboratorio desapareciera, tu código y tus datos siguen siendo tuyos.
- 🔗 **Una red, no apps aisladas** — cada aplicación es un nodo de la red SWAL: comparten memoria (Xavier), sincronizan datos por el mesh (edge-mesh, CRDT sin servidores centrales) y se comunican entre sí.
- 🆓 **Sin paywall** — el valor "Pro" es capacidad de red (tener tu nodo activo y conectado), nunca una suscripción.

### La arquitectura: 4 capas compartidas

| Capa | Proyecto | Qué resuelve |
|---|---|---|
| 🧠 Memoria agentic | Xavier | Agentes con memoria persistente que no olvidan el contexto |
| 🌐 Red P2P (mesh) | edge-mesh | Sincronizar tus dispositivos sin pasar por la nube — el data plane de la red |
| 🤖 Runtime de agentes | [swal-agent-runner](https://github.com/iberi22/swal-agent-runner) + [gestalt](https://github.com/iberi22/gestalt) | Ejecutar y orquestar agentes autónomos de forma local |
| 🎨 Design system | [@swal/ui](https://github.com/iberi22/swal-ui) | Una sola identidad visual para todo el ecosistema |

### 🔐 Acceso a los repos — por invitación

Hasta que **el mesh (edge-mesh) conecte todas las apps del ecosistema**, los repos se mantienen en **acceso controlado por invitación**: las demos están públicas y funcionando, y el código se abre a medida que la red se completa. Solicita acceso por [Telegram](https://t.me/BeRi0n3) o [LinkedIn](https://www.linkedin.com/in/brahyansbr).

---

## 🏆 Proyectos estrella

> **Vis:** 🔒 acceso por invitación (backlog y docs vía invitación) · 🔓 público.
> Cada proyecto con: **🌐 Demo** (visualizarlo) · **📋 Backlog** · **📚 Docs** · **📦 Repo**.

| Proyecto | Stack | Vis | 🌐 Demo | 📋 Backlog | 📚 Docs | 📦 Repo |
|---|---|---|---|---|---|---|
| **SaberParaTodos** (WorldExams) — exámenes de práctica para 16+ países. *Resuelve: preparación académica gratuita y accesible.* | Astro·Svelte·TS | 🔒 | [Live](https://saberparatodos.space) | — | — | [Invitación](https://t.me/BeRi0n3) |
| **Shelf** — inventario + POS offline-first con sync P2P (CRDT). *Resuelve: vender sin internet estable ni caja costosa.* | React 19·TS | 🔒 | [Live](https://shelf-inventory.vercel.app) | — | — | [Invitación](https://t.me/BeRi0n3) |
| **Isar Agent Memory** — memoria de agente en Dart (grafos, embeddings). *Resuelve: memoria offline-first para apps Flutter.* | Dart | 🔓 | [pub.dev](https://pub.dev/packages/isar_agent_memory) | [Issues](https://github.com/iberi22/isar_agent_memory/issues) | [Docs](https://github.com/iberi22/isar_agent_memory/tree/main/docs) | [Repo](https://github.com/iberi22/isar_agent_memory) |
| **Hosteler-IA** — gestión de servicios de campo (FSM) con IA y offline. *Resuelve: coordinar técnicos y órdenes en terreno.* | TS·React | 🔒 | [Live](https://hosteler-ia-mu.vercel.app) | — | — | [Invitación](https://t.me/BeRi0n3) |
| **MiMatera** — catálogo PWA de materas con fotos y tokens de un solo uso. *Resuelve: digitalizar un negocio local.* | PWA·JS | 🔒 | [Live](https://mimatera-catalogador.pages.dev) | — | — | local |
| **OrionHealth** — asistente de salud privacy-first con SSI on-device. *Resuelve: salud con tus datos en tu dispositivo.* | Flutter·Dart | 🔓 | — | [Issues](https://github.com/iberi22/OrionHealth/issues) | [Docs](https://github.com/iberi22/OrionHealth/tree/main/docs) | [Repo](https://github.com/iberi22/OrionHealth) |
| **TikTokBoost** — gestor de contenido y métricas TikTok. *Resuelve: planificar y medir contenido sin herramientas caras.* | TS | 🔒 | [Live](https://tiktboost.vercel.app) | — | — | [Invitación](https://t.me/BeRi0n3) |
| **GOS** — estándar abierto gastronómico. *Resuelve: documentar recetas de forma estructurada e interoperable.* | Astro | 🔓 | — | [Issues](https://github.com/iberi22/gastronomic-open-standard-GOS/issues) | [Docs](https://github.com/iberi22/gastronomic-open-standard-GOS/tree/main/docs) | [Repo](https://github.com/iberi22/gastronomic-open-standard-GOS) |
| **Portfolio Personal** — mi web personal y de proyectos. | Svelte | 🔒 | [Live](https://portfolio-iberi22.vercel.app) | — | — | [Invitación](https://t.me/BeRi0n3) |

### 🌱 En desarrollo — próximos lanzamientos de la red

`ManteniApp` · `Veedur-IA` · `Gara-G` · `Nido` · `Software Factory` · `SWAL Agent Runner` · `Core SWAL PWA` · `Personal Assistant` · `Preun-IA` · `saber-proactivo` — y más en [github.com/iberi22](https://github.com/iberi22).

---

## 📊 Reality check

| Métrica | Valor |
|---|---|
| Ecosistema | 90+ repos en [github.com/iberi22](https://github.com/iberi22) (29 públicos) |
| Apps con demo en vivo | 6 |
| Paquete publicado | [isar_agent_memory](https://pub.dev/packages/isar_agent_memory) en pub.dev |
| Licencias | AGPL-3.0 apps · MIT librerías |

## 🔧 Cómo mantener este formato

1. **Nuevo proyecto estrella** → añade una fila con demo + enlaces (público: backlog/docs/repo · privado: invitación).
2. **Demo lista** → mueve el proyecto a la tabla principal.
3. **Mesh completo / lanzamiento** → cambia 🔒 por 🔓 y completa los enlaces.
4. Mantén las URLs verificadas (un `curl -I` antes de subir cambios). Ningún enlace del README debe dar 404.

## 🔗 Find me

- **Lab:** [github.com/southwest-ai-labs](https://github.com/southwest-ai-labs) · **Sitio del lab:** [iberi22.github.io/iberi22](https://iberi22.github.io/iberi22)
- **Portfolio personal:** [portfolio-iberi22.vercel.app](https://portfolio-iberi22.vercel.app)
- **LinkedIn:** [in/brahyansbr](https://www.linkedin.com/in/brahyansbr)
- **Telegram:** [@BeRi0n3](https://t.me/BeRi0n3) — abierto a colaboraciones, roles y proyectos con impacto real.
