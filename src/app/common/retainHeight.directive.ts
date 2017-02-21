import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';


// services
import { WindowRef } from './windowRef.service';


@Directive({ selector: '[sgRetainHeight]' })

export class RetainHeightDirective {
   
    // origHeightCSS: string;

    constructor(private el: ElementRef, renderer: Renderer, private windowRef: WindowRef) {
        
    }

    
    
    @Input('sgRetainHeight') origHeightCSS: string;


    @HostListener('window:resize', ['$event'])
    onResize(event:any) {
        


        this.setHeight(this.calcHeightInPx(this.origHeightCSS));

    }


    ngOnDestroy() {
        // We execute functions to remove the respectives listeners

        // Removs "listenGlobal" listener
        // this.globalListenFunc();
    }

    ngOnInit() {
        
        // let computedStyles = getComputedStyle(this.el.nativeElement);
            
        // this.origHeightCSS = computedStyles.getPropertyValue("height");


        this.setHeight(this.calcHeightInPx(this.origHeightCSS));        
            
    }

    private calcHeightInPx(cssValue: string): number {

        let height = undefined;

        if (cssValue.endsWith('vh')) {
            height = this.windowRef.nativeWindow.innerHeight * (parseInt(cssValue)/100);
        
        }
        else if (cssValue.endsWith('%')) {
            height = this.el.nativeElement.parentNode.getBoundingClientRect().height * (parseInt(cssValue)/100);
        }
        else {
            
            height = this.el.nativeElement.getBoundingClientRect().height;
        }

        return height;
    }

    private setHeight(height: number): void {

        let styleHeight = height + 'px';
        
        this.el.nativeElement.style.minHeight = styleHeight;    
        this.el.nativeElement.style.height = styleHeight;
        this.el.nativeElement.style.maxHeight = styleHeight;

    }




}