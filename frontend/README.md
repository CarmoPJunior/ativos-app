# Ativos - Frontend

# Objetivo

---

## Executar o Build do projeto

> ng build

## Executar  unit tests

> ng test

## Executar end-to-end tests

> ng e2e

## Executar o Lint

> npm run lint

## Instalar as dependências do projeto

> npm install

## Executar o projeto em desenvolvimento

> ng server
  ou
> npm start

---

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
> npm i tslint --save-dev
> ng add @angular-eslint/schematics

## Comandos usados

### Componentes e Pages

> ng g c components/footer
> ng g c components/header
> ng g c components/menu
> ng g c components/error-dialog --module shared
> ng g c components/load-spinner --module shared
> ng g c components/load-spinner-card --module shared

> ng g m pages/home --route home --module app.module
> ng g m pages/dividendos --route dividendos --module app.module
> ng g m pages/vendas --route vendas --module app.module
> ng g m pages/ativos --route ativos --module app.module

> ng g c pages/dividendos/containers/dividendos
> ng g c pages/dividendos/components/dividendos-list
> ng g c pages/dividendos/components/dividendos-chart-bar
> ng g c pages/dividendos/components/dividendos-total-pie-chart

> ng g c pages/vendas/containers/vendas
> ng g c pages/vendas/components/vendas-list
> ng g c pages/vendas/components/vendas-chart-bar

> ng g c pages/ativos/containers/ativos
> ng g c pages/ativos/components/ativos-list
> ng g c pages/ativos/components/ativos-chart-bar

### Serviçes:

> ng g s services/ativos
> ng g s services/dividendos
> ng g s services/vendas

### Componentes compartilhados

> ng g m shared --routing
> ng g m shared/app-material
> ng g pipe shared/pipes/mes-abreviado --module shared


---

# REFERÊNCIAS

> Angular Docs: <https://angular.io/docs>
> Material Theme Docs: <https://material.angular.io/guide/theming>
> ng2-charts: <https://valor-software.com/ng2-charts>
> Typescriptlang: <https://www.typescriptlang.org/pt/>
> <https://www.ideas2it.com/blogs/angular-development-best-practices/>

## Code scaffolding

> Run 
> > `ng generate component component-name` 
> to generate a new component. You can also use 
> > `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Pendências
- adicionar fonte a pasta assets
- verificar como colocar variavel dinâmica sem precisar copiar arquivo env-sample.js
- verificar como colocar variável compartilhada no docker compose
- criar componente card genérico
- criar componente list genérico
- criar componete status label genérico
- implementar order by na lista
- criar docker file com stages
