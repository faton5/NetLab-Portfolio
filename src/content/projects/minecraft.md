---
title: "Serveurs Minecraft"
date: 2024-10-15
type: "homelab"
status: "en_prod"
tags: ["game-server", "performance", "java"]
stack: ["Docker", "Java", "PaperMC"]
summary: "Cluster de serveurs de jeu optimisés pour la performance et le réseau."
highlights:
  - "Utilisation de PaperMC pour l'optimisation serveur"
  - "Gestion automatisée via Pterodactyl / Docker"
  - "Protection anti-DDoS niveau réseau"
---

## Contexte

Hébergement de serveurs pour communauté de joueurs, nécessitant haute disponibilité et faible latence.

## Performance

- Allocation dynamique de RAM (Heap Size tuning).
- Pré-génération des chunks pour éviter le lag spike.
- Stockage sur NVMe dédié.
