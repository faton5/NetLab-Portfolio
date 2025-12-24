---
title: "Vaultwarden"
date: 2024-01-01
type: "security"
status: "en_prod"
tags:
  - gestion-des-identités
  - sécurité
  - chiffrement
  - secrets
  - homelab
stack:
  - Vaultwarden
  - Docker
  - Portainer
  - Reverse Proxy
  - Proxmox
summary: "Mise en place d’un gestionnaire de mots de passe auto-hébergé pour sécuriser et centraliser les identifiants du homelab."
highlights:
  - "Centralisation sécurisée des identifiants"
  - "Chiffrement de bout en bout des données sensibles"
  - "Accès distant sécurisé via reverse proxy"
links:
  doc: "https://github.com/dani-garcia/vaultwarden"
---

## Contexte

Dans le cadre de la gestion de mon homelab, de nombreux services et machines
nécessitent l’utilisation d’identifiants sensibles (comptes administrateurs,
accès applicatifs, clés API, etc.).

Afin d’éviter la dispersion des mots de passe et les pratiques non sécurisées
(stockage en clair, réutilisation, fichiers locaux), j’ai mis en place
**Vaultwarden**, une solution de gestion de mots de passe auto-hébergée,
compatible avec les clients Bitwarden.

Ce service est hébergé sur une machine virtuelle sous **Proxmox** et exécuté
dans un conteneur **Docker**, administré via **Portainer**, ce qui permet une
gestion centralisée et maîtrisée de la sécurité des accès.

---

## Fonctionnalités

- Coffre-fort chiffré permettant le stockage sécurisé des mots de passe, identifiants et notes sensibles.
- Chiffrement des données côté client, garantissant la confidentialité même en cas d’accès non autorisé au serveur.
- Accès multi-plateformes via interface web et applications clientes (desktop et mobile).
- Partage sécurisé d’identifiants entre différents utilisateurs ou services.
- Accès distant au service via un reverse proxy, sans exposition directe du conteneur sur Internet.
- Intégration complète dans l’écosystème du homelab (Proxmox, Docker, Portainer).

---

## Architecture

- Hyperviseur : Proxmox
- VM dédiée aux services Docker
- Conteneur Vaultwarden géré via Portainer
- Accès externe contrôlé via reverse proxy
- Communication sécurisée entre les services internes

---

## Sécurité et bonnes pratiques

- Données chiffrées de bout en bout.
- Aucun mot de passe stocké en clair sur le serveur.
- Isolation du service via la conteneurisation.
- Exposition réseau minimale grâce au reverse proxy.
- Centralisation des secrets pour réduire la surface d’attaque globale.

---

## Compétences développées

- Gestion des secrets et des identités
- Sécurité des services auto-hébergés
- Conteneurisation avec Docker
- Architecture sécurisée en homelab
- Bonnes pratiques de cybersécurité
