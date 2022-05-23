import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { greaterThanValidator } from './custom-validators'
@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss']
})
export class FormarrayComponent implements OnInit {

  public form: FormGroup;
  public contactList: FormArray;
  submitted = false;
  fromValue = 0;
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      contacts: this.fb.array([this.createContact()])
    });
    this.contactList = this.form.get('contacts') as FormArray;
  }
  createContact(): FormGroup {
    return this.fb.group(

      {
        from: [this.fromValue, Validators.required],
        to: [null, Validators.required],
        charge: [null, Validators.required]
      },
      {
        validator: greaterThanValidator("from", "to")
      }
    );
    //);
  }

  addContact() {
    this.submitted = true;
    console.log(this.contactList.value);
    if (this.contactList.invalid == false) {
      let last = this.contactList.value.at(-1)
      console.log(last);
      this.fromValue = last.to;
      this.contactList.push(this.createContact());
    }
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.contactList.removeAt(index);
  }
  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }
  submit() {
    this.submitted = true;

  }


}
