---
title: "Adaptive Information Modulation: Designing Governance Mechanisms for Multi-Agent Artificial Intelligence Systems"
authors:
  - Qiliang Chen
  - Sepehr Ilami
  - Nunzio Lorè
  - Babak Heydari
venue: "ASME Journal of Mechanical Design, 148(4): 041708"
year: 2026
order: 10
image: "../../assets/papers/adaptive-info-modulation-fig1.jpg"
imageAlt: "A reinforcement-learning manager observes aggregated outcomes from a network of LLM agents and, each step, selects an information-disclosure policy that modulates what each agent sees in its prompt. The agents' interaction graph is fixed; only the information layer is reshaped."
links:
  - label: "Publisher"
    href: "https://asmedigitalcollection.asme.org/mechanicaldesign/article/148/4/041708/1229782/Adaptive-Information-Modulation-Designing"
  - label: "arXiv"
    href: "https://arxiv.org/abs/2409.10372"
hook: "Govern a multi-agent LLM system by modulating what each agent sees — not who it talks to."
---

How do you steer a multi-agent system of LLM-based agents toward
cooperative outcomes when you can't rewire who talks to whom? This
paper introduces a governance framework that separates the fixed
**interaction layer** — who interacts with whom, set by physical or
organizational constraints — from a **software-defined information
layer** that a reinforcement-learning manager dynamically modulates.

The manager observes aggregated outcomes (payoffs, cooperation rate,
social welfare) and, each time step, chooses an
information-disclosure policy that decides what each agent receives
in its prompt. Agent autonomy is preserved — they still decide what
to do — but the strategic landscape they perceive shifts. Across
repeated social-dilemma settings with several LLM agents, adaptive
information modulation steers collective behavior toward higher
cooperation and welfare, and scales without rewiring the interaction
graph.
