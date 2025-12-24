---
title: "Bot Discord - Notifications Sécu"
description: "Bot Discord qui agrège et diffuse les actualités cybersécurité"
category: "perso"
featured: false
tags: ["Python", "Discord", "API", "RSS"]
date: 2023-11-20
github: "https://github.com/faton5/security-news-bot"
---

## Contexte

Pour rester informé des dernières vulnérabilités et actualités en cybersécurité, j'ai créé un bot Discord qui agrège automatiquement les informations de différentes sources.

## Fonctionnalités

- 📰 Agrégation de flux RSS (CERT-FR, CVE, blogs sécu)
- 🔔 Notifications en temps réel sur Discord
- 🔍 Filtrage par mots-clés et gravité
- 📊 Résumé hebdomadaire automatique

## Technologies

- Python 3.11
- discord.py
- feedparser
- aiohttp
- SQLite

## Exemple de notification

```
🚨 NOUVELLE VULNÉRABILITÉ CRITIQUE

CVE-2024-XXXX - Score CVSS: 9.8
Produit: OpenSSL 3.x
Type: Remote Code Execution

Plus d'infos: https://...
```

## Déploiement

Hébergé sur un VPS avec Docker :

```dockerfile
FROM python:3.11-slim
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "bot.py"]
```

## Résultats

- Bot utilisé quotidiennement par moi et mes collègues
- Gain de temps significatif dans la veille
- Plus de 500 alertes traitées depuis le lancement
