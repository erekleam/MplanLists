import { Component,Injectable } from '@angular/core';
import { FormService } from '../../services/form.service';
import { ModalService } from 'src/app/modals/modal.service';

@Component({
  selector: 'app-payer-form',
  templateUrl: './payer-form.component.html',
  styleUrls: ['./payer-form.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class PayerFormComponent {
  
  constructor(
   // public dictionary: MplanDictionaryService,
    public form: FormService,
    public ModalService: ModalService
  )
  {}
}
