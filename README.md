# broney : le bro qui t'aide à gérer ta money

Cet outil est composé de deux applications, une première web développée avec [Remix](https://remix.run) et une deuxième mobile développée avec [Expo](https://expo.dev). Nous avons également package **TypeScript** qui contient la logique métier partagée entre ces 2 applications.

## Stack

- Monorepo avec [Nx](https://nx.dev)
- App Mobile avec [Expo](https://expo.dev)
- App Web avec [Remix](https://remix.run)
- Testing avec [Vitest](https://vitest.dev)
- Style avec [Tailwind](https://tailwindcss.com) pour le Web et [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames) pour le Mobile
- Animation avec [Framer Motion](https://www.framer.com/motion/) pour le Web et [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) pour le Mobile
- Déploiement de l'app Web avec [Netlify](https://www.netlify.com)
- Base de données, authentification, etc. avec [Supabase](https://supabase.com)
- Formatage du code avec [Prettier](https://prettier.io)
- Validation du code avec [ESLint](https://eslint.org)
- CI/CD avec les [GitHub Actions](https://github.com/features/actions)
- Gestion d'état avec [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Gestion des formulaires avec [React Hook Form](https://react-hook-form.com)
- Validation des types avec [Zod](https://zod.dev)
- Logging avec [Sentry](https://sentry.io/welcome/)
- Traductions avec [FormatJS](https://formatjs.io)
- Utilitaire de date avec [date-fns](https://date-fns.org)

## Charte graphique

- Font du logo : [Inter Tight](https://fonts.google.com/specimen/Inter+Tight)
- Couleurs du gradient : #F44336 (rouge) #66BB6A (vert) 45°

## Fonctionnalités

### V0 - MVP

- Mettre en place le storage ([react native mmkv](https://github.com/mrousavy/react-native-mmkv) pour le mobile et [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) pour le web)
- Gérer les **catégories** (lister, ajouter, modifier et supprimer)
- Gérer les **comptes** (lister, ajouter, modifier et supprimer)
- Gérer les **transactions** d'un compte (lister, ajouter, modifier et supprimer)
- Authentification avec [Supabase](https://supabase.com)
- Dynamiser toute l'app avec [Supabase](https://supabase.com)

### V1

- Gérer les transactions **récurrentes** d'un compte (lister, ajouter, modifier et supprimer)
- Gérer les transactions de compte à compte (ajouter, modifier, supprimer)
- Filtrer les transactions (par compte, catégorie et période)
- Afficher les **prévisions** mensuels (combien il restera sur le compte à la fin du mois après toutes les récurrences et les transactions planifiée avant la fin du mois)
- Gérer les **patrimoines** (lister, ajouter, modifier, supprimer, partager et lier des comptes)

### V2

- Lier son compte avec les APIs de banque
- Statistiques (à définir)
- Dark mode
- Notifications
- Choix de l'icône de l'app
- Business plan
- Noter l'application
- Onboarding
- Mode hors-ligne

## Modèle de données

- **Wallet**, un portefeuille qui a un solde négatif ou positif (par exemple on peut avoir le portefeuille "Compte Principal Julien" qui a un solde positif de 1000€)
- **Category**, des catégories servant à préciser le contexte des transactions faites (par exemple on a les catégories "Maison", "Restaurants" et "Divertissements")
- **Transaction**, les transactions sont liées à un portefeuille et à une catégorie pour savoir où l'argent est transférée (par exemple on a une transaction du portefeuille "Compte Principal Julien" de 50€ sur la catégorie "Restaurants")

## Architecture

TODO
