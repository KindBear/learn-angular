import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';
import { Sport } from 'src/app/models/Sport.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Pagination } from 'src/app/models/Pagination.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Sport> = new MatTableDataSource<Sport>([]);
  displayedColumns: string[] = ['id', 'name'];
  totalItems: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(
    private sportsService: SportsService,
  ) {}

  ngOnInit() {
    this.sportsService.getSports().subscribe(
      (response: Pagination) => {
        if (response) {
          this.dataSource.data = response.data;
          this.totalItems = response.total;
        }
      }
    );
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page => {
      this.sportsService.getSports({ page: page.pageIndex + 1 })
        .subscribe((response) => {
          if (response) {
            this.dataSource.connect().next(response.data);
            this.dataSource.paginator.length = response.total;
          }
        });
    }));
  }
}
