import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../services/stories.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[StoriesService]
})
export class SearchComponent implements OnInit {
  private stories:any[];
  private count:number[];
  private activePage:number;
  private category:string;

  constructor(
    private route:ActivatedRoute,
    private storiesService:StoriesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const cName = params.name;
      const page = params.page || 1;
      const limit = 2;
      const offset = (page -1) * limit;

      this.activePage = page;
      this.category = cName;

      this.storiesService.getStoriesPagination({
        name:cName,
        limit,
        offset
      }).subscribe((res) => {
        this.stories = res;
      },(err) => {
        console.log(err);
      });

      this.storiesService.getStories({ cName:cName })
        .subscribe((res) => {
          this.count = Array.from(Array(Math.ceil(res.length / limit)).keys()).map(x => x + 1);
        },(err) => {
          console.log(err);
        });
    });
  }

}
