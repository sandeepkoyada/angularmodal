import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content) {

    this.newEmployeeClicked = !this.newEmployeeClicked;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  eopen(editcontent) {

    this.modalService.open(editcontent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  newEmployeeClicked = false;

  employees = [
    
  ];

  color;

  

  ngOnInit() {

  }

  model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  

  myValue;

  editEmployee(editEmployeeInfo) {

    
    this.model2.uname = this.employees[editEmployeeInfo].uname;
    this.model2.fname = this.employees[editEmployeeInfo].fname;
    this.model2.lname = this.employees[editEmployeeInfo].lname;
    this.model2.email = this.employees[editEmployeeInfo].email;
    this.model2.phone = this.employees[editEmployeeInfo].phone;
    
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }







   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }


}