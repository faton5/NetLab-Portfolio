---
title: "Nextcloud"
date: 2024-09-10
type: "homelab"
status: "en_prod"
tags: ["cloud", "storage", "collaboration"]
stack: ["Docker AIO", "PostgreSQL", "Redis"]
summary: "Cloud personnel pour le stockage de fichiers, contacts et agenda."
highlights:
  - "Alternative souveraine à Google Drive / Dropbox"
  - "Synchronisation automatique des photos mobile"
  - "Partage de fichiers sécurisé avec liens publics"
links:
  doc: "https://nextcloud.com/"
---

## Contexte

Reprendre le contrôle sur les données personnelles (Self-hosting).

## Architecture

Version AIO (All-in-One) sous Docker. Backups chiffrés envoyés vers un stockage distant (off-site).
