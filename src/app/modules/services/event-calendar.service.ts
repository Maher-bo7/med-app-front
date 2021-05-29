import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventCalendarService {
  constructor(private http :HttpClient,) { }
  getEvents() {
    return this.http.get('')
                .toPromise()
                .then(res => <any[]> res.json().data)
                .then(data => { return data; });
}


}
