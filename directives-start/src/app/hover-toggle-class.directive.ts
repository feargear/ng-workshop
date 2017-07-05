import { Directive } from '@angular/core';

@Directive({
  selector: '[appHoverToggleStyle]',
  // Bind to the mouseenter and mouseleave on the host
  host: {
    '(mouseenter)': 'onHover($event)',
    '(mouseleave)': 'onHoverOut($event)'
  }
})
export class HoverToggleClassDirective {

  constructor() { }

  onHover(eventData){
    eventData.target.style.backgroundColor = 'lightblue';
    eventData.target.style.cursor = 'pointer';
  }

  onHoverOut(eventData){
    eventData.target.style.backgroundColor = 'transparent';
    eventData.target.style.cursor = 'pointer';
  }

}