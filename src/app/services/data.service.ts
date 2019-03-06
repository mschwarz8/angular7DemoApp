import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDocuments() {
    return {
      documents:
        [
          {
            id: 1,
            firstName: 'Alfred',
            lastName: 'Aalborg',
            openClaim: true,
            url: 'http://download.document.alfred:8080'
          },
          {
            id: 2,
            firstName: 'Ben',
            lastName: 'Berlin',
            openClaim: true,
            url: 'http://download.document.ben:8080'
          },
          {
            id: 3,
            firstName: 'Caroline',
            lastName: 'Chemnitz',
            openClaim: true,
            url: 'http://download.document.caroline:8080'
          },
          {
            id: 4,
            firstName: 'Dirk',
            lastName: 'Düsseldorf',
            openClaim: true,
            url: 'http://download.document.dirk:8080'
          }
        ]
    };
    // this.http.get('https://regres.in/api/users');
  }
}
