import { Component, Injectable, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'src/app/modals/modal.service';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class CountryFormComponent {
  // public packageSubs$: Subscription[] = [];
  
  constructor(
    public form: FormService,
   public ModalService: ModalService
  )
  {
      // this.form.addRow();
      
  }
  
  

}


