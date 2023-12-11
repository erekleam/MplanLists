import { Component,OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { Subscription} from 'rxjs';
import { Dictionary } from 'src/app/shared/models/dictionary.model';
import 'bootstrap';
import { DictionaryService } from '../../dictionary.service';
import { ModalService } from '../../modal.service';
import { FormService } from 'src/app/domain-modules/mplan/mplan-main/services/form.service';
@Component({
  selector: 'app-dictionary-modal',
  templateUrl: './dictionary-modal.component.html',
  styleUrls: ['./dictionary-modal.component.scss']
})
export class DictionaryModalComponent implements OnInit, OnDestroy {
    
  public dictionaryName: string = null;
    public filter: string = null;

    public title = 'ცნობარი';

    public pageIndex = 1;
    public pageSize = 10;

    public itemCount = 0;

    public dictionary: Dictionary[] = null;

    public selected: Dictionary = null;
    public selectedRow: number = null;

    public searchTerm: FormControl = new FormControl('');

    private sub$: Subscription[] = [];

    private destroy = true;

    public loader = false;

    constructor(public bsModalRef: BsModalRef, private dictionaryService: DictionaryService, public ModalService: ModalService) {}

    public ngOnInit(): void {
        this.getDictionary();
        this.sub$.push(
            this.bsModalRef.onHide.subscribe(() => {
                if (this.destroy) {
                    this.selected = null;
                    this.selectedRow = null;
                }
            })
        );
    }

    public select(index: number) {
        this.selectedRow = index;
        this.selected = this.dictionary[this.selectedRow];
    }

    public getDictionary() {
        this.loader = true;
        if (this.filter === '') {
            this.filter = '000000000000';
        }
        this.dictionaryService
            .getDictionary(this.dictionaryName, {
                filter: this.filter,
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                search: this.searchTerm.value,
            })
            .subscribe((data) => {
                this.selected = null;
                this.selectedRow = null;
                this.dictionary = data.data;
                this.itemCount = data.itemCount;
            })
            .add(() => {
                this.loader = false;
            });
    }

    public changePage(event: any) {
        this.pageIndex = event.page;
        this.getDictionary();
    }

    public ngOnDestroy(): void {
        this.sub$?.forEach((sub) => {
            sub?.unsubscribe();
        });
    }

    public choose() {
        this.destroy = false;
        this.bsModalRef.hide();
    } 

}
