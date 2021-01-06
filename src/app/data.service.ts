import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  search(query) {
    return this.http.get("https://api.stackexchange.com/2.2/search/advanced?pagesize=100&order=desc"+query+"&site=stackoverflow").pipe(map((res: any) => res));
  }
}
