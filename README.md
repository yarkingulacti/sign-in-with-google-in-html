# About the repo

This repo demonstrates how you can use Google Sign-In in a browser(`HTML` file). Originally this OAUTH process was called _Google Sign-In_(see [here](https://developers.google.com/identity/sign-in/web/sign-in)). Since it's deprecated([see more](https://developers.google.com/identity/sign-in/web/quick-migration-guide)) I've done the migration and included a basic `express` server for verifying Google authentication.

## What to do after downloading this repo?

Follow below steps to work with this repo;

1. Duplicate `env.example.js` and name it `env.js`, then fill the data.
2. Start the `express` server.
3. Serve `index.html` with a tool like `live-server`(via VSCode our cli tool).

And you're good to go!

## Important Notes

To be able to get **OAUTH** working, first go to [Google Cloud Console](https://console.cloud.google.com/auth/clients) and create a client there. You **MUST** specify both _Authorized JavaScript origins_ and _Authorized redirect URIs_ as a _domain_, otherwise it will give an error. An example definition of _Authorized JavaScript origins_ and _Authorized redirect URIs_ could be `http://localhost:5500`, not `http://127.0.0.1:5500`. Because IP's brakes URI's(see [this](https://stackoverflow.com/a/36162748/15891031) Stackoverflow discussion).
