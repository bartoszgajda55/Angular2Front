import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from './article';

@Injectable()
export class ArticleService {
    private apiUrl = '/articles';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }
    
    getArticles(): Promise<Article[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json().data as Article[])
                        .catch(this.handleError);
    } //TODO fix the http request method

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}