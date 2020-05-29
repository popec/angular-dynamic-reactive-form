import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Cmp2Component} from '../cmp2/cmp2.component';
import {Cmp1Component} from '../cmp1/cmp1.component';

@Component({
  selector: 'app-sample-editor',
  templateUrl: './sample-editor.component.html'
})
export class SampleEditorComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc;
  @Input() form: FormGroup;
  @Input() set source(value: string) {
    this.loadComponent(value);
  }

  constructor(private cfr: ComponentFactoryResolver) {}

  private loadComponent(value) {
    if (!this.vc) {
      return;
    }

    const cmp = (value === 'test') ? Cmp2Component : Cmp1Component;
    const componentFactory = this.cfr.resolveComponentFactory(cmp);
    this.vc.clear();

    const componentRef = this.vc.createComponent(componentFactory);
    componentRef.instance.parentForm = this.form;
  }
}
