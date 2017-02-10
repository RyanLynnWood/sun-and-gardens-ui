
require('./home.component.less');


import {Component, OnInit, Optional} from '@angular/core';
import {Router} from '@angular/router';

import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';


import { BizDomainService } from "../services/bizdomain.service"
import { BizDomain } from "../common/bizdomain"




@Component({
    template: require('./home.component.html'),
    // styles: [require('./home.component.less')],
    
    // pipes: [OrderByPipe], 
    providers: [BizDomainService]
})


export class HomeComponent implements OnInit{

    bizdomains: BizDomain[];
    errorMessage: string;

    constructor (private bizdomainService: BizDomainService) {}


    ngOnInit() {
        this.getBizDomains();
    }

    getBizDomains() {
        this.bizdomainService.getBizDomains()
                     .subscribe(
                       bizdomains => this.bizdomains = bizdomains,
                       error =>  this.errorMessage = <any>error    );
    }


}

// @Component({
//   template: `
//     <p>This is a dialog</p>
//     <p>
//       <label>
//         This is a text box inside of a dialog.
//         <input #dialogInput>
//       </label>
//     </p>
//     <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
//   `,
// })
// export class DialogContent {
//   constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
// }
