import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';


// services
import { WindowRef } from './windowRef.service';


@Directive({ selector: '[sgBackgroundFixed]' })

export class BackgroundFixedDirective {

    
    backgroundPosY: number;
    
    count:number;

    image: any;

    scrollRatio: number;

    renderer: Renderer;

    scrollYPrev: number
    
    // windowRef: WindowRef;


    constructor(private el: ElementRef, renderer: Renderer, private windowRef: WindowRef) {
        
        this.count = 0;

        this.backgroundPosY = 0;

        this.scrollRatio = 5;

        this.scrollYPrev = 0;

        // We cache the function "listenGlobal" returns
        // this.globalListenFunc = renderer.listenGlobal('window', 'scroll', (evt:any) => { 
            
        //     console.log('scroll'); 
            
        //     debugger;

        //     console.log(el.nativeElement.scrollY);

        //     // .css('background-position', 'left ' + ((scrolledY)) + 'px');

        //     el.nativeElement.style["background-position"] = 'left '+ evt.currentTarget.scrollY;




        // });
    }


    @Input('sgBackgroundFixed') imageSrc: string;


    @HostListener('window:scroll', ['$event'])
    onScroll(event:any) {
        
        let boundingClientRect = this.el.nativeElement.getBoundingClientRect();


        if ( !( (boundingClientRect.top < event.currentTarget.innerHeight) && (boundingClientRect.bottom >= 0) ) ) return;
        
        this.count++;

        // var inc;

        if (event.currentTarget.scrollY > this.scrollYPrev) {
            
            if (this.count % this.scrollRatio ===0) this.backgroundPosY++;
            else return;
            
            // this.backgroundPosY = (this.count % 3 === 0) ? this.backgroundPosY-- : this.backgroundPosY;

        }
        else if (event.currentTarget.scrollY < this.scrollYPrev) {

            if (this.count % this.scrollRatio === 0) this.backgroundPosY--;
            else return;
            
            // this.backgroundPosY = (this.count % 3 === 0) ? this.backgroundPosY++ : this.backgroundPosY;

        }

        // do something meaningful with it
        // console.log('window scroll');
        debugger;
        //this.el.nativeElement.getBoundingClientRect().top
        // event.currentTarget.scrollY
        
        
        // this.backgroundPosY = !this.backgroundPosY ? ((this.el.nativeElement.getBoundingClientRect().top*-1)) : this.backgroundPosY;

        // if ( (boundingClientRect.bottom <= (event.currentTarget.scrollY + event.currentTarget.screen.height)) && (boundingClientRect.top >= event.currentTarget.scrollY)) {

        // if ( (boundingClientRect.top >= 0) && (boundingClientRect.bottom <= event.currentTarget.innerHeight) ) {
            //((event.currentTarget.scrollY*-1)+this.el.nativeElement.getBoundingClientRect().top)
            
            

                // event.currentTarget.scrollY
                // this.backgroundPosY = ((this.el.nativeElement.getBoundingClientRect().top*-1));
                // this.backgroundPosY = ((event.currentTarget.scrollY*-1)+this.el.nativeElement.getBoundingClientRect().top);
                // this.backgroundPosY = (((this.el.nativeElement.getBoundingClientRect().top)*-1));
                
            
                console.log(this.backgroundPosY +":"+event.currentTarget.scrollY+":"+this.scrollYPrev);

                this.el.nativeElement.style["background-position-y"] = this.backgroundPosY + 'px';
                
            // }
            

        // }
        
        this.scrollYPrev = event.currentTarget.scrollY


    }


    ngOnDestroy() {
        // We execute functions to remove the respectives listeners

        // Removs "listenGlobal" listener
        // this.globalListenFunc();
    }

    ngOnInit() {

        debugger;

        this.image = new Image();

        this.image.onload = function() {
            var height = this.image.height;
            var width = this.image.width;

            // code here to use the dimensions

            debugger;
        }

        this.image.src = this.imageSrc;

        // var startPos = ((this.el.nativeElement.getBoundingClientRect().height/2)*-1);
        
        let startPos = (((this.windowRef.nativeWindow.innerHeight/2)/this.scrollRatio) * -1); //-100;
        
        // startPos = ((this.el.nativeElement.getBoundingClientRect().height/2)*-1);

        // startPos = ((this.windowRef.nativeWindow.innerHeight/2) * -1);

        // this.backgroundPosY = ((this.el.nativeElement.getBoundingClientRect().top*-1));

        // this.windowRef.nativeWindow.screen.orientation;
        // this.el.nativeElement.style["background-size"] = "auto 100vh"


        this.backgroundPosY = startPos;




    }

}