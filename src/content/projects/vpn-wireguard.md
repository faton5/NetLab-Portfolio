---
title: "Passerelle VPN WireGuard"
date: 2024-11-15
type: "network"
status: "en_prod"
tags: ["vpn", "security", "remote-access"]
stack: ["WireGuard", "Docker", "Unbound"]
summary: "Accès sécurisé aux ressources internes depuis l'extérieur avec filtrage DNS."
highlights:
  - "Débit proche du line-rate grâce au protocole WireGuard"
  - "Intégration avec Unbound pour le blocage de pubs via DNS"
  - "Génération de QR Codes pour configuration mobile rapide"
links:
  github: "#"
---

## Contexte
Besoin d'accéder aux services hébergés (NAS, Domotique) depuis l'extérieur sans exposer directement les ports.

## Architecture
Conteneur Docker `wg-easy` hébergé en DMZ. Port UDP unique exposé.

## Sécurité
- Clés privées ne sortant jamais des devices.
- Firewall n'autorisant que le port UDP spécifique.
- Killswitch activé sur les clients.
