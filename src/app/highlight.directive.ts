import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input("highlight") highlightColor: string;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(null);
  }


  @HostBinding('style.color') borderColor: string;

  setBorderColor(colorName: string) {
    this.borderColor = colorName;
  }
}
