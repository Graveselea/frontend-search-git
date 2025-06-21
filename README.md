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
    git clone https://github.com/Graveselea/frontend-search-git.git

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

---
## 📦 Scripts disponibles

   ```bash
   npm start
   ```

Démarre l’application en mode développement (accessible à l’adresse http://localhost:3000)

   ```bash
   npm test
   ```

Lance les tests en mode watch

   ```bash
  npm run build 
   ```

Génère une build optimisée dans le dossier `build/`

   ```bash
   npm run eject   
   ```
   
 Éjecte la configuration de Create React App (attention, cette action est non réversible)

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
