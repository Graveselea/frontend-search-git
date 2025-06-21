# Recherche d’utilisateurs GitHub (Front/React)

Ce projet est une petite application **React + TypeScript** qui permet de rechercher des utilisateurs GitHub en temps réel, sans appuyer sur Entrée, et de gérer une sélection avec duplication/suppression et un mode édition.

---

## 📖 Fonctionnalités

- **Recherche instantanée** (live search) via l’API GitHub  
- **Debounce** (300 ms) et **annulation** des requêtes en cours (AbortController)  
- **Gestion de la rate-limit** GitHub (intégration d’un token personnel)  
- **Grille responsive** de cartes utilisateur  
- **Mode édition** avec :  
  - Sélection individuelle via checkbox  
  - Checkbox “Tout sélectionner”  
  - Affichage du nombre d’éléments sélectionnés (singulier/pluriel)  
  - Actions front-end : **Dupliquer** et **Supprimer**  
- **Réinitialisation automatique** du mode édition et des sélections lors d’un nouveau terme

---

## 🛠 Tech & libs

- **React 18**  
- **TypeScript**  
- **Create React App** (template TypeScript)  
- **Fetch API** native + AbortController  
- **CSS** classique (fichiers séparés par composant)

---

## 🚀 Prérequis

- Node.js ≥ 14  
- npm ≥ 6  
- Un **token GitHub personnel** pour lever la limite non-authentifiée de 60 requêtes/heure

---

## ⚙️ Installation & configuration

1. **Cloner le dépôt**  
   ```bash
   git clone https://github.com/<VOTRE_UTILISATEUR>/<NOM_DU_REPO>.git
   cd <NOM_DU_REPO>

2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Configurer le token GitHub**
   - Créez un fichier `.env.local` à la racine du projet (ce fichier est ignoré par Git).
   - Ajoutez la ligne suivante :
     ```
     REACT_APP_GITHUB_TOKEN=ghp_VotreTokenGitHubIci
     ```
4. **Lancer l’application en mode développement**
   ```bash
   npm start
   ```
   - Ouvrez votre navigateur à l’adresse [http://localhost:3000](http://localhost:3000)
---
## 📦 Scripts disponibles

npm start : Démarre l’application en mode développement (accessible à l’adresse http://localhost:3000)
npm test : Lance les tests en mode watch
npm run build : Génère une build optimisée dans le dossier `build/`
npm run eject : Éjecte la configuration de Create React App (attention, cette action est non réversible)

## 📂 Structure du projet

```
public/
├── index.html
src/
├── components/
│   ├── SearchInput.tsx
│   ├── UserList.tsx
│   ├── UserCard.tsx                
│   └── ActionsBar.tsx
├── styles/
│   ├── App.css
│   ├── SearchInput.css
│   ├── UserList.css
│   ├── UserCard.css
│   └── ActionsBar.css
├── types/
│   └── github.d.ts
├── App.tsx
├── index.tsx
└── react-app-env.d.ts
.env.local
```

## 🔐 Rate Limit GitHub 

- Non authentifié : 60 requêtes/heure (403 possible)
- Authentifié avec token classic : 5 000 requêtes/heure avec `REACT_APP_GITHUB_TOKEN`
- Le token est injecté dans l'en-tête Authorization à chaque requête fetch.

## 📜 Documentation

 - Create React App** : [Documentation](https://create-react-app.dev/docs/getting-started)
 - React** : [Documentation](https://reactjs.org/)
 - Variables d’environnement** : [CRA Variables](https://create-react-app.dev/docs/adding-custom-environment-variables)

## 🌐 Déploiement

 - npm run build
 - Déployer le dossier build/ sur Netlify, Vercel, GitHub Pages, etc.

## 💻 Mon organisation de travail

- **Planification** : Compréhension des besoins, définition des fonctionnalités et de l’architecture.
- **Développement** : Mise en place des composants React, gestion de l’état et des effets.
- **Tests** : Tests manuels pour valider le comportement.
- **Documentation** : Rédaction du README, commentaires dans le code.

J’ai utilisé : 

La console,
Les instructions,
Chat GPT,
Site officiel de react
W3 school,
Figma
 Copilot,
imagecolorpicker 

Problème rencontré:
Mon checkbox ne se vidait pas quand je vidait ou édifier l’input
J’ai respecté la maquette mais les 100 px de largeur des cartes je trouve ça petit
Texte trop long sur les cartes

Erreur 403 a gérer (clé token .env
- J’ai utilisé un token GitHub pour éviter la limite de 60 requêtes/heure.
- J’ai géré les erreurs 403 en affichant un message d’erreur à l’utilisateur.
- J’ai utilisé `AbortController` pour annuler les requêtes en cours lors de la saisie rapide.
- J’ai ajouté un debounce de 300 ms pour éviter les requêtes trop fréquentes.
- J’ai utilisé `useEffect` pour gérer les effets de bord et les dépendances.
- J’ai utilisé `useState` pour gérer l’état des sélections et du mode édition.
- J’ai utilisé `useRef` pour stocker l’instance de `AbortController` et éviter les fuites de mémoire.
- J’ai utilisé `useCallback` pour optimiser les fonctions de gestion des événements.
- J’ai utilisé `useMemo` pour mémoriser les résultats de la recherche et éviter les recalculs inutiles.
- J’ai utilisé `classnames` pour gérer les classes CSS conditionnelles.
- J’ai utilisé `fetch` pour effectuer les requêtes HTTP vers l’API GitHub.
- J’ai utilisé `CSS` pour le style, sans dépendances externes.
- J’ai utilisé `TypeScript` pour typer les données et les props des composants.
- J’ai utilisé `create-react-app` pour initialiser le projet avec TypeScript.
- J’ai utilisé `npm` pour gérer les dépendances et les scripts.
- J’ai utilisé `git` pour le contrôle de version et la gestion du code source.
- J’ai utilisé `GitHub` pour héberger le code source et la documentation.
- J’ai utilisé `Figma` pour la maquette et le design.
- J’ai utilisé `imagecolorpicker` pour choisir les couleurs des éléments graphiques.
- J’ai utilisé `console.log` pour le débogage et la vérification des données.
- J’ai utilisé `eslint` et `prettier` pour le formatage et la qualité du code.
- J'ai utilisé chat GPT pour obtenir de l'aide sur certaines questions techniques et pour la rédaction de la documentation.
   ```