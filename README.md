# AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Info
This project is an Angular app with [Auth0](https://auth0.com/). This web provides us a service that allow us create a Login/Authentication.

## Steps
Sign up in [Auth0](https://auth0.com/) with Google.
In the Auth0 dashboard click in create application (Single Page Web Application) and fill in the Settings tab the necessary fields to [use it](https://manage.auth0.com/dashboard).
To integrate auth0 in the app you need loading a library.(Go to Quick Start tab to know how and follow the steps).

## Notes
You need to call your callback route in the app like the name you use in Allowed Callback URLs of Auth0 Dasboard settings
You can choose the social logins that you want in your app from Connection -> Social in Auth0 Dashboard
The guard.auth it was created with CanActivate implementation interface