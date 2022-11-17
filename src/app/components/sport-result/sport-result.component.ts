import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { SportTitles } from 'src/app/constants/constants';
import { SportType } from 'src/app/constants/sport-type';
import { ColumnToDisplay } from 'src/app/constants/table';
import { SportResult } from 'src/app/model/sport-result';
import { SportResultService } from 'src/app/services/sport-result/sport-result.service';

@Component({
  selector: 'app-sport-result',
  templateUrl: './sport-result.component.html',
  styleUrls: ['./sport-result.component.css'],
})
export class SportResultComponent implements OnInit {
  sportTypeSelect = Object.values(SportType).map(value => ({ label: SportTitles[value], value }));
  sportType: SportType = SportType.FOOTBALL;

  searchText: string = '';

  loading: boolean = true;
  tableData: SportResult[] = [];
  tableColumns: string[] = ColumnToDisplay[SportType.FOOTBALL];

  constructor(private sportResultService: SportResultService) {}

  getResult() {
    this.loading = true;
    this.sportResultService.getSportResults(this.sportType, this.searchText).subscribe(res => {
      this.tableData = res || [];
      this.loading = false;
    });
  }

  onChangeSportType(change: MatSelectChange) {
    this.sportType = change.value;
    this.tableColumns = ColumnToDisplay[this.sportType];
    this.tableData = [];
    this.getResult();
  }

  onChangeSearchText(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
    this.getResult();
  }

  ngOnInit(): void {
    this.getResult();
  }
}
