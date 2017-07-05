# Directives

Angular directives are really important part of angular development. A directive something that makes changes in the DOM. Directives have to specify a
selector. Note: Components are actually directives as well, but they have some additional metadata, like the HTML template for example.

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[example]' // Attribute selector
})
export class ExampleDirective {

  constructor() { }

}
```
Now if we pass this directive to an element for example, we can bind to its properties.

Like components, the directive also has to be declared in the parent module so it can be used across the module.

## Built-in directives

Angular has some built in directives, the most useful ones are
- NgClass: Allows dynamic modifications to the 'class' html attribute
- NgStyle: Allows dynamic modifications to the 'style' html attribute
- NgIf: A built in 'if' directive that decides if a element should be visible or not
- NgFor: A built in 'for' directive that iterates through a list of items and shows elements accordingly

```html
<!-- Controls if class1 and class2 should be inserted to the html 'class' attribute or not based on the condition-->
<div [ngClass]="{class1: condition, class2: condition2}"></div>

<!-- Controls the inline styles of an element -->
<div [ngStyle]="{'font-style': condition ? 'italic' : 'normal'}"></div>

<!-- Controls if this element should be visible or not -->
<div *ngIf="condition"></div>

<!-- Iterates through a list and shows elements accordingly -->
<div *ngFor="item of items"></div>
```
Notice the * (asterisk) syntax. This is a special syntax for angular. It tells angular that this directive is used as a structural directive,
so angular knows where this element is supposed to be if it is not rendered for example.

Here too angular has some shortcuts, if the directive has an attribute selector and it has a property with the same name as the selector
of the directive itself, using the directive and binding to the property can be done with <code><div [ngClass]="{class1: foo, ...}"></div></code> which
really means something like <code><div ngClass [ngClass]="{class1: foo, ...}"></div></code>