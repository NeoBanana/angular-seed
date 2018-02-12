import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "edition-result",
  templateUrl: "./edition-result.component.html",
  styleUrls: ["./edition-result.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditionResultComponent {
  displayedColumns = ["wojewodztwo", "place", "name", "surname", "schoolname"];
  dataSource: MatTableDataSource<UserData>;
  WOJ = ["A", "B", "C"];
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 30; i++) {
      users.push(createNewUser(i));
    }
    // // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.filterPredicate = (Data, Filter: string): boolean => {
      return Data.wojewodztwo.toLowerCase() == Filter;
    };
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + " ";
  const surname = SURNAME[Math.round(Math.random() * (SURNAME.length - 1))];
  const wojewodztwo = WOJ[Math.round(Math.random() * (WOJ.length - 1))];

  return {
    id: id.toString(),
    name: name,
    surname: surname,
    wojewodztwo: wojewodztwo,
    schoolname: "SZKOLA",
    place: "1"
  };
}

/** Constants used to fill up our data base. */
const WOJ = ["A", "B", "C"];
const SURNAME = ["Elo", "Dor", "Bo", "Ser"];
const NAMES = [
  "Maia",
  "Asher",
  "Olivia",
  "Atticus",
  "Amelia",
  "Jack",
  "Charlotte",
  "Theodore",
  "Isla",
  "Oliver",
  "Isabella",
  "Jasper",
  "Cora",
  "Levi",
  "Violet",
  "Arthur",
  "Mia",
  "Thomas",
  "Elizabeth"
];

export interface UserData {
  id: string;
  wojewodztwo: string;
  place: string;
  name: string;
  surname: string;
  schoolname: string;
}
