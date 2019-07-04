import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';
import { Sport } from 'src/app/models/Sport.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sports: Sport[];

  constructor(
    private sportsService: SportsService,
  ) {
    this.sportsService.sports.subscribe((sports: Sport[]) => {
      this.sports = sports;
    });
  }

  ngOnInit() {
    this.sportsService.getSports().subscribe();
  }

}
