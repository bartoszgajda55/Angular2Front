import { Component, OnInit } from '@angular/core';
import { Article } from '../../services/article';
import { ArticleService } from '../../services/article.service';

@Component({
    selector: 'articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    articles: Article[];

    constructor(private articleService: ArticleService) { }

    getArticles() {
        this.articleService.getArticles().subscribe(articles => this.articles = articles);
    }

    ngOnInit() { 
        this.getArticles();
    }
}