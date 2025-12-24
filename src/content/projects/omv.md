---
title: "OpenMediaVault (OMV)"
date: 2024-08-30
type: "ops"
status: "en_prod"
tags: ["storage", "nas", "backup"]
stack: ["Debian", "ZFS", "SMB/NFS"]
summary: "Système de stockage en réseau (NAS) basé sur Debian."
highlights:
  - "Gestion centralisée du stockage (RAID/ZFS)"
  - "Partages SMB pour Windows et NFS pour les VM/Conteneurs"
  - "Tâches de maintenance planifiées (S.M.A.R.T tests)"
links:
  doc: "https://www.openmediavault.org/"
---

## Contexte

Stockage fiable et redondant pour les données personnelles et les volumes persistants Docker.

## Stockage

- Pool ZFS en miroir (RAID1) pour la redondance.
- Scrubbing mensuel automatisé pour la détection de corruption.
