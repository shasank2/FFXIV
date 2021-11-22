import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import FF_Jobs from '../FFXIV_API';
import { FormComponent } from '../form/form.component';
import {Jobs} from '../job-interface'

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css']
})
export class CardHolderComponent implements OnInit {

  constructor(public dialog: MatDialog, private snackBar:MatSnackBar) { }

  Jobs:Jobs[] = FF_Jobs;
  filterJobs:Jobs[]=[];
  searchError:boolean=false
  
  //Function for filtering items by using search bar
  searchedText(event:any){
    this.filterJobs = []
    this.filterJobs=(this.Jobs.filter((elem)=>elem.JobName.toUpperCase() == event.toUpperCase()))
    if (this.filterJobs.length==0) {        //IF list is empty open snack bar
      this.snackBar.open("Job not found","", {duration: 2000}); // Parameters of snackbar (message,action button,duration:Object)
    }
  }

  selectedOrigin(event:any){
    this.filterJobs=(this.Jobs.filter((elem)=>elem.Origin == event.value))
    console.log(event.value)
  }

  selectedRole(event:any){
    this.filterJobs=(this.Jobs.filter((elem)=>elem.Role == event.value))
    console.log(event.value)
  }

  displayAddItem(){
    const dialogRef = this.dialog.open(FormComponent)
  }
  
  ngOnInit(): void {    //Onmount on react
  }

}
