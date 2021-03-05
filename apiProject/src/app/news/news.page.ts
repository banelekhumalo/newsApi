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
    .getData('everything?q=apple&from=2021-03-04&to=2022-03-02&sortBy=popularity')
    .subscribe(data => {
        console.log(data);
        this.data = data;
        //everything?q=tesla&from=2021-02-03&sortBy=publishedAt
      }
    )
  }
  onGoToNewsSinglePage(article)
  {
    this.izindabaService.currentArticle = article;
    this.router.navigate(['./news-single']);
  }

}
