import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
    selector: '[poolMouseHover]'
})
export class PoolMouseHoverDirective {
    constructor(private el: ElementRef, private render: Renderer) { }

    @HostListener('mouseover') onMouseOver() {
        this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', '#ffc107');
    }

    @HostListener('mouseout') onMouseOut() {
        this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', '');
    }
}