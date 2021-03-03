import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IzindabaService } from '../izindaba.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
 data: any;

  constructor(private izindabaService: IzindabaService, private router: Router) { }

  ngOnInit() {
    this.izindabaService
    .getData('everything?q=tesla&from=2021-02-03&sortBy=publishedAt')
    .subscribe(data => {
        console.log(data);
        this.data = data;
      }
    )
  }
  onGoToNewsSinglePage(article)
  {
    this.izindabaService.currentArticle = article;
    this.router.navigate(['./news-single']);
  }

}
