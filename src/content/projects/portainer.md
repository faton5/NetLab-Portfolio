---
title: "Portainer"
date: 2024-01-01
type: "ops"
status: "en_prod"
tags:
  - conteneurisation
  - orchestration
  - administration
  - docker
  - homelab
stack:
  - Portainer
  - Docker
  - Linux
  - Proxmox
summary: "Mise en place d’une interface de gestion centralisée pour administrer les conteneurs Docker du homelab."
highlights:
  - "Administration simplifiée des services Docker"
  - "Vue centralisée des conteneurs, volumes et réseaux"
  - "Gestion et déploiement rapide de services"
links:
  doc: "https://docs.portainer.io/"
---

## Contexte

Dans le cadre de mon homelab, de nombreux services auto-hébergés sont déployés
sous forme de conteneurs Docker. La gestion de ces services uniquement en ligne
de commande devient rapidement complexe et peu lisible, notamment lorsqu’il
s’agit de maintenir, mettre à jour ou superviser plusieurs applications.

J’ai donc mis en place **Portainer** afin de disposer d’une interface web
centralisée permettant d’administrer l’ensemble des conteneurs Docker de manière
claire, structurée et sécurisée.  
Le service est hébergé sur une machine virtuelle sous **Proxmox** et sert de point
d’entrée principal pour l’exploitation quotidienne des services conteneurisés.

---

## Fonctionnalités

- Interface web de gestion des conteneurs Docker.
- Déploiement et arrêt de services en quelques actions.
- Gestion des images, volumes et réseaux Docker.
- Supervision de l’état des conteneurs (statut, logs, ressources).
- Déploiement de stacks applicatives via fichiers Docker Compose.
- Centralisation de l’administration des services auto-hébergés.

---

## Architecture

- Hyperviseur : Proxmox
- VM dédiée à l’hébergement des services Docker
- Portainer exécuté dans un conteneur Docker
- Administration des services applicatifs depuis une interface unique
- Intégration avec les autres services du homelab (Vaultwarden, Reverse Proxy, etc.)

---

## Sécurité et bonnes pratiques

- Accès à l’interface Portainer protégé par authentification.
- Séparation claire entre l’hôte et les conteneurs.
- Limitation des accès aux seules machines autorisées.
- Centralisation de la gestion pour réduire les erreurs humaines.
- Meilleure visibilité sur les services exposés.

---

## Résultats obtenus

- Gain de temps significatif dans l’administration des services.
- Réduction des erreurs de configuration.
- Vision claire de l’état de l’infrastructure Docker.
- Exploitation plus fiable et plus maintenable du homelab.

---

## Compétences développées

- Conteneurisation avec Docker
- Administration de services applicatifs
- Exploitation et maintenance d’infrastructure
- Organisation et structuration d’un homelab
- Approche DevOps / Ops
