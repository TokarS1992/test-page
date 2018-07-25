import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { Template } from '../interfaces/template';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    headers: Headers;
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    public getData(url: string) {
        return axios.get(url).then(res => {
           return res.data;
        });
    }
    public updateData(url: string, data) {
        // console.log(this.options);
        return axios({
            method: 'put',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
