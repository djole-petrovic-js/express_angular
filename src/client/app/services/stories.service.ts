import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StoriesService {
  constructor(
    private http:Http
  ) { }

  public getStories(params?) {
    let query = ``;

    if ( params)  {
      query += '?';

      const queryParams = [];

      if ( params.cName ) {
        queryParams.push('cName=' + params.cName );
      }

      if ( params.id ) {
        queryParams.push('id=' + params.id);
      }

      query += queryParams.join('&');
    }

    return this.http.get(`/api/stories/get${query}`)
      .map(res => res.json())
      .catch((error) => Observable.throw(error || 'Server error'));
  }

  public getStoriesPagination(params) {
    const url = `/api/stories/getStoriesPagination?name=${params.name}&limit=${params.limit}&offset=${params.offset}`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error) => Observable.throw(error || 'Server error'));
  }

  public getStory(id) {
    const url = `/api/stories/one/${id}`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error) => Observable.throw(error || 'Server error'));
  }
}
