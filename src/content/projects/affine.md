---
title: "Affine"
date: 2024-11-20
type: "ops"
status: "en_prod"
tags: ["knowledge-base", "productivity", "self-hosted"]
stack: ["Docker", "PostgreSQL", "Redis"]
summary: "Prise de notes et Knowledge Base collaborative (alternative à Notion)."
highlights:
  - "Hébergement 100% local des données"
  - "Architecture collaborative temps réel"
  - "Support complet du Markdown"
links:
  doc: "https://affine.pro"
---

## Contexte

Recherche d'une alternative open-source et auto-hébergée à Notion pour centraliser la documentation personnelle et les runbooks du lab.

## Architecture

Déploiement via Docker Compose avec conteneurs séparés pour le frontend/backend, la base PostgreSQL et le cache Redis.

## Sécurité

- Reverse proxy via Nginx Proxy Manager.
- Backups quotidiens de la base PostgreSQL.
