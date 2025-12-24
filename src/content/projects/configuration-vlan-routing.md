---
title: "Configuration VLAN & Inter-VLAN Routing"
description: "Projet scolaire de segmentation réseau avec VLANs et routage inter-VLAN sur Cisco"
category: "scolaire"
featured: false
tags: ["Cisco", "VLAN", "Routing", "Packet Tracer"]
date: 2023-05-15
---

## Contexte

Projet réalisé dans le cadre de ma formation réseau. L'objectif était de concevoir et implémenter une architecture VLAN pour une entreprise fictive.

## Cahier des charges

- **4 VLANs** pour différents services (Admin, Compta, IT, Invités)
- **Routage inter-VLAN** pour permettre la communication entre services
- **ACLs** pour restreindre certains accès
- **Documentation complète** de l'architecture

## Schéma réseau

```
         ┌─────────────────┐
         │    Router      │
         │  (Inter-VLAN)  │
         │    .1          │
         └───────┬────────┘
                 │
         ┌───────┴────────┐
         │   Switch L3    │
         │   (Core)       │
         └───────┬────────┘
      ┌──────────┼──────────┐
      │          │          │
┌─────┴────┐ ┌───┴────┐ ┌───┴────┐
│  SW-ACC1 │ │ SW-ACC2│ │ SW-ACC3│
└──────────┘ └────────┘ └────────┘
   VLAN 10     VLAN 20    VLAN 30
   Admin       Compta       IT
```

## Configuration

### VLANs créés

| VLAN | Nom     | Sous-réseau     |
| ---- | ------- | --------------- |
| 10   | Admin   | 192.168.10.0/24 |
| 20   | Compta  | 192.168.20.0/24 |
| 30   | IT      | 192.168.30.0/24 |
| 99   | Invités | 192.168.99.0/24 |

### Commandes clés

```cisco
! Création VLAN
vlan 10
 name ADMIN

! Configuration trunk
interface gi0/1
 switchport mode trunk
 switchport trunk native vlan 999

! Router-on-a-stick
interface gi0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
```

## Résultats

- ✅ Architecture fonctionnelle validée sur Packet Tracer
- ✅ Documentation technique complète
- ✅ Présentation orale réussie
- **Note obtenue** : 17/20

## Compétences acquises

- Configuration avancée de switches Cisco
- Conception d'architecture réseau
- Rédaction de documentation technique
- Présentation de projet
