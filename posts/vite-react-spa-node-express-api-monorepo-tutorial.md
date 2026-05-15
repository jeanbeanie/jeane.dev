---
title: "Vite React SPA with Node/Express API Monorepo Tutorial"
date: "2026-05-10"
description: "An easy to follow tutorial on setting up a simple server/client monorepo using Vite/React and Node/Express."
slug: "vite-react-spa-node-express-api-monorepo-tutorial"
---

# Vite React SPA with Node/Express API Monorepo Tutorial

In this tutorial, you will learn how to set up a modern monorepo architecture by combining a Vite-powered React SPA client with a Node.js/Express API server.

A monorepo allows you to manage multiple projects in a single repository (in this case, the client and server), making it easier to share code and maintain consistency across your applications. In this tutorial, we will use pnpm as our package manager to create a workspace that includes both the client and server projects.

Here's what our final project structure will look like:
```
root/
├── client/   → React + Vite
├── server/   → Express API
└── pnpm-workspace.yaml
```

## 1) Create the repo and pnpm workspace
Start by making a new directory for your monorepo, inside it we initialize a new pnpm workspace:
```
mkdir my-monorepo
cd my-monorepo
pnpm init 
```

This will create a `package.json` file in the root of your monorepo, this is where we manage the dependencies for both the client and server projects.
Upon creation, the `package.json` file will look something like this:
```
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.19.0"
}
```

Next we want to create a `pnpm-workspace.yaml` file in the root of the repository to define our workspace, add the following:
```yaml
packages:
  - "client"
  - "server" 
```

Don't forget to create a file named `.gitignore` at the root of your project to exclude unnecessary files from being tracked by git:
```
node_modules
**/node_modules
dist
.env
.DS_Store
```

## 2) Scaffold the client (Vite + React)
Run the following command in your project root to create a new Vite project with the React and TypeScript template, it will live in the `client` directory:
```
pnpm create vite client --template react-ts
```
If you were to `cd` into the `client` directory and run `pnpm install` you would see that the dependencies are hoisted to the root of the monorepo, this is one of the main benefits of using a monorepo.

Instead of having separate `node_modules` folders for each project, pnpm will create a single `node_modules` folder at the root of the monorepo and symlink the dependencies for each project to that folder. 

Not only is this a more efficient use of precious disk space (by reducing duplicate dependencies), it also makes it easier to manage dependency installations and versions across multiple projects.

If you were to run `pnpm dev` from the client directory, you would see that the Vite development server starts up and serves your React application at `http://localhost:5173`.

Be sure to head back to the root before scaffolding the server:

## 3) Scaffold the server (Express + TypeScript + ESM)
Run the following command in your project root to create a new Node.js project with Express and TypeScript, it will live in the `server` directory:
```
mkdir -p server/src
cd server
pnpm init
pnpm add express
pnpm add -D typescript tsx @types/node @types/express
```
Create `server/tsconfig.json` with the following options:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022"],
    "types": ["node"],
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src"]
}
```
Note that we are using `"module": "ESNext"` and `"moduleResolution": "Bundler"` to enable ESM support in our Node.js server, this allows us to use modern JavaScript features and import syntax in our server code.     

Go into `server/package.json`, edit it to be ESM and add a dev script, it should look similar to the json below, note the `"type": "module"` field and `"scripts"` section:
```json
{
  "name": "server",
  "type": "module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "tsx watch src/index.ts"
  },
  "license": "ISC",
  "packageManager": "pnpm@10.19.0",
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^24.12.4",
    "tsx": "^4.22.0",
    "typescript": "~6.0.3"
  }
}

```
Create a file named `server/src/index.ts` with this basic code:
```typescript
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/users", (_req, res) => {
  res.json({ ok: true });
});

const port = Number(process.env.PORT ?? 5179);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
```
Now if you run `pnpm dev` from the `server` directory, you should see the Express server start up and listen for requests at `http://localhost:5179`. Try testing the API by navigating to `http://localhost:5179/api/users` in your browser, or simply using a tool like Postman, and you should see a JSON response with `{ "ok": true }`.
Our server is now up and running! 

## 4) Set up Vite dev proxy
Let's go back to the client and set up a Vite development proxy so we can make API requests to our Express server without running into CORS issues during development.

In the `client` directory, open `vite.config.ts` and add the following proxy configuration:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5179",
        changeOrigin: true
      }
    }
  }
});
```
This config file tells Vite to proxy any requests starting with `/api` to our Express server running on `http://localhost:5179`. 
Now, we can make API requests from our React app (using `fetch("/api/users")`, for example) without worrying about any annoying CORS issues while developing.

## 5) Add scripts to run both apps concurrently

To make it easier to run both the client and server at the same time, we can add a script to the root `package.json` that uses `concurrently` to run both dev servers together.
First, install `concurrently` as a dev dependency in the root of your monorepo:
```
pnpm add -D concurrently
```
Then, update the root `package.json` to include a new script `dev` that utilizes the `concurrently` package:
```json
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "concurrently -n server,client -c blue,green \"pnpm --filter server dev\" \"pnpm --filter client dev\""
  },
}
```
Then, install all workspace dependencies from the root:
```
pnpm install
```
Now, you can simply run `pnpm dev` from the root of your monorepo, and it will start both the Express server and the Vite development server concurrently. 
You should see output for both servers in your terminal, and you can access your React app at `http://localhost:5173` and your API at `http://localhost:5179`.
```
pnpm dev
```

## 6) What's next?
Congrats, you just set up a sick full-stack monorepo with a Vite React SPA client, an Express API server written in Typescript, and shared dependency management via pnpm workspace.

You are managing both projects in a single repository, share code between them if needed, and can easily run both during development. 
From here, expanding can be done in a number of ways, you could add a shared package for common types or utilities, 
set up testing with Jest or Vitest, add linting and formatting with ESLint and Prettier, or even set up CI/CD pipelines to automate your development workflow.

Check out the code for this tutorial on [GitHub](), and feel free to find me on [Twitter]() if you have any questions or want to share your own monorepo setup with me.

