# angular-material-starter

Cloned from [angular-material-starter](https://github.com/thrixton/angular-material-starter)

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

To change the [theme-color](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android), modify the `<meta name="theme-color" content="#ffffff">` tag in [index.html](./src/index.html) and the [site.webmanifest](./src/assets/site.webmanifest)

## Cloning

To clone this project as a template, modify the project name in the following places

1. `name` element in [package.json](./package.json)
2. `name` element in [package.json](./package-lock.json)
3. `projects` node and all other references to the project in [angular.json](./angular.json)
4. Change the `build` targets in [package.json](./package.json) to reflect your project name in [angular.json](./angular.json)
5. Toolbar header in [app.component.html](./src/app/components/app/app.component.html)
6. App spec file, [app.component.spec.ts](./src/app/components/app/app.component.spec.ts)
7. `<title>` in [index.html](./src/index.html)
8. `name` and `short_name` in [site.webmanifest](./src/assets/site.webmanifest)
9. This `README`

## Site versioning

> TODO

# Features

## Validation Handler

Client side display of validation messages from the server: [validation-handler.directive](./src/app/directives/validation-handler.directive.ts)

# Icons

Icons are from [FontAwesome](https://fontawesome.com) and loaded via the [IconService](./src/app/services/icon.service.ts)  
Favicon and Manifest icons are from [RealFaviconGenerator](https://realfavicongenerator.net) and are stored in [/assets](./src/assets)  
Png FontAwesome icons generated by [FA2PNG](http://fa2png.io/)
