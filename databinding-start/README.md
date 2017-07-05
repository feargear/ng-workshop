# Data binding

In angular we often want to bind certain things from the template to something in the typescript class. You can see data binding
in almost all angular apps and it's very useful. There are few different ways to 'bind' data to the code from the template.

## String interpolation

String interpolation is one-way binding from the data source to the template.

String interpolation is depicted with double curly brackets <code>{{ expression }}</code>

Template expressions are very similar to javascript expressions, but some javascript operations can't be used.

When using string interpolation, angular first evaluates the expression inside and produces a string for the template.

## Property binding

Property binding is also one-way binding from the data source to the template.

Property binding is depicted with the square brackets and assignment <code>[target]='expression'</code> or the canonical form: <code>bind-target='expression'</code>.

Example: set the src property of an image DOM object
```html
<img [src]='expression' />
<!-- Or -->
<img bind-src='expression' />
```

When should I use property binding instead of string interpolation? When setting a non-string target property. Example:
```html
<!-- this does not work if animal is not a string -->
<app-animal animal='{{ selectedAnimal }}'></app-animal>
<!-- this is the right way, assuming the selectedAnimal in the expression is defined somewhere -->
<app-animal [animal]='selectedAnimal'></animal>
```
Note that property binding requires that the property that is accessed has a special decorator <code>@Input(?alias:string)</code>
```typescript
@Input() animal: Animal;
// Or if we want to bind to an alias, we can use
@Input('myAnimal') animal: Animal;
```
Property binding and string interpolation should never set anything in the typescript class, only read. Directly setting properties is prevented by angular, but if you call a method angular can not prevent setting properties from within that method.

## Event binding

Event binding is one-way binding the other way, from the template to the typescript class.

Event binding is depicted with either brackets <code>(target)="statement"</code> around the event or the canonical <code>on-target="statement"</code>. Typical use case:
```html
<button (click)="doSomething()">Do something</button>
```
We bind the 'click' event of the button to execute a **statement**. Statements are also template expressions, but they **are allowed** set properties and have other side effects.

We can also use this syntax in our own components
```html
<app-example (someEvent)="doSomethingHere($event)"></app-example>
```
Note that event binding requires that the event property that is accessed has a special decorator <code>@Output(?alias:string)</code>
```typescript
@Output() someEvent = new EventEmitter<void>
// Or if we want to bind to an alias, we can use
@Output('myEvent') someEvent = new EventEmitter<void>
``` 

Now the component that contains this app-example component can react when app-example emits an event through an EventEmitter called 'someEvent'. Events
can include a data object $event that can be accessed after the event has been caught.

## Two-way binding

Two way binding is depicted with the **banana box** syntax <code>[(target)]="someProperty"</code>. Where the square brackets represent a property bind, and the round brackets represent an event bind. The canonical way for this syntax is <code>bindon-target="someProperty"</code>.

When using two-way binding angular does something special behind the scenes. It binds to the target property normally through property binding, but
it also binds to an EventEmitter called targetChange.
```typescript
@Input() target: number;
@Output() targetChange = new EventEmitter<number>();
```

Two way binding syntax is actually just a shortcut, example:
```html
<app-example [(exampleProperty)]="parentProperty"></app-example>
<!-- behind the scenes angular does following -->
<app-example [exampleProperty]="parentProperty" (examplePropertyChange)="parentProperty=$event"></app-example>
```