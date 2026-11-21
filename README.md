# Cube3D documentation

Public creator documentation for Cube3D. The game source and infrastructure files are not included.

## Local development

```sh
npm ci
npm run dev
npm run build
```

Markdown guides live in `guide/`; the source-checked API member reference is in `reference/`. Edit a page and open a pull request. New APIs must be checked against the runtime implementation and marked as local development when not yet released.

GitHub Actions builds and publishes to GitHub Pages on pushes to main. Enable Pages with GitHub Actions as the source. The default site address is https://makesigma714-collab.github.io/cube3d-docs/ .

For docs.cube2d.net, add the custom domain in GitHub Pages settings, configure its DNS CNAME to makesigma714-collab.github.io, change the VitePress base to `/`, and update the favicon path to `/logo.png`.
