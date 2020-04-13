import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateName } from './name-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  get projectNameControl() {
    return this.projectForm.get('name');
  }

  get emailControl() {
    return this.projectForm.get('email');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required, validateName],
      email: ['', [Validators.required, Validators.email], ],
      status: [this.statuses[0]]
    });
  }

  onSubmitForm() {
    console.log(this.projectForm.value);
  }
}
