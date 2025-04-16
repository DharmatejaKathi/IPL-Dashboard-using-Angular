import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamList } from '../Component/team-list-interface';

@Injectable({
  providedIn: 'root',
})
export class ListDetailsService {
  apiURL = 'https://apis.ccbp.in/ipl';
  constructor(private http: HttpClient) {}

  getListDataFromAPI() {
    return this.http.get(this.apiURL);
  }
  getListData(id: string) {
    return this.http.get(this.apiURL + '/' + id);
  }
}
