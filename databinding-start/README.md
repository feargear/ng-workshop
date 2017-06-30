# Data binding

In angular we often want to bind certain things from the template to something in the typescript class. You can see data binding
in almost all angular apps and it's very useful. There are few different ways to 'bind' data to the code from the template.

## String interpolation

String interpolation is one-way binding from the data source to the template.

String interpolation is depicted with double curly braces <code>{{ expression }}</code>

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
<app-animal animal='{{ animal }}'></app-animal>
<!-- this is the right way, assuming the animal in the expression is defined somewhere -->
<app-animal [animal]='animal'></animal>
```