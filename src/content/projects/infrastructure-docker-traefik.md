---
title: "Infrastructure Docker & Traefik"
description: "Architecture microservices avec reverse proxy et certificats automatiques"
category: "systeme"
featured: true
tags: ["Docker", "Traefik", "Let's Encrypt", "Compose", "Linux"]
date: 2024-02-10
github: "https://github.com/faton5/homelab-docker"
demo: "https://services.example.com"
---

## Contexte

Déploiement d'une infrastructure self-hosted pour héberger mes services personnels de manière sécurisée et maintenable.

## Objectifs

- Centraliser tous les services dans des conteneurs Docker
- Automatiser les certificats SSL avec Let's Encrypt
- Mettre en place un reverse proxy intelligent
- Faciliter le déploiement de nouveaux services

## Stack technique

| Composant          | Rôle                |
| ------------------ | ------------------- |
| **Docker**         | Containerisation    |
| **Docker Compose** | Orchestration       |
| **Traefik v3**     | Reverse proxy & SSL |
| **Portainer**      | Management UI       |
| **Watchtower**     | Auto-update         |

## Architecture

```yaml
# docker-compose.yml simplifié
services:
  traefik:
    image: traefik:v3.0
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./traefik:/etc/traefik
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dashboard.rule=Host(`traefik.example.com`)"

  whoami:
    image: traefik/whoami
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.whoami.rule=Host(`whoami.example.com`)"
      - "traefik.http.routers.whoami.tls.certresolver=letsencrypt"
```

## Services déployés

- 🗃️ **Nextcloud** - Cloud personnel
- 🔐 **Vaultwarden** - Gestionnaire de mots de passe
- 📊 **Grafana** - Dashboards de monitoring
- 📝 **Wiki.js** - Documentation interne
- 🎬 **Jellyfin** - Serveur média
- 🔄 **Gitea** - Serveur Git personnel

## Sécurité

### Mesures implémentées

1. **Certificats automatiques** via ACME DNS challenge
2. **Headers de sécurité** (HSTS, CSP, etc.)
3. **Rate limiting** par IP
4. **Authentification 2FA** sur les services critiques
5. **Réseau Docker isolé** pour chaque stack

### Configuration sécurité Traefik

```yaml
http:
  middlewares:
    secure-headers:
      headers:
        stsSeconds: 31536000
        stsIncludeSubdomains: true
        contentTypeNosniff: true
        frameDeny: true
```

## Monitoring

- **Prometheus** pour la collecte de métriques
- **Grafana** pour la visualisation
- **Alertmanager** pour les notifications
- **Uptime Kuma** pour le monitoring externe

## Résultats

- 🚀 **10+ services** déployés et maintenus
- 🔒 **100% HTTPS** avec renouvellement automatique
- ⏱️ **< 5min** pour déployer un nouveau service
- 📉 **Downtime minimal** grâce aux health checks

## Évolutions prévues

- [ ] Migration vers Kubernetes (K3s)
- [ ] Backup automatisé avec Restic
- [ ] High Availability avec Docker Swarm
