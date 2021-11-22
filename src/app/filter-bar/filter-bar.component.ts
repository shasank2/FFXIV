import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import FF_Jobs from '../FFXIV_API';
import { Jobs } from '../job-interface'

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Output() searchedText = new EventEmitter<string>();
  @Output() selectedRole = new EventEmitter<string>();
  @Output() selectedOrigin = new EventEmitter<string>();

  @Input() searchError: boolean = false;

  Jobs: Jobs[] = FF_Jobs
  Origin: String[] = [];
  Role: String[] = [];
  filteredJob:Jobs[] = []

  constructor() {
  }

  //Filtering unique values and assigning it to the dropdown
  Orign_Role_Assignment() {
    this.Origin = [...new Set(this.Jobs.map((element) => { return element.Origin }))]
    this.Role = [...new Set(this.Jobs.map((element) => { return element.Role }))]
  }

  //Handle event for search bar
  handleChange(e: string) {
      this.searchedText.emit(e)
  }

  //Handle event for dropdown of Origin
  handleOriginChange(e: any) {
    this.selectedOrigin.emit(e)
  }

  //Handle event for dropdown of Role
  handleRoleChange(e: any) {
    this.selectedRole.emit(e)
  }

  ngOnInit(): void {
    this.Orign_Role_Assignment()
  }

}
