import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private http: Http) {}

    public getData(url: string) {
        return axios.get(url).then(res => {
           return res.data;
        });
    }
    public updateData(url: string, data) {
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
