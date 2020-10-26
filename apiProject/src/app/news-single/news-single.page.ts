import { Component, OnInit } from '@angular/core';
import { IzindabaService } from '../izindaba.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  constructor(private izindazaService: IzindabaService) { }
 article;
  ngOnInit() {
    this.article =this.izindazaService.currentArticle;
    console.log(this.izindazaService.currentArticle);
  }

}
