# Contributing Guide

Merci de contribuer a ce projet.
Ce document explique comment proposer des changements de facon propre, testable et facile a relire.

## Sommaire

- [Prerequis](#prerequis)
- [Installation locale](#installation-locale)
- [Structure du projet](#structure-du-projet)
- [Regles de contribution](#regles-de-contribution)
- [Workflow Git recommande](#workflow-git-recommande)
- [Checks avant Pull Request](#checks-avant-pull-request)
- [Ouvrir une Pull Request](#ouvrir-une-pull-request)
- [Bonnes pratiques](#bonnes-pratiques)
- [Signaler un bug ou proposer une idee](#signaler-un-bug-ou-proposer-une-idee)

## Prerequis

- Node.js 20+
- npm
- Un token GitHub valide (`GITHUB_TOKEN`) pour les routes API GitHub
- Une cle API Resend (`RESEND_API_KEY`) si vous testez `/api/resend`

## Installation locale

1. Installer les dependances:

```bash
npm install
```

2. Creer le fichier `.env.local` a la racine:

```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

3. Lancer le projet en local:

```bash
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Structure du projet

- `src/app`: pages, layout, styles globaux, routes API
- `src/app/api/github/*`: endpoints internes vers l API GitHub
- `src/app/api/resend`: endpoint d envoi d email
- `src/components`: composants UI et composants metier
- `src/lib`: utilitaires partages

## Regles de contribution

- Garder les changements scopes et lisibles (une PR = un objectif clair).
- Eviter les refactors massifs non necessaires dans une PR fonctionnelle.
- Ne pas commiter de secrets (`.env.local`, tokens, cles API).
- Respecter la structure existante et les conventions deja en place.
- Preferer des noms explicites pour les fichiers, fonctions et variables.

## Workflow Git recommande

1. Creer une branche depuis `main`:

```bash
git checkout -b feature/ma-fonctionnalite
```

2. Commiter avec des messages clairs:

```bash
git commit -m "feat: add branch filter on commits page"
```

Exemples de prefix:
- `feat`: nouvelle fonctionnalite
- `fix`: correction de bug
- `refactor`: refactor sans changement fonctionnel
- `docs`: documentation
- `chore`: maintenance/outillage

## Checks avant Pull Request

Executer ces commandes avant d ouvrir la PR:

```bash
npm run lint
npm run build
```

Si une verification echoue, corriger avant soumission.

## Ouvrir une Pull Request

- Utiliser le template de PR du repo.
- Decrire clairement:
- le probleme initial
- la solution implemente
- l impact fonctionnel
- les points a verifier en review
- Ajouter des captures ecran pour toute modification UI.
- Lier les issues associees si applicable.
- Garder la PR compacte pour simplifier la review.

## Bonnes pratiques

- UI: verifier desktop + mobile pour les pages modifiees.
- API: valider les cas d erreur (parametres manquants, token absent, etc.).
- Logs: ne pas exposer de donnees sensibles.
- Performance: eviter les appels API inutiles cote client.

## Signaler un bug ou proposer une idee

Pour un bug ou une evolution:

- Decrire le contexte (page/endpoint, environnement, etapes de reproduction)
- Fournir le resultat attendu et le resultat observe
- Ajouter logs/captures si utile

Merci pour votre contribution.
