import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  constructor(
    public form: FormService
  )
  {}
}
