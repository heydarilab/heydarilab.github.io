---
title: "Strategic Behavior of Large Language Models and the Role of Game Structure versus Contextual Framing"
authors:
  - Nunzio Lore
  - Babak Heydari
venue: "Nature Scientific Reports"
year: 2024
order: 40
image: "../../assets/papers/llm-strategic-fig1.png"
imageAlt: "Workflow combining contextual framings (e.g. team talk, environmental negotiations) and game structures (Prisoner's Dilemma, Snowdrift, Stag Hunt, Prisoner's Delight) fed into GPT-3.5, GPT-4, and LLaMa-2 for statistical and case-study analysis."
links:
  - label: "Publisher"
    href: "https://www.nature.com/articles/s41598-024-69032-z"
hook: "Do LLMs reason strategically, or just react to framing? Both — and the mix depends on the model."
---

Do large language models actually reason strategically, or do they just
respond to surface framing? Across four canonical two-player games
(Prisoner's Dilemma, Stag Hunt, Snowdrift, Harmony) and five framings
(business, diplomacy, environment, teammates, friends), three models
behave differently:

- **GPT-3.5** follows context and largely ignores game structure.
- **GPT-4** mostly tracks structure but collapses the four games into a
  binary cooperate-or-defect choice.
- **LLaMa-2** distinguishes the games more finely while still being
  moved by framing.

No model fully escapes the influence of how a situation is described —
a finding with direct implications for deploying LLMs as strategic
agents.
