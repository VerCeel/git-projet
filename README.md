# Git Project

Application web développée avec Next.js (App Router) qui permet d'afficher les branches et les commits d'un dépôt GitHub, avec une interface moderne et des routes API côté serveur.

## Aperçu

Le projet propose:

- Une page d'accueil avec navigation globale.
- Une page de consultation des branches du dépôt.
- Une page de consultation des commits du dépôt.
- Une API interne qui interroge l'API GitHub.
- Une API d'envoi d'email via Resend (template React Email).

## Stack Technique

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript (routes API en `.ts`)
- Resend + React Email
- UI utilitaires: Lucide, React Icons, composants style shadcn

## Prérequis

Avant de démarrer:

- Node.js 20+ recommandé
- npm (ou pnpm/yarn/bun si vous adaptez les commandes)
- Un token GitHub valide
- Une clé API Resend (uniquement si vous utilisez l'endpoint email)

## Installation

```bash
npm install
```

## Configuration Environnement

Créer un fichier `.env.local` à la racine du projet:

```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Variables utilisées:

- `GITHUB_TOKEN`: authentification des appels API GitHub.
- `RESEND_API_KEY`: envoi d'emails via `POST /api/resend`.

## Lancer le Projet

### Développement

```bash
npm run dev
```

Application disponible sur:

```text
http://localhost:3000
```

### Build production

```bash
npm run build
npm run start
```

## Scripts Disponibles

- `npm run dev`: lance le serveur de développement.
- `npm run build`: construit l'application Next.js.
- `npm run start`: démarre l'application en mode production.
- `npm run prepare`: initialise Husky.

## Pages Principales

- `/`: page d'accueil.
- `/branches-list`: affichage des branches.
- `/commits-list`: affichage des commits.
- `/commit-by-branch`: page dédiée (actuellement placeholder visuel).
- `/contact`: page de contact.

## Endpoints API

### GitHub

- `GET /api/github/branches`
	- Retourne les branches du dépôt cible GitHub.
- `GET /api/github/commits`
	- Retourne les commits du dépôt cible GitHub.
- `GET /api/github/commitbybranch?sha=<branch_or_sha>`
	- Retourne les commits filtrés par `sha`.

### Email

- `POST /api/resend`
	- Corps JSON attendu:

```json
{
	"name": "Votre nom",
	"email": "vous@example.com",
	"phone": "+33...",
	"message": "Votre message"
}
```

	- Validation incluse:
	- champs requis (`name`, `email`, `message`)
	- format email
	- longueur maximale des champs
	- nettoyage basique des entrées utilisateur

## Structure du Projet

```text
src/
	app/
		api/
			github/
				branches/
				commits/
				commitbybranch/
			resend/
		branches-list/
		commits-list/
		commit-by-branch/
		contact/
	components/
		static/
		ui/
		email/
```

## Notes Techniques

- Le rendu des listes (branches/commits) se fait côté client via `fetch` vers les routes API internes.
- Les requêtes vers GitHub utilisent le token serveur via variables d'environnement.
- L'endpoint email utilise un template React Email converti en HTML avant envoi.

## Améliorations Possibles

- Ajouter une gestion d'erreurs UX côté frontend (chargement, erreurs API, empty states).
- Ajouter des tests unitaires/intégration (routes API et composants).
- Ajouter un fichier `.env.example` pour simplifier l'onboarding.
- Corriger/aligner la logique `commit-by-branch` entre page UI et données réellement consommées.

## Auteur

HIRICH Oussama | EL HARIM Yasmine IW3-2026 -