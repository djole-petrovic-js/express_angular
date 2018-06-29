import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ParagraphsService {
  constructor(
    private http:Http
  ) { }

  public getParagraphs(id) {
    const url = `/api/paragraphs/get/${id}`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error) => Observable.throw(error || 'Server error'));
  }
}
