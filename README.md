# angular-material-starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.  
Use `--environment={env}` to build for a specific environment

**Environments**

- test
- dev (default)
- prod

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Themes and Styles

Select a colour palette using the [material color tool](https://material.io/tools/color)  
To change the theme colour palette, select a `$primary` colour and `$primary-hue`, `$accent` colour and `$accent-hue` and a `$warn` colour and `$warn-hue` and modify [theme.scss](./src/themes/theme.scss)  
By default, this is a light theme, to change to a dark theme, modify the `$theme` variable to be a `mat-dark-theme...` in [theme.scss](./src/themes/theme.scss)

Global styles are in [styles.scss](./src/styles.scss)  
Link colours are custom and can be changed in [styles.scss](./src/styles.scss)

# Features

## Validation Handler

[src](./src/app/directives/validation-handler.directive.ts)

- Client side display of validation messages from the server

# Icons

Icons are from FontAwesome and loaded via the IconService  
Favicon and Manifest icons are from [RealFaviconGenerator](https://realfavicongenerator.net).
