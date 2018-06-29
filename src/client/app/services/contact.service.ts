import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(
    private http:Http
  ) { }

  public insertContact(body) {
    const h = new Headers();
    h.append('Content-Type','application/json');

    return this.http.post('/api/contact/insert',body)
      .map((res) => res.json())
      .catch((error) => Observable.throw(error || 'Server Error.'));
  }
}
