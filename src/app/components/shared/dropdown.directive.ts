import { Directive, HostBinding, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;
  //@HostBinding('attr.aria-expanded') buttonDropDownClass: string = 'true';

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  @HostListener('click') toggle() {
    this.isOpen = !this.isOpen;
  }

}
