import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface CovidStats {
  name: string;
  type: string;
  confirmed: string;
  recovered: string;
  deaths: string;
  confirmedNewCases: string;
  confirmedNewDeaths: string;
  lastUpdated: string;
}

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient: HttpClient) {
  }

  fetchCovidStats(name: string, inputType: string) {
    console.log('hello');
    if (inputType === 'country') {
      return this.httpClient.get<CovidStats>(
        'http://localhost:8080/getCovidDataByCountry/' + name,
      );
    }
    return this.httpClient.get<CovidStats>(
      'http://localhost:8080/getCovidDataByCityOrState/' + name,
    );
  }
}
