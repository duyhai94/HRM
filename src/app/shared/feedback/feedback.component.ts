import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  dataFeedback: FormGroup;
@Input() buttonFeedbackTitle;
  constructor(
    private fb: FormBuilder,
  ) { 
    this.dataFeedback = this.fb.group({
      title: '',
      content: '',
      status: true,
    });
  }
  ngOnInit() {}
  onSubmit() {
    console.log(this.dataFeedback);
  }

}
