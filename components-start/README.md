# Components

Components are the most basic building blocks of Angular apps.

Components must provide some metadata with the <code>@Component()</code> decorator.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example', // CSS selector, can be attribute, element, class selector, etc...
  templateUrl: './example.component.html', // Either templateUrl or template has to be present
  styleUrls: ['./example.component.css'] // Optional
})
export class ExampleComponent {
}
```

You can then use this component in the html
```html
<app-example></app-example>
<!-- Or if selector is an attribute [app-example] selector -->
<div app-example></div>
<!-- Or a class .app-example selector... -->
<div class="app-example"></div>
```

Components have to be declared within an angular module decorator <code>NgModule()</code> before they can be used in a project. Declaring the component 
here is enough, developers can then use the component anywhere in the module. So if we declare ListComponent, HomeComponent and EditComponent for example,
we can use all of them from within each other if we wanted to.

```typescript
@NgModule({
  declarations: [
    ExampleComponent // Declare that our component can be used within this module
  ],
  imports: [
    BrowserModule // More about these later
  ],
  providers: [], // More about these later
})
export class ExampleModule { }
```

Components can and should be nested within each other, so developers should look to build structures like this (example taken from a udemy angular course):
- AppComponent
  - RecipesComponent
    - RecipeListComponent
      - RecipeListItemComponent
    - RecipeDetailComponent
    - RecipeEditComponent
  - ShoppingListComponent
    - ShoppingListEditComponent
    - ShoppingListItemComponent

Components are generally named componentname.component.html/*.ts/*.css. Angular cli does this for us if we use it to generate our components, for example: <code>ng generate component new</code> will generate a component named NewComponent in the app root folder. It will also do all the necessary
declarations and imports so that the component works right away.

Components make angular apps really modular, so in the end your <code>app.component.html</code> might look something like this:

```html
<app-header></app-header>
<app-sidebar></app-sidebar>
<router-outlet></router-outlet> <!-- Not important right now -->
<app-footer></app-footer>
```