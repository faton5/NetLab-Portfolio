---
title: "Home Assistant"
date: 2024-12-05
type: "homelab"
status: "en_prod"
tags: ["iot", "automation", "domotique"]
stack: ["Home Assistant OS", "Zigbee2MQTT", "Mosquitto"]
summary: "Cœur domotique centralisant l'IoT et les automatisations de la maison."
highlights:
  - "Intégration de +50 devices (Lumières, Capteurs, Énergie)"
  - "Réseau Zigbee indépendant du Wi-Fi"
  - "Tableaux de bord énergétiques (suivi conso électrique)"
links:
  doc: "https://www.home-assistant.io/"
---

## Contexte

Automatisation du domicile pour le confort et les économies d'énergie, sans dépendance au cloud constructeur.

## Architecture

VM dédiée sous HAOS. Clé Zigbee USB passthrough. MQTT pour le découplage des messages.
