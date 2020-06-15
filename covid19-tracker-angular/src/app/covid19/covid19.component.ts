import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CovidService, CovidStats} from '../covid.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  covidStats: CovidStats;
  fetching = false;

  constructor(private http: HttpClient, private covidService: CovidService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.fetching = true;
    this.covidService.fetchCovidStats(value.name, value.inputType)
      .subscribe(response => {
        this.covidStats = response;
        this.fetching = false;
      }, error => {
        this.fetching = false;
      });
  }
}
