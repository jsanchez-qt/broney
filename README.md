# Broney: The bro that helps you manage your money

This tool is made up of two applications, a first web developed with [Remix](https://remix.run) and a second mobile developed with [Expo](https://expo.dev). We have also packaged **TypeScript** that contains the business logic shared between these 2 applications.

## Stack

- Monorepo with [Nx](https://nx.dev)
- Mobile App with [Expo](https://expo.dev)
- Web App with [Remix](https://remix.run)
- Testing with [Vitest](https://vitest.dev)
- Style with [Tailwind](https://tailwindcss.com) for the Web and [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames) for Mobile
- Animation with [Framer Motion](https://www.framer.com/motion/) for the Web and [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for Mobile
- Web app deployment with [Netlify](https://www.netlify.com)
- Database, authentication, etc. with [Supabase](https://supabase.com)
- Code formatting with [Prettier](https://prettier.io)
- Code validation with [ESLint](https://eslint.org)
- CI/CD with [GitHub Actions](https://github.com/features/actions)
- State management with [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Form management with [React Hook Form](https://react-hook-form.com)
- Type validation with [Zod](https://zod.dev)
- Logging with [Sentry](https://sentry.io/welcome/)
- Translations with [FormatJS](https://formatjs.io)
- Date utility with [date-fns](https://date-fns.org)

## Style Guide

- Logo font: [Inter Tight](https://fonts.google.com/specimen/Inter+Tight)
- Gradient colors: #F44336 (red) #66BB6A (green) 45°

## Features

### V0 - MVP

- Set up storage ([react native mmkv](https://github.com/mrousavy/react-native-mmkv) for mobile and [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for the web)
- Manage **categories** (list, add, modify and delete)
- Manage **accounts** (list, add, modify and delete)
- Manage a account's **transactions** (list, add, modify, and delete)
- Authentication with [Supabase](https://supabase.com)
- Make the entire app dynamic with [Supabase](https://supabase.com)

### V1

- Manage an account's **recurring** transactions (list, add, modify, and delete)
- Manage account-to-account transactions (add, modify, delete)
- Filter transactions (by account, category, and period)
- Display **monthly projections** (how much will be left in the account at the end of the month after all recurrences and transactions planned before the end of the month)
- Manage **assets** (list, add, modify, delete, share, and link accounts)

### V2

- Link the account with the bank APIs
- Statistics (to be defined)
- Dark mode
- Notifications
- Choose app icon
- Business plan
- Rate the application
- Onboarding
- Offline mode

## Data Model

- **Wallet**, a wallet that has a negative or positive balance (for example, you can have "Julien's Main Account Wallet" which has a positive balance of 1000€)
- **Category**, categories used to specify the context of the transactions made (for example, you have categories "Home", "Restaurants" and "Entertainment")
- **Transaction**, transactions are linked to a wallet and a category to know where the money is transferred (for example, you have a transaction from the "Julien's Main Account Wallet" of 50€ towards the "Restaurants" category)

## Project Structure

- **apps**
  - **mobile** : our React Native application developed with Expo
  - **web** : our React application developed with React
- **libs**
  - **ui** : our React and React Native components used by the **web** and **mobile** apps
  - **tailwind** : our tailwind configuration used by the **web** and **mobile** apps as well as the **ui** lib
  - **core** : our hexagonal architecture containing the core of our application and all the reusable business logic used by the **web** and **mobile** apps

More details about the **core** lib:

- **libs**
  - **core**
    - **src**
      - **wallet**
        - **\_\_tests\_\_**
          - **wallet.service.test.ts** : the tested business logic
          - **wallet.test.ts** : the tested business rules
        - **domain**
          - **wallet.ts** : the entity representing the wallets and contain the business rules
          - **wallet.repository.ts**: the contract determining how to manipulate the entity to list, add, etc.
          - **wallet.service.ts** : the service consuming an implementation of the contract
        - **infrastructure**
          - **in-memory-wallet.repository.ts** : an implementation of the contract
          - **local-storage-wallet.repository.ts** : same
          - **supabase-wallet.repository.ts** : same
        - **user-interface**
          - **wallet.store.ts** : a vanilla zustand store, usable in any JavaScript environment and will be used in our apps
        - **category**
          - ...
        - ...
