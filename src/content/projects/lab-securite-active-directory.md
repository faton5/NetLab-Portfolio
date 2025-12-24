---
title: "Lab Sécurité - Active Directory"
description: "Environnement de test AD pour pratiquer les techniques d'attaque et de défense"
category: "securite"
featured: true
tags:
  ["Active Directory", "Windows Server", "Pentest", "BloodHound", "Kerberos"]
date: 2024-04-20
github: "https://github.com/faton5/ad-security-lab"
---

## Contexte

Mise en place d'un laboratoire Active Directory complet pour pratiquer les techniques d'attaque et de défense dans un environnement contrôlé.

## Objectifs

- Créer un environnement AD réaliste et vulnérable
- Pratiquer les techniques d'énumération et d'exploitation
- Tester des mécanismes de détection
- Documenter les bonnes pratiques de sécurisation

## Architecture du Lab

```
┌─────────────────────────────────────────────────┐
│                  RÉSEAU LAB                      │
│               192.168.100.0/24                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │   DC01   │    │   DC02   │    │  SRV01   │  │
│  │ (PDC)    │    │ (BDC)    │    │ (Files)  │  │
│  │ .10      │    │ .11      │    │ .20      │  │
│  └──────────┘    └──────────┘    └──────────┘  │
│                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  WKS01   │    │  WKS02   │    │ Attacker │  │
│  │ (Win10)  │    │ (Win10)  │    │ (Kali)   │  │
│  │ .100     │    │ .101     │    │ .200     │  │
│  └──────────┘    └──────────┘    └──────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

## Vulnérabilités configurées

| Vulnérabilité          | Description                 | Difficulté |
| ---------------------- | --------------------------- | ---------- |
| Kerberoasting          | Comptes de service avec SPN | ⭐⭐       |
| AS-REP Roasting        | Comptes sans pre-auth       | ⭐⭐       |
| DCSync                 | Droits de réplication       | ⭐⭐⭐     |
| Constrained Delegation | Délégation mal configurée   | ⭐⭐⭐⭐   |
| GPP Passwords          | Mots de passe dans GPO      | ⭐         |

## Outils utilisés

### Énumération

- BloodHound
- PowerView
- ADRecon

### Exploitation

- Mimikatz
- Rubeus
- Impacket

### Défense

- Purple Knight
- PingCastle
- Windows Event Logs

## Scénarios d'attaque documentés

1. **Reconnaissance** → Énumération AD avec BloodHound
2. **Initial Access** → Kerberoasting d'un compte de service
3. **Privilege Escalation** → Exploitation de délégation
4. **Lateral Movement** → Pass-the-Hash vers DC
5. **Persistence** → Golden Ticket

## Résultats et apprentissages

- ✅ Compréhension approfondie des attaques AD
- ✅ Mise en place de détections efficaces
- ✅ Documentation des durcissements recommandés
- ✅ Amélioration des compétences en forensics Windows

## Ressources

- [Active Directory Security](https://adsecurity.org/)
- [HackTricks - AD](https://book.hacktricks.xyz/windows-hardening/active-directory-methodology)
- [BloodHound Documentation](https://bloodhound.readthedocs.io/)
