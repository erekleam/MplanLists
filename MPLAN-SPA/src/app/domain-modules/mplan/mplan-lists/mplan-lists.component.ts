import { Component,OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ListAllService } from './services/list-all.service';
import { ListAllFormService } from './services/list-all-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mplan-lists',
  templateUrl: './mplan-lists.component.html',
  styleUrls: ['./mplan-lists.component.scss']
})
export class MplanListsComponent implements OnInit {
  public headerId: number;

  constructor(
    private title : Title,
    private listService: ListAllService,
    public listForm: ListAllFormService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.headerId = +this.route.snapshot.paramMap.get('id') || 0;
    this.title.setTitle('List');

  }

}
