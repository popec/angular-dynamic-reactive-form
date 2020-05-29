import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html'
})
export class Cmp2Component implements OnInit {
  @Input() parentForm: FormGroup;
  form = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
    });
    Promise.resolve(null).then(() =>
      this.parentForm.setControl('details', this.form)
    );
  }

}
