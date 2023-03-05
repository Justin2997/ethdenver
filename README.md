# Frontend
This is the full front end for the AGIS-GUI.

## Prerequisites
- [Node.js](https://nodejs.org/en/) (v18.x)

You can install it with nvm (Node Version Manager) with the following command:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
Then install the latest version of node with:
```bash
nvm install 18
```

## Start the application
Before starting the application be sure to have run `yarn install` to install all the dependencies. Also start the tileserver-gl server see [tileserver-gl/README.md](tileserver-gl/README.md) for more information.

Then you can start the application with `yarn start` and it should open a new tab in your browser.

## Lbraries use
- Map : [react-map-gl](https://github.com/visgl/react-map-gl)
- Query : [react-query](https://react-query-v3.tanstack.com/)
- State management : [zustand](https://github.com/pmndrs/zustand#typescript-usage)
- Routing : [react-router](https://github.com/remix-run/react-router)
- Unit testing : [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- Styling : [tailwindcss](https://tailwindcss.com/)
- UI components : [flowbite](https://flowbite.com/docs/getting-started/introduction/)
- Code formatting : [prettier](https://prettier.io/)
- Linting : [eslint](https://eslint.org/)
- End2end testing : [cypress](https://www.cypress.io/)
- Component testing : [storybook](https://storybook.js.org/)
- Security Scan : [socket](https://socket.dev/dashboard/org/gh/artik-technologies)

## Security scan
You can join the organisation with this link [socket.dev/dashboard/invitation?organization_id=3962&invitation_token=CG7RhYPz2gJTFyEzHcA1tmLRRltW41gx2KJ5XbXVxS4](socket.dev/dashboard/invitation?organization_id=3962&invitation_token=CG7RhYPz2gJTFyEzHcA1tmLRRltW41gx2KJ5XbXVxS4)

## Storybook
To start storybook run `yarn storybook` and it should open a new tab in your browser. Get more information one how Storybook work with [https://storybook.js.org/docs/react/get-started/whats-a-story](https://storybook.js.org/docs/react/get-started/whats-a-story).
