import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriesService {

  constructor(private http:Http) { }

  public getCategories() {
    return this.http.get('/api/categories/get')
      .map(res => res.json())
      .catch((error) => Observable.throw(error || 'Server error'));
  }
}
