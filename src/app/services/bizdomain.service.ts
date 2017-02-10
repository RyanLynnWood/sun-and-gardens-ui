import { Injectable } from '@angular/core';

import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { BizDomain } from "../common/bizdomain";



@Injectable()

export class BizDomainService {

    private url = 'data/bizdomains.json';  // URL to web API

    constructor (private http: Http) {}

    getBizDomains(): Observable<BizDomain[]> {

        //return Promise.resolve([]);
        return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    getBizDomain(id: number): Observable<BizDomain> {
               
        return this.getBizDomains()
                    .map( bizdomains => {
                        return bizdomains[id];
                    });
    }



    private extractData(res: Response) {
      
        let body = res.json();
        return body.data || body || [];
    }
    
    private handleError (error: Response | any) {
        
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        
        console.error(errMsg);
        
        return Observable.throw(errMsg);
    }

}
