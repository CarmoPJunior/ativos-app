# Ativos - Frontend

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

## npm install

## Iniciando o projeto

> ng new frontend --routing --style=scss -S

#### Verifica se tem libs desatualizadas
> ng update
#### Atualiza as libs
> ng update @angular/cli @angular/core @angular/material @angular/cdk

## Libs instaladas
> ng add @angular/material
> ng add @ionic/angular
> ng add ng2-charts



## Running 

> ng start
ou
> npm start

### Comandos usados

> ng g c components/footer
> ng g c components/header

> ng g m ativos --route ativos --module app.module
> ng g m dividendos --route dividendos --module app.module
> ng g m page-test --route page-test --module app.module

> ng g c ativos/containers/ativos
> ng g c ativos/components/ativos-list

> ng g c dividendos/containers/dividendos
> ng g c dividendos/components/dividendos-list
> ng g c dividendos/components/dividendos-chart-bar
> ng g c dividendos/components/dividendos-total-pie-chart

> ng g m shared --routing
> ng g m shared/app-material
> ng g c shared/components/error-dialog --module shared

> ng g s ativos/services/ativos

> ng g s dividendos/services/dividendos


## REFERÊNCIAS

> ng2-charts: https://valor-software.com/ng2-charts
> typescriptlang: https://www.typescriptlang.org/pt/


