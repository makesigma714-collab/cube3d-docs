# Cube3D Docs

Scripting reference and guides for Cube3D, published at [docs.cube2d.net](https://docs.cube2d.net).

Built with [Fumadocs](https://fumadocs.dev) and Next.js as a static export.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Layout

| Path | Contents |
| --- | --- |
| `content/docs/(documentation)/start` | Getting started |
| `content/docs/(documentation)/tutorials` | Tutorials |
| `content/docs/(documentation)/server` | Server API reference |
| `content/docs/(documentation)/client` | Client API reference |
| `content/docs/(documentation)/types` | Data types |

Each folder has a `meta.json` that sets the sidebar order. API pages use `## Properties`, `## Methods` and `## Events`, with one `###` heading per member so members show up in the sidebar.

## Building

```bash
npm run build
```

The static site is written to `out`. The server pulls `main` and rebuilds the site automatically after every push.
