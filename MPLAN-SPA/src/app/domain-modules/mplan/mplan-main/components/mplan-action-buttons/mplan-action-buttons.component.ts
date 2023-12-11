import { Component, Injectable } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-mplan-action-buttons',
  templateUrl: './mplan-action-buttons.component.html',
  styleUrls: ['./mplan-action-buttons.component.scss']
})
@Injectable({
  providedIn: 'root',
})

export class MplanActionButtonsComponent {
  
  constructor(
    public form: FormService
    
  ){}
  
}
