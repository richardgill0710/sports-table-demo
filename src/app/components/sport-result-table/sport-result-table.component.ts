import { Component, Input, AfterViewInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnNames, ColumnToDisplay, DefaultSortKey } from 'src/app/constants/table';
import { SportResult } from 'src/app/model/sport-result';

@Component({
  selector: 'app-sport-result-table',
  templateUrl: './sport-result-table.component.html',
  styleUrls: ['./sport-result-table.component.css'],
})
export class SportResultTableComponent<T extends SportResult = SportResult> implements AfterViewInit, OnChanges {
  @Input() data: T[] = [];
  @Input() columns: string[] = ColumnToDisplay['Default'];

  defaultSort: string = DefaultSortKey;
  defaultSortDirection: 'asc' | 'desc' = 'desc';
  columnNames = ColumnNames;

  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatSort, { static: false }) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (row: T, columnName: string): string => {
      const columnValue = row[columnName as keyof T] as string;
      return columnValue;
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].previousValue !== changes['data'].currentValue) {
      this.dataSource.data = this.data;
    }
  }
}
