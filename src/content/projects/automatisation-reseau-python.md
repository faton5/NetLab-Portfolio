---
title: "Automatisation Réseau avec Python"
description: "Scripts Python pour automatiser la configuration et le monitoring de routeurs Cisco"
category: "reseau"
featured: true
tags: ["Python", "Netmiko", "Cisco", "Automation", "SSH"]
date: 2024-06-15
github: "https://github.com/faton5/network-automation"
---

## Contexte

Dans le cadre de la gestion d'une infrastructure réseau composée de plusieurs routeurs et switches Cisco, la configuration manuelle devenait chronophage et source d'erreurs.

## Objectifs

- Automatiser la configuration de base des équipements réseau
- Créer des sauvegardes automatiques des configurations
- Mettre en place un monitoring basique des interfaces
- Réduire le temps de déploiement de nouvelles configurations

## Technologies utilisées

| Technologie | Usage                         |
| ----------- | ----------------------------- |
| Python 3.10 | Langage principal             |
| Netmiko     | Connexion SSH aux équipements |
| Paramiko    | Gestion SSH                   |
| Jinja2      | Templates de configuration    |
| Git         | Versioning des configs        |

## Architecture

```
network-automation/
├── configs/
│   └── templates/
├── scripts/
│   ├── backup.py
│   ├── deploy.py
│   └── monitor.py
├── inventory.yaml
└── requirements.txt
```

## Fonctionnalités clés

### 1. Backup automatique

Le script `backup.py` se connecte à chaque équipement et sauvegarde la configuration running dans un fichier horodaté.

```python
def backup_config(device):
    connection = ConnectHandler(**device)
    config = connection.send_command("show running-config")
    save_to_file(config, device['host'])
```

### 2. Déploiement de templates

Utilisation de Jinja2 pour générer des configurations personnalisées à partir d'un template commun.

### 3. Monitoring d'interfaces

Vérification périodique de l'état des interfaces critiques avec alertes en cas de changement.

## Résultats

- ⏱️ **Temps de configuration** réduit de 80%
- 🔄 **Sauvegardes automatiques** quotidiennes
- 📉 **Erreurs de configuration** réduites à zéro
- 📊 **Monitoring** en temps réel des interfaces critiques

## Difficultés rencontrées

1. Gestion des timeouts sur certains équipements anciens
2. Adaptation aux différentes versions d'IOS
3. Sécurisation des credentials

## Améliorations futures

- [ ] Interface web pour visualiser les configurations
- [ ] Intégration avec Ansible pour orchestration
- [ ] Support des équipements Juniper et Arista
