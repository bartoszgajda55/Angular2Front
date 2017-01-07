import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { Article } from './article';

@Injectable()
export class ArticleService {

    constructor(private http: Http) { }
    
    getArticles(): Observable<Article[]> {
        return this.http.get('http://localhost/app/api/articles')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.throw(error);
    }
}