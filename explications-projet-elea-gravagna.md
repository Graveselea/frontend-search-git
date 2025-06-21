
# Comment j’ai construit ce projet

1. **Mise en place du projet**  
   - Démarrage avec **Create React App** (template TypeScript) pour une configuration prête à l’emploi et un typage fort.  
   - Organisation en composants réutilisables : `SearchInput`, `ActionsBar`, `UserList`, `UserCard`.  
   - Fichiers CSS séparés par composant pour un style modulaire.

2. **Ressources et outils utilisés**  
   - **La console** du navigateur pour debugger et tracer les erreurs (`console.log`).  
   - **Les instructions** du sujet (README) comme guide principal.  
    - **ChatGPT** pour :  
     - Générer et peaufiner le **README** du projet.  
     - Obtenir des explications sur React Hooks (`useEffect`, `useRef`, `useCallback`).  
     - Apprendre à gérer l’`AbortController`, le debounce et les patterns TypeScript que j’utilise peu au quotidien.  
     - Me dépanner à chaque fois que j’étais bloquée (erreurs ESLint, boucles infinies, configuration `.env`).  
   - **La documentation officielle de React** pour comprendre l’API et les bonnes pratiques.  
   - **W3Schools** pour réviser rapidement des propriétés CSS et media-queries.  
   - **La maquette fournie** (capture d’écran) pour reproduire le layout et les espacements.  
   - **Figma**, uniquement pour rechercher et prévisualiser des icônes (duplicate, trash…) avant de les exporter en SVG/PNG.  
   - **GitHub Copilot** pour suggérer des snippets de code, notamment pour le debounce et l’abort.  
   - **imagecolorpicker** (en ligne) pour extraire les codes couleurs précis (bleu, gris, ombres).

3. **Techniques clés**  
   - **Debounce + AbortController** :  
     Après chaque frappe, attente de 300 ms, annulation de la requête précédente, puis lancement de la nouvelle.  
   - **Gestion de la rate-limit (403)** :  
     Intégration d’un token GitHub dans `.env.local` (`REACT_APP_GITHUB_TOKEN`) pour passer de 60 à 5 000 requêtes/heure.  
   - **Lifting state & useCallback** :  
     Centralisation de l’état (`users`, `selectedIds`, `editMode`) dans `App.tsx`.  
     Mémorisation de `handleSearchChange` pour stabiliser la prop `onResults` et éviter des effets secondaires inutiles.

---

# Problèmes rencontrés & solutions

- **Nommage npm interdit pour le dossier**  
  Cause : le nom `Frontend` comportait une majuscule, ce qui viole les restrictions npm.  
  Solution : créer le projet avec un nom valide sans majuscule.

  - **Boucle infinie / Maximum update depth exceeded**  
  Cause : on faisait un `setState` (pour l’`AbortController`) dans un `useEffect` dont dépendait ce même state.  
  Solution : passer l’`AbortController` dans une `useRef` (qui ne déclenche pas de rerender) et retirer tout `setState` de cet effet.

- **Checkbox qui se décochait**  
  J’appelais `onResults([])` dans le `onChange` de l’input, ce qui vidait la liste (et la sélection) à chaque modification mineure.  
  → Déplacement du reset **uniquement** dans le `useEffect` quand `query` passe de non-vide à vide.

- **Cartes de 100 px trop petites**  
  Respect de la maquette, mais manque d’espace pour avatar + texte.  
  → Ajustement du `grid-template` en `minmax(100px, 1fr)` sur mobile et amélioration des marges/paddings.

- **Texte trop long sur les cartes**  
  Problèmes de débordement.  
  → Application de  
  ```css
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
pour casser le texte à la ligne.

- **Erreur 403 Rate Limit**
Ajout d’un Personal Access Token dans .env.local et en-tête Authorization: token <TOKEN>.

# Résultat final

- **Recherche instantanée : live search dès 2 caractères, avec debounce et annulation propre**
- **Grille responsive : 4 cartes par ligne sur desktop, auto-fill sur mobile**
- **Mode édition :**
Toggle clair “Enter/Exit Edit Mode”.
Checkbox “Select All / Deselect All” avec compteur singulier/pluriel.
Actions front-end : duplication et suppression.
- **UX fluide : pas de scintillement, pas de requêtes obsolètes, gestion de la rate-limit**