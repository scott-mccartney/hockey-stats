import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleID: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.setArticleID(this.route.snapshot.params.articleid);
  }

  setArticleID(id: string): void {
    this.articleID = id;
  }
}
