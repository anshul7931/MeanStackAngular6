#Custom

First step: npm install -g @angular/cli

ng new <project_name> 

For material design we can also use "ng add @angular/material"

Now open the <project_name> folder in vs code(code .)

To run the project, simply use "ng serve -o"

We can generate our own components from CLI using "ng genereate component components/<component_name>" or "ng g c components/<name>"
(It will update app.module.ts and will create html,css,.ts and spec files)

Main/Index component is app.component.html

We can embed one component into another using the selector defined in <name>.component.ts file

Now we can provide the routes(with import package) in app.module.ts by importing our components and editing Routes = [];

After this we can import import { MatToolbarModule } from '@angular/material' ; for <mat-toolbar> for material toolbar in app.component.ts.

For deployment , run ng build (dist folder will be created)
For production deployment, run ng build --prod


In dist folder, open index.html and change <base href="/"> to: <base href="./">



# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

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
