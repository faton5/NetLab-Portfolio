---
title: "NGINX Proxy Manager"
date: 2024-06-15
type: "network"
status: "en_prod"
tags: ["proxy", "ssl", "docker"]
stack: ["Nginx", "Let's Encrypt", "Docker"]
summary: "Reverse proxy facilitant la gestion des certificats SSL et des redirections."
highlights:
  - "Gestion automatique des certificats SSL Let's Encrypt"
  - "Access Lists pour restreindre l'accès par IP"
  - "WebUI intuitive pour ne pas gérer les confs Nginx à la main"
links:
  doc: "https://nginxproxymanager.com/"
---

## Contexte

Exposition sécurisée des services web (Nextcloud, Vaultwarden) avec terminasion SSL centralisée.

## Architecture

Point d'entrée unique (Port 80/443) redirigeant vers les conteneurs backend.
