


import {Component, OnInit, Optional} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { BizDomainService } from "../services/bizdomain.service"
import { BizDomain } from "../common/bizdomain"

import { Media } from "../common/media";

// import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

import 'rxjs/add/operator/switchMap';


require('./detail.component.less');


@Component({
    template: require('./detail.component.html'),
    // styles: [require('./home.component.less')],
      providers: [BizDomainService]
})


export class DetailComponent implements OnInit {


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: BizDomainService
    ) {}

    bizDomain: BizDomain;
    media: Media;

   ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.service.getBizDomain(+params['id']))
        .subscribe((bizDomain) => {
            this.bizDomain = bizDomain;
            this.bizDomain.media = new Media(bizDomain.media);
        });
    }

}
