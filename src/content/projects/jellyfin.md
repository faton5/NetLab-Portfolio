---
title: "Jellyfin"
date: 2024-09-20
type: "homelab"
status: "en_prod"
tags: ["media", "streaming", "open-source"]
stack: ["Docker", "FFmpeg", "GPU Transcoding"]
summary: "Serveur multimédia pour le streaming de films et musiques (alternative à Plex/Emby)."
highlights:
  - "Transcodage matériel (NVENC) pour le support 4K"
  - "Aucun tracking ni abonnement premium"
  - "Synchronisation avec client TV et Mobile"
links:
  doc: "https://jellyfin.org/"
---

## Contexte

Centralisation de la médiathèque légale et diffusion sur tous les écrans du domicile.

## Technique

- Volume Docker monté sur NAS OMV (NFS).
- Passthrough GPU NVIDIA pour l'accélération matérielle.
