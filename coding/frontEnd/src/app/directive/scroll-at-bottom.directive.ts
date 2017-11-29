import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[enbScrollAtBottom]'
})
export class ScrollAtBottomDirective {
  @HostListener("window:scroll", [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log("At the bottom");
      }
  }
  constructor() { }

}
