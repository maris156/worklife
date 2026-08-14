# Travel Planner

Travel Planner is the `trav` web application project.

## Project status

This repository currently contains the Revolte project configuration. The configured web app service expects the application entry point at `index.js` and serves `index.html` as its index page.

## Configuration

- Project: `travel planner`
- Application name: `trav`
- API base URL: `/api/v1`
- CDN: disabled
- Test command: `npm run test`

## Environments

The project defines four deployment environments:

- **Preview** — intended for preview builds.
- **QA** — tracks the `main` branch.
- **Staging** — tracks the `main` branch.
- **Production** — tracks the `main` branch.

Code review and the configured test suite are enabled for every environment.

## Local development

The application source and package manifest are not currently present in this repository, so local installation and development commands have not yet been defined.

Once the application code is added, document the setup steps here, including:

1. Installing dependencies.
2. Setting required environment variables.
3. Starting the development server.
4. Running tests with `npm run test`.

## Deployment

Deployment behavior is configured in [`revolte.yml`](./revolte.yml). Review the relevant environment configuration before promoting changes to QA, staging, or production.

## Contributing

Keep application changes small and tested. Update this README whenever setup, configuration, testing, or deployment behavior changes.
