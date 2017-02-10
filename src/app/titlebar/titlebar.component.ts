


import {Component, OnInit, Optional} from '@angular/core';
import {Router} from '@angular/router';

// import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

require('./titlebar.component.less');


@Component({
    
    selector: 'titlebar',
    
    template: require('./titlebar.component.html'),
    // styles: [require('./home.component.less')],
})


export class TitlebarComponent implements OnInit {


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
