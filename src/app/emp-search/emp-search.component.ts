import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emp } from './emp.model';
import { employeeDetail } from './emp.constant';
import {Router} from '@angular/router'

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent implements OnInit {

  empDetails: emp[] = employeeDetail;
  employee;
  departments = ["Front End Development", "ML Engineering", "Quality Analyst", "Human Resource Management", "Research & Development"];  
  selectedDepartment: string;
  roleTypes = ["Full Time", "Part Time", "Contract"];
  selectedRoleType: string;
  experiences = ["5 Years Above", "4 Years Abov", "3 Years Above", "2 Years Above"];
  selectedExperience: string;
  years = ["2020", "2019", "2018", "2017", "2016", "2015"];
  selectedYearOfJoining: string;
  locations = [ "Bangalore", "New Jersey", "Los Angeles", "Delhi", "Bali"]
  selectedLocation: string;
  teams = ["Product Team", "IDC", "OCBC Singapore", "Radian", "Rustify"];
  selectedTeam: string;



  constructor(private router: Router) { }

  ngOnInit() {
    this.employee = Object.assign([], this.empDetails);
    this.openNav();
  }
  
  openNav() {
    console.log('setting 50');
    console.log(document.getElementById("mySidepanel").style.width);
    document.getElementById("mySidepanel").style.width = "50px";
    console.log(document.getElementById("mySidepanel").style.width);
  }

  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  
  departmentSelected(e){
    this.selectedDepartment = e.target.value;

  }
  roleTypeSelected(e){
    this.selectedRoleType = e.target.value;

  } 
  experienceSelected(e){
    this.selectedExperience = e.target.value;

  }
  yearOfJoiningSelected(e){
    this.selectedYearOfJoining = e.target.value;

  }
  locationSelected(e){
    this.selectedLocation = e.target.value;

  }
  teamSelected(e){
    this.selectedTeam = e.target.value;

  }

  onClearButtonClick(e){
    this.selectedDepartment = null;
    this.selectedRoleType = null;
    this.selectedExperience = null;
    this.selectedYearOfJoining = null;
    this.selectedLocation = null;
    this.selectedTeam = null;
  }

  onSubmitButtonClick(e){
    this.employee = this.employee
                      .filter(item => {return this.selectedExperience.toLowerCase().includes(item["exp"].toLowerCase())})
                      .filter(item => {return item["doj"].toLowerCase() === this.selectedYearOfJoining.toLowerCase()})
                      .filter(item => {return item["location"].toLowerCase() === this.selectedLocation.toLowerCase()})
                      .filter(item => {return item["team"].toLowerCase() === this.selectedTeam.toLowerCase()});

    console.log(this.employee);
    this.router.navigateByUrl('/', { state: { filteredEmpData: this.employee } });
  }
}


