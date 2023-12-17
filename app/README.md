# VouchX App

this app walks through a three step process to "Vouch" a user.

Step 1: Connect Wallet
Step 2: SignIn with X
Step 3: Vouch Wallet

## Stack

* Svelte + Vite
* Tailwind
* Satoshi Font

## Layout

| File | Folder | Description |
| ---- | ------ | ----------- |
| main.js | src | application entry point |
| store.js | src | application shared state |
| App.svelte | src | app router |
| nav.svelte | src/components | navigation sidebar |
| layout.svelte | src/components | application layout |
| connect-wallet.svelte | src/components | connect wallet ux |
| signin-x.svelte | src/components | authorize with X/Twitter |
| success.svelte | src/components | successfully vouched wallet |


## Developer Setup

```sh
yarn
yarn dev
```

## Deploy to Arweave

```sh
yarn build
npm i -g arkb
cp [wallet] wallet.json
yarn deploy
```
