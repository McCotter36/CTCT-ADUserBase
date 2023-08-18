# CTCT ADUser Base

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

# Base AD_User Infrastructure

This project is the basis for providing login for AD Users with Azure AD. 
Tutorial for building this bas login application can be found at https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-angular-auth-code
Some modifications have been made to the app in the above tutorial. Namely, the app onInit calls the login() mnethod if there is not a user logged in. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
