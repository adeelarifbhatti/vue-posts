# Vue Posts

A simple Vue 3 blog app with no real backend — it uses [json-server](https://github.com/typicode/json-server) to simulate a REST API served from a local JSON file.

## Tech Stack

- **Vue 3** — Composition API (`setup`, `ref`)
- **Vue Router 4** — client-side routing with history mode
- **json-server** — mock REST API backed by `src/data/data.json`
- **SCSS** — styles via sass-loader

## Project Structure

```
src/
├── views/          # Home, Details, CreatePost, Tag
├── components/     # NavBar, PostList, SinglePost, Loading
├── composables/    # getPosts.js, getPost.js
├── router/         # Vue Router config
├── assets/scss/    # Global styles
└── data/
    └── data.json   # json-server database
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose  
  **or** Node.js + npm installed locally

### Run with Docker (recommended)

```bash
git clone <repo-url>
cd vue-posts
docker-compose up
```

The app will be available at `http://localhost:8080` and the API at `http://localhost:3000/posts`.

### Run locally

```bash
npm install
bash start.sh
```

This starts the Vue dev server (`http://localhost:8080`) and json-server (`http://localhost:3000`) concurrently.

## Environment Variables

Create a `.env` file at the project root:

```
VUE_APP_URL=http://localhost:3000/posts
```

## Routes

| Path | View | Description |
|------|------|-------------|
| `/` | Home | List all posts |
| `/posts/:id` | Details | View a single post |
| `/create` | CreatePost | Create a new post |
| `/tags/:tag` | Tag | Filter posts by tag |
