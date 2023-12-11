import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dictionary } from 'src/app/shared/models/dictionary.model';
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {


    public currentPage = 1;
    public pageCount = 10;

    public dictionary: Dictionary[];

    public selected: Dictionary;
    public selectedRow: number;

    public searchTerm = new FormControl('');
    constructor() {}

    public ngOnInit(): void {
        this.GetDictionary();
    }

    public select(index: number) {
        this.selectedRow = index;
        this.selected = this.dictionary[this.selectedRow];
    }

    public GetDictionary() {}
}
