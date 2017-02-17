import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';


// services
import { WindowRef } from './windowRef.service';


@Directive({ selector: '[sgBackgroundFixed]' })

export class BackgroundFixedDirective {
    
    backgroundPosY: number;
    
    count:number;

    image: any;

    computedDimension: any;

    scrollRatio: number;

    renderer: Renderer;

    scrollYPrev: number
    
    // windowRef: WindowRef;


    constructor(private el: ElementRef, renderer: Renderer, private windowRef: WindowRef) {
        
        this.count = 0;

        this.backgroundPosY = undefined;

        this.scrollRatio = 5;

        this.scrollYPrev = 0;

        this.computedDimension = {
                        
            height:{
                px: 0
            },
            width: {
                px: 0
            }
        };

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


        if (event.currentTarget.scrollY > this.scrollYPrev) {
            
            if (this.count % this.scrollRatio ===0) {
                
                this.backgroundPosY++;
                
            }
            else return;
            
            // this.backgroundPosY = (this.count % 3 === 0) ? this.backgroundPosY-- : this.backgroundPosY;

        }
        else if (event.currentTarget.scrollY < this.scrollYPrev) {

            if (this.count % this.scrollRatio === 0) {
             
                this.backgroundPosY--;
            }
            else return;
            
            // this.backgroundPosY = (this.count % 3 === 0) ? this.backgroundPosY++ : this.backgroundPosY;

        }


        // ensure we dont scroll image out of container
        // if ( (Math.abs(this.backgroundPosY) + boundingClientRect.height)  > this.computedDimension.height.px ) return;        

        // do something meaningful with it
        // console.log('window scroll');
        // debugger;
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

       
        this.image = new Image();

        // this.image.onload = function() {
        this.image.onload = () => {
            debugger;

            
            this.el.nativeElement.style.backgroundImage = 'url("'+this.image.src+'")';

            let aspectRatio = this.image.width/this.image.height;
                
            let clientRect = this.el.nativeElement.getBoundingClientRect();
            
            //  if (clientRect.width > clientRect.height) {

            //  }
            
            
            let computedStyles = getComputedStyle(this.el.nativeElement);
            
            let bgSize = computedStyles.getPropertyValue("background-size");
            let bgSizeX = 'auto';
            let bgSizeY = 'auto';
            
            if (bgSize.includes(' ')) {
                 let bgSizeAr = bgSize.split(' ');
                 bgSizeX = bgSizeAr[0];
                 bgSizeY = bgSizeAr[1]; 
                 
            }
            else if (bgSize === 'cover') {
                
                let coverRatio = clientRect.width/clientRect.height;
                let scale = undefined;

                /* Step 2 - Work out which ratio is greater */
                if (aspectRatio >= coverRatio) {
                    
                    /* The Height is our constant */
                    this.computedDimension.height.px = clientRect.height;
                    scale = (this.computedDimension.height.px / this.image.height);
                    this.computedDimension.width.px = this.image.width * scale;
                
                } else {
                    
                    /* The Width is our constant */
                    this.computedDimension.width.px = clientRect.width;
                    scale = (this.computedDimension.width.px / this.image.width);
                    this.computedDimension.height.px = this.image.height * scale;
                }
            }
            else {
                 bgSizeX = bgSize;
                 
            }



            // if background-image size is based on % of container's width 
            //   the height is auto (keep aspect ratio)
            if (bgSizeX.endsWith('%') && bgSizeY==='auto' ) {
                
                // calculate how
                this.computedDimension.width.px = (clientRect.width * (parseInt(bgSizeX) / 100))

                this.computedDimension.height.px = this.computedDimension.width.px / aspectRatio;

            }
            else if (bgSizeX.endsWith('px') && bgSizeY==='auto' ) {

                // calculate how
                this.computedDimension.width.px = parseInt(bgSizeX);

                this.computedDimension.height.px = this.computedDimension.width.px / aspectRatio;

            }

              
            let bpY = computedStyles.getPropertyValue("background-position-y");

            // handle percentages
            if (bpY.endsWith('%')) {
                
                this.backgroundPosY = (clientRect.height - this.computedDimension.height.px) * (parseInt(bpY) / 100) ;
            }
            else if (bpY.endsWith('px')) {
                
                this.backgroundPosY = parseInt(bpY);
            }

            // code here to use the dimensions

        }

        // debugger;

        this.image.src = this.imageSrc;

        // var startPos = ((this.el.nativeElement.getBoundingClientRect().height/2)*-1);
        
        // let startPos = (((this.windowRef.nativeWindow.innerHeight/2)/this.scrollRatio) * -1); //-100;
        
        // startPos = ((this.el.nativeElement.getBoundingClientRect().height/2)*-1);

        // startPos = ((this.windowRef.nativeWindow.innerHeight/2) * -1);

        // startPos = 0;

        // this.backgroundPosY = ((this.el.nativeElement.getBoundingClientRect().top*-1));

        // this.windowRef.nativeWindow.screen.orientation;
        // this.el.nativeElement.style["background-size"] = "auto 100vh"

        // let bpY = getComputedStyle(this.el.nativeElement).getPropertyValue("background-position-y");

       
        // this.backgroundPosY = startPos;




    }

}