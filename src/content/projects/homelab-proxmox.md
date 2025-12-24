---
title: "Homelab Proxmox Cluster"
date: 2024-12-01
type: "homelab"
status: "en_prod"
tags: ["virtualization", "ha", "network"]
stack: ["Proxmox VE", "Ceph", "Debian"]
summary: "Infrastructure de virtualisation haute disponibilité hébergeant l'ensemble des services."
highlights:
  - "Cluster 3 noeuds avec Ceph pour le stockage distribué"
  - "Segmentation réseau via VLANs (Management, Services, IoT)"
  - "Backup automatisé vers NAS externe via Proxmox Backup Server"
links:
  doc: "#"
---

## Contexte / Objectif
Mise en place d'un environnement de virtualisation robuste pour héberger les services personnels et d'apprentissage.

## Architecture
Cluster de 3 mini-PC interconnectés en 2.5GbE pour le réseau Ceph et 1GbE pour le management.

## Sécurité
- Accès WebUI restreint au VLAN Management.
- 2FA activé sur tous les comptes root/user.
- Mises à jour automatisées via Ansible.

## Exploitation
Monitoring via Prometheus/Grafana (métriques nœuds + Ceph). Alerting sur Discord en cas de panne disque ou nœud.
