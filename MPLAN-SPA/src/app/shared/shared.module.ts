import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { PadZerosDirective } from './directives/pad-zeros.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { CodeNamesPipe } from './pipes/code-names.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [DateAgoPipe, OnlyNumbersDirective, PadZerosDirective, FilterPipe, SafeHtmlPipe,CodeNamesPipe, ContextMenuComponent],
    imports: [CommonModule],
    exports: [DateAgoPipe, OnlyNumbersDirective, PadZerosDirective, FilterPipe, SafeHtmlPipe, CodeNamesPipe,CommonModule,TranslateModule, ContextMenuComponent],
})
export class SharedModule {}
