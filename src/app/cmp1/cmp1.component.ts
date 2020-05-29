import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html'
})
export class Cmp1Component implements OnInit {
  @Input() parentForm: FormGroup;
  form = new FormGroup({});

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
    Promise.resolve(null).then(() =>
      this.parentForm.setControl('details', this.form)
    );
  }
}
