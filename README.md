# 🎨 CSS Modern Features — Guide & Documentation Interactive

Une collection complète de fiches techniques et démonstrations interactives dédiées aux fonctionnalités modernes et de pointe de **CSS** (2022 – 2024+).

Chaque fiche explore en détail une fonctionnalité spécifique à travers des cas concrets, des explications pédagogiques, des démos interactives, des tables de compatibilité et des stratégies de repli (*fallbacks*).

---

## 📋 Sommaire des fonctionnalités documentées

| Fonctionnalité | Période d'introduction | Description clé | Accès |
| :--- | :--- | :--- | :--- |
| **`:has()`** | 2022 – 2023 | Le « sélecteur parent » permettant de styliser un élément selon ses descendants ou ses frères. | [Voir la fiche](./has/index.html) |
| **`@container`** | 2022 – 2023 | Container Queries pour adapter les styles à la taille du conteneur parent plutôt qu'au viewport. | [Voir la fiche](./@container/index.html) |
| **`@property`** | 2020 – 2024 | Enregistrement et typage des variables CSS (CSS Houdini) pour animer dégradés et compteurs. | [Voir la fiche](./@property/index.html) |
| **`Scroll-driven Animations`** | 2023 – 2024 | Animation liée au défilement ou à la visibilité (`animation-timeline`, `scroll()`, `view()`) sans JS. | [Voir la fiche](./Scroll/index.html) |
| **`appearance`** | Standard CSS | Personnalisation et contrôle du rendu natif des contrôles de formulaires de l'OS. | [Voir la fiche](./appearence/index.html) |
| **`color-mix()`** | 2023 | Mélange dynamique de couleurs dans divers espaces colorimétriques (`srgb`, `oklch`, `hsl`). | [Voir la fiche](./Color-mix/index.html) |
| **`@layer`** | 2022 | Gestion granulaire de la priorité de cascade CSS sans surenchère de spécificité. | [Voir la fiche](./Layers/index.html) |
| **`sin() & cos()`** | 2023 | Fonctions trigonométriques pour calculs de coordonnées cartésiennes et placements circulaires. | [Voir la fiche](./Sin-Cos/index.html) |
| **`Anchor Positioning`** | 2024 | Ancrage déclaratif d'éléments flottants (tooltips, popovers, menus) sans JavaScript. | [Voir la fiche](./Anchor-positioning/index.html) |
| **`@starting-style`** | 2023 – 2024 | Transitions fluides d'entrée/sortie sur `display: none` et modales `<dialog>` natives. | [Voir la fiche](./Starting-style/index.html) |

---

## 🏛️ Structure du Projet

Le projet est conçu en **HTML, CSS et JavaScript Vanilla**, sans dépendance ni bundler requis :

```text
CSS-mise-a-jour/
├── index.html               # Page d'accueil & sommaire des fiches
├── style.css                # Styles du hub d'accueil (Grid, badges, layout)
├── README.md                # Documentation générale du projet
├── :has/                    # Fiche :has()
│   ├── index.html
│   └── style.css
├── @container/              # Fiche Container Queries
├── @property/               # Fiche @property (Houdini)
├── Scroll/                  # Fiche Scroll-driven animations
├── Color-mix/               # Fiche color-mix()
├── Layers/                  # Fiche Cascade Layers (@layer)
├── Sin-Cos/                 # Fiche Fonctions trigonométriques sin() & cos()
├── appearence/              # Fiche appearance
├── Anchor-positioning/      # Fiche CSS Anchor Positioning
└── Starting-style/          # Fiche @starting-style & transitions sur display
```

---

## 🔍 Structure type d'une fiche technique

Chaque sous-page respecte un format standardisé pour faciliter la lecture :

1. **En-tête & Métadonnées :** Statut de spécification, date de sortie, disponibilité Baseline.
2. **📖 1. Explication :** Synthèse en français (problématique historique, solution apportée, cas d'usage).
3. **💻 2. Syntaxe :** Blocs d'exemples commentés avec coloration syntaxique.
4. **⚡ 3. Démo Live Interactive :** Environnement interactif pour manipuler les valeurs et constater le rendu visuel immédiat.
5. **🌍 4. Compatibilité Navigateurs :** Tableau détaillé (Chrome, Edge, Safari, Firefox, Opera) et couverture Baseline.
6. **🛡️ 5. Stratégies de Repli (Fallback) :** Conseils d'intégration en production, directives `@supports` et bonnes pratiques d'amélioration progressive.

---

## 🚀 Utilisation / Démarrage

Aucune installation de paquet n'est requise. Vous pouvez prévisualiser le projet :

1. **Directement dans le navigateur :** Ouvrez simplement `index.html` dans n'importe quel navigateur récent (ex: Google Chrome, Microsoft Edge, Safari ou Firefox).
2. **Via un serveur local (recommandé) :**
   ```bash
   # Via l'extension VS Code Live Server ou avec npx :
   npx serve .
   # ou
   python -m http.server 8000
   ```
