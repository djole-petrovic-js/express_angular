import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { StoriesService } from '../../services/stories.service';
import { trigger,transition,style,animate } from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[CategoriesService,StoriesService],
  animations:[trigger('slideIn',[
    transition(':enter',[
      style({ transform:'translateX(-70px)' }),
      animate('0.7s ease-out')
    ])
  ]),trigger('fadeIn',[
    transition(':enter',[
      style({ transform:'translateX(+70px)' }),
      animate('0.7s ease-out')
    ])
  ])]
})
export class IndexComponent implements OnInit {
  private categories:any[] = [];
  private stories:any[] = [];

  constructor(
    private categoriesService:CategoriesService,
    private storiesService:StoriesService
  ) { }

  ngOnInit() {
    $('#slider').nivoSlider({pauseTime: 6000})

    this.categoriesService.getCategories()
      .subscribe((res) => {
        this.categories = res;
      },(err) => {
        console.log(err);
      })

    this.storiesService.getStories()
      .subscribe((res) => {
        this.stories = res;
      },(err) => {
        console.log(err);
      })
  }

}
