---
title: "n8n"
date: 2024-10-01
type: "dev"
status: "en_prod"
tags: ["automation", "workflow", "nocode"]
stack: ["Docker", "Node.js", "Webhook"]
summary: "Outil d'automatisation de workflow (fair-code) connectant les services entre eux."
highlights:
  - "Webhooks pour interconnecter des services sans API native"
  - "Workflows visuels de traitement de données"
  - "Notifications automatiques (Discord/Mail) sur événements"
links:
  doc: "https://n8n.io/"
---

## Contexte

Automatisation des tâches répétitives (ex: tri mail, backup notification, sync données).

## Exemple

Workflow récupérant les nouvelles CVE critiques (RSS) et envoyant une alerte sur un channel Discord privé.
