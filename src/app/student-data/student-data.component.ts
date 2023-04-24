import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'A', weight: 'CS', symbol: 2020},
  {position: 2, name: 'B', weight: 'Mech', symbol: 2022},
  {position: 3, name: 'C', weight: 'IT', symbol: 2023},
  {position: 4, name: 'D', weight: 'Civil', symbol: 2023},
  {position: 5, name: 'E', weight: 'EC', symbol: 2021},
  {position: 6, name: 'F', weight: 'EEE', symbol: 2022},
  {position: 7, name: 'G', weight: 'Mech', symbol: 2020},
  {position: 8, name: 'H', weight: 'CS', symbol: 2023},
  {position: 9, name: 'I', weight: 'IT', symbol: 2022},
  {position: 10, name: 'J', weight:'EC', symbol: 2022},
  {position: 11, name: 'K', weight: 'CS', symbol: 2023},
  {position: 12, name: 'L', weight: 'Civil', symbol: 2020},
  {position: 13, name: 'M', weight: 'Mech', symbol: 2023},
  {position: 14, name: 'N', weight: 'IT', symbol: 2022},
  {position: 15, name: 'O', weight:'EEE', symbol: 2021},
  {position: 16, name: 'P', weight: 'Mech', symbol:2021},
  {position: 17, name: 'Q', weight: 'CS', symbol: 2022},
  {position: 18, name: 'R', weight: 'EC', symbol: 2020},
  {position: 19, name: 'S', weight: 'Mech', symbol: 2023},
  {position: 20, name: 'T', weight: 'EC', symbol: 2022},
  {position: 21, name: 'U', weight: 'CS', symbol: 2020},
  {position: 22, name: 'V', weight: 'Civil', symbol: 2022},
  {position: 23, name: 'W', weight: 'EEE', symbol: 2021},
  {position: 24, name: 'X', weight: 'CS', symbol: 2021},
  {position: 25, name: 'Y', weight: 'EEE', symbol: 2022},
  {position: 26, name: 'Z', weight: 'Civil', symbol: 2023},
  {position: 27, name: 'A', weight: 'CS', symbol: 2020},
  {position: 28, name: 'B', weight: 'Mech', symbol: 2022},
  {position: 29, name: 'C', weight: 'IT', symbol: 2023},
  {position: 30, name: 'D', weight: 'Civil', symbol: 2023},
  {position: 31, name: 'E', weight: 'EC', symbol: 2021},
  {position: 32, name: 'F', weight: 'EEE', symbol: 2022},
  {position: 33, name: 'G', weight: 'Mech', symbol: 2020},
  {position: 34, name: 'H', weight: 'CS', symbol: 2023},
  {position: 35, name: 'I', weight: 'IT', symbol: 2022},
  {position: 36, name: 'J', weight:'EC', symbol: 2022},
  {position: 37, name: 'K', weight: 'CS', symbol: 2023},
  {position: 38, name: 'L', weight: 'Civil', symbol: 2020},
  {position: 39, name: 'M', weight: 'Mech', symbol: 2023},
  {position: 40, name: 'N', weight: 'IT', symbol: 2022},
  {position: 41, name: 'O', weight:'EEE', symbol: 2021},
  {position: 42, name: 'P', weight: 'Mech', symbol:2021},
  {position: 43, name: 'Q', weight: 'CS', symbol: 2022},
  {position: 44, name: 'R', weight: 'EC', symbol: 2020},
  {position: 45, name: 'S', weight: 'Mech', symbol: 2023},
  {position: 46, name: 'T', weight: 'EC', symbol: 2022},
  {position: 47, name: 'U', weight: 'CS', symbol: 2020},
  {position: 48, name: 'V', weight: 'Civil', symbol: 2022},
  {position: 49, name: 'W', weight: 'EEE', symbol: 2021},
  {position: 50, name: 'X', weight: 'CS', symbol: 2021},
  {position: 51, name: 'Y', weight: 'EEE', symbol: 2022},
  {position: 52, name: 'Z', weight: 'Civil', symbol: 2023},

];
