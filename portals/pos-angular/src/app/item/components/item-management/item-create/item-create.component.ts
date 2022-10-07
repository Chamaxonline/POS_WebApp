import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  
  customerFrom: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
    
  //   this.customerFrom = this.formBuilder.group({
  //     customerId: [0],
  //     fname: ['', Validators.required],
  //     lname: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  //     addressLine1: ['', Validators.required],
  //     addressLine2: ['LK', Validators.required],
  //     addressLine3: ['IO'],
  //     mobileNumber: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //     active: [true, Validators.required],
  //     ipAddress: ['192'],
  //     customerGroupId: [0],
   }
  closeModal(){

  }
}
