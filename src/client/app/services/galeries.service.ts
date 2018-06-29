import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class GaleriesService {

  constructor(
    private http:Http
  ) { }

  public getGalery(id) {
    const url = `/api/galeries/one/${id}`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error) => Observable.throw(error || 'Server error'));
  }
}
