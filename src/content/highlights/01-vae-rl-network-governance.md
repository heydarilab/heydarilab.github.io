---
title: "Resource Governance in Networked Systems via Integrated Variational Autoencoders and Reinforcement Learning"
authors:
  - Qiliang Chen
  - Babak Heydari
venue: "ASME Journal of Mechanical Design"
year: 2025
order: 40
image: "../../assets/papers/vae-rl-fig1.png"
imageAlt: "Variational autoencoder applied to network topology — original graph is encoded into a Gaussian latent space, then decoded into a reconstructed graph."
links:
  - label: "Publisher"
    href: "https://asmedigitalcollection.asme.org/mechanicaldesign/article/doi/10.1115/1.4070755/1229782"
  - label: "arXiv"
    href: "https://arxiv.org/abs/2410.23393"
hook: "Govern a multi-agent network by acting in a learned latent space, not on the raw graph."
---

How do you govern a multi-agent network when the space of possible
network structures is astronomically large? This work pairs a
Variational Autoencoder with deep reinforcement learning, letting a
system manager learn to reshape the network by acting in a compact
latent space rather than on the raw graph.

Evaluated in modified OpenAI particle environments, the approach beats
baselines and surfaces interpretable strategies for balancing system
performance against the resource cost of intervention.
