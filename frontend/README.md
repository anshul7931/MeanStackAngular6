#Custom

First step: npm install -g @angular/cli

#ng new <project_name> 

For material design we can also use "ng add @angular/material"

Now open the < project_name> folder in vs code(code .)

To run the project, simply use "ng serve -o"

We can generate our own components from CLI using 
# ng genereate component components/<component_name>
or
#ng g c components/<name>
(It will update app.module.ts and will create html,css,.ts and spec files)
The component class name will be < component_name>Coponent in upper camel case

Main/Index component is app.component.html

We can embed one component into another using the selector defined in < component_name>.component.ts file

Now we can provide the routes(with import package) in app.module.ts by importing our components and editing Routes = [];

After this we can import import { MatToolbarModule } from '@angular/material' ; for < mat-toolbar> for material toolbar in app.module.ts. (Used in app.module.html)

Basic structure of front end is ready now.

Now after creating the backend http verbs, we will create a service class to connect to node server(README of backend)
#ng generate service <service_name>
or
#ng g s <service_name>

< service_name>.service.ts,< service_name>.sevice.spec.ts will be created.
The service class name will be < service_name>Service in upper camel case by default.

Now we need to add the service in app.module.ts and add that in the providers array.
After this we will be able to use the issue service in all the components.
now to send http request to the backend server we will use h"ttpClientModule", and to use this module in our service we need to import this in app.module.ts before import of the service and add also in imports array before routes.

Now open the service file and import "httpClient" module and add that in constructor.
NOTE:httpClientModule and httpClient are different.

After configuring all the uri methods in service we need to inject it in our components.For this there are two steps:
1. We need to import the service
2. Add an instance for the same in the constructor.

Now in ngOnInit method, we can call the service.

Now we will create our material design, for that we will import all the necessary imports and further create issue.model.ts interface.
After this open any component(list.component.ts) and import Router,MatTableDataSource and Issue (interface).Further start with the service calls and call them in ngOnInit method.

According to UI we are adding actions intothe table rows like edit and delete a row for ever every row.For that we need event handler functions also.After all this we will edit the html file to display all the results in UI.

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
