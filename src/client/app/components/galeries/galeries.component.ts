import { Component, OnInit } from '@angular/core';
import { GaleriesService } from '../../services/galeries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galeries',
  templateUrl: './galeries.component.html',
  styleUrls: ['./galeries.component.css'],
  providers:[GaleriesService]
})
export class GaleriesComponent implements OnInit {
  private images:any[];
  
  constructor(
    private galeryService:GaleriesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.galeryService.getGalery(params.id)
        .subscribe((res) => {
          this.images = res;
        },(err) => {
          console.log(err);
        })
    });
  }

}
