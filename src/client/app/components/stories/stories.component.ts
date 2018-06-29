import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../services/stories.service';
import { ParagraphsService } from '../../services/paragraphs.service';
import { transition,trigger,style,animate } from '@angular/animations';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers:[StoriesService,ParagraphsService],
  animations:[
    trigger('animate',[
      transition(':enter',[
        style({ transform:'translateY(+100px)' }),
        animate(700)
      ])
    ])
  ]
})
export class StoriesComponent implements OnInit {
  private story;

  constructor(
    private route:ActivatedRoute,
    private storiesService:StoriesService,
    private paragraphsService:ParagraphsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.storiesService.getStory(params.id)
        .subscribe((story) => {

          this.paragraphsService.getParagraphs(params.id)
            .subscribe((res) => {
              story.story.paragraphs = res;

              this.story = story.story;

              console.log(this.story);
            },(err) => {
              console.log(err);
            })

        },(err) => {
          console.log(err);
        })
        
    });
  }

}
