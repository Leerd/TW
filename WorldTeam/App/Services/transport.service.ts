import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Injectable() 
export class TransportService {
    constructor(private http: Http) { }

    public postData(url: string, request): Promise<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, JSON.stringify(request), { headers: headers })
                   .map((res: Response) => (res.json()))
                   .toPromise();
    }

    public getData(url): Promise<any> {
        return this.http.get(url).map(res => res.json())
                                 .toPromise();
    }

    public postImg(url: string, eventFile: FileList, id:string): Promise<any> {
        let fileList: FileList = eventFile;

        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('id', file, id);
            formData.append('uploadFile', file, file.name);
            let headers = new Headers()
            let options = new RequestOptions({ headers: headers });
            return this.http.post(url, formData, options)
                       .map(res => res.json())
                       .toPromise();
        }
    }
}