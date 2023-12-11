import { Component,OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ActivatedRoute } from '@angular/router';
import { FormService } from './services/form.service';
import { MplanDictionaryService } from './services/mplan-dictionary.service';
@Component({
  selector: 'app-mplan-main',
  templateUrl: './mplan-main.component.html',
  styleUrls: ['./mplan-main.component.scss']
})
export class MplanMainComponent {
  @ViewChild('tabset', { static: false }) public staticTabs: TabsetComponent;
  public MplanId: number;


  constructor(
    public form: FormService,
    private readonly route: ActivatedRoute,
    private title : Title,
    public dictionary : MplanDictionaryService,
  ) { }

  public ngOnInit(): void {
    this.title.setTitle('MPLAN');
    this.MplanId = +this.route.snapshot.paramMap.get('id') || 0;
   
      // this.form.MplanModels.HeaderId = this.MplanId;
      this.form.getFullMplanOperation(+this.MplanId);
    
    // console.log(this.MplanId);

  }
}
