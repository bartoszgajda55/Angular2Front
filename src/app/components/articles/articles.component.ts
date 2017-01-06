import { Component, OnInit } from '@angular/core';
import { Article } from '../../services/article';
import { ArticleService } from '../../services/article.service';

@Component({
    selector: 'articles',
    templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
    articles: Article[];

    constructor(private articleService: ArticleService) { }

    getArticles(): void {
        this.articleService.getArticles().then(articles => {this.articles = articles, console.log(this.articles)});
    }

    ngOnInit(): void { 
        this.getArticles();
    }
}