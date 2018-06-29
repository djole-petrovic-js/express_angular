import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit {
  private form:FormGroup
  private Message:string;

  constructor(
    private formBuilder:FormBuilder,
    private contactService:ContactService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      message:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(50)])]
    });
  }

  private onSubmit():void {
    if ( !this.form.valid ) {
      return alert('Please enter all fields!');
    }

    this.contactService.insertContact({
      firstName:this.form.get('firstName').value,
      lastName:this.form.get('lastName').value,
      email:this.form.get('email').value,
      message:this.form.get('message').value,
    }).subscribe((res) => {
      this.Message = 'Your message is successfully sent!';

      setTimeout(() => this.Message = '',3000);

      this.createForm();
    },(err) => {
      console.log(err);
    })
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }
}
