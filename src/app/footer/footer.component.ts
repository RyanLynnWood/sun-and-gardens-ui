


import {Component, OnInit, Optional} from '@angular/core';
import {Router} from '@angular/router';

// import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

require('./footer.component.less');


@Component({
    
    selector: 'footer',
    
    template: require('./footer.component.html'),
    // styles: [require('./home.component.less')],
})


export class FooterComponent implements OnInit {


    ngOnInit() {
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
