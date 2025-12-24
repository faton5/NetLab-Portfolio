---
title: "AdGuard Home"
date: 2024-01-01
type: "network"
status: "en_prod"
tags:
  - dns
  - filtrage
  - sécurité-réseau
  - homelab
  - confidentialité
stack:
  - AdGuard Home
  - Linux
  - Proxmox
summary: "Déploiement d’un serveur DNS avec filtrage afin de contrôler, sécuriser et optimiser les flux réseau du homelab."
highlights:
  - "Filtrage DNS des publicités et domaines malveillants"
  - "Contrôle centralisé des requêtes réseau"
  - "Amélioration de la sécurité et de la confidentialité"
links:
  doc: "https://adguard.com/en/adguard-home/overview.html"
---

## Contexte

Dans un environnement de homelab composé de nombreuses machines virtuelles,
services auto-hébergés et équipements connectés, la gestion des flux réseau et
des requêtes DNS devient un point critique.

Par défaut, les équipements utilisent des serveurs DNS publics, ce qui limite le
contrôle, la visibilité et la sécurité des communications.  
J’ai donc mis en place **AdGuard Home** comme serveur DNS central du réseau afin
de filtrer les requêtes, bloquer les domaines indésirables et renforcer la
confidentialité globale du homelab.

Le service est hébergé sur une machine virtuelle sous **Proxmox** et utilisé par
l’ensemble des équipements du réseau (serveurs, postes clients, objets
connectés).

---

## Fonctionnalités

- Serveur DNS local assurant la résolution de noms pour tout le réseau.
- Filtrage DNS des publicités, trackers et domaines malveillants.
- Journalisation et visualisation des requêtes DNS pour analyser le trafic.
- Application de règles globales ou spécifiques selon les équipements.
- Amélioration des performances de navigation grâce à la mise en cache DNS.
- Centralisation de la politique réseau et de sécurité.

---

## Architecture

- Hyperviseur : Proxmox
- VM dédiée au service DNS
- AdGuard Home utilisé comme DNS principal du réseau
- Tous les clients du homelab pointent vers ce serveur DNS
- Possibilité de bascule vers des DNS externes en secours

---

## Sécurité et bonnes pratiques

- Blocage proactif des domaines connus comme malveillants.
- Réduction de la surface d’attaque via le filtrage DNS.
- Centralisation des règles réseau pour une meilleure maîtrise.
- Isolation du service dans une VM dédiée.
- Surveillance du trafic pour détecter des comportements anormaux.

---

## Résultats obtenus

- Réduction significative des publicités et trackers.
- Meilleure visibilité sur l’activité réseau du homelab.
- Renforcement de la sécurité globale sans configuration côté client.
- Expérience utilisateur améliorée sur l’ensemble des équipements.

---

## Compétences développées

- Compréhension du fonctionnement DNS
- Filtrage et contrôle du trafic réseau
- Sécurité réseau
- Architecture réseau en homelab
- Analyse et supervision des flux
