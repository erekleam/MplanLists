import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[PadZeros]',
})
export class PadZerosDirective {
    public inputElement: HTMLInputElement;
    public formCtrl: NgControl;
    public maxlength: number;
    constructor(private el: ElementRef, private formControl: NgControl) {
        this.inputElement = el.nativeElement;
        this.formCtrl = formControl;
        this.maxlength = +this.inputElement.getAttribute('maxlength');
    }

    @HostListener('blur', ['$event'])
    public onBlur() {
        this.handleChange();
    }

    @HostListener('focus', ['$event'])
    public onFocus() {
        this.handleChange();
    }

    @HostListener('input', ['$event'])
    public onInput() {
        this.handleChange();
    }

    @HostListener('change', ['$event'])
    public onChange() {
        this.handleChange();
    }

    @HostListener('keydown', ['$event'])
    public onKeyDown(e: KeyboardEvent) {
        let val = '' + this.formCtrl.control.value;
        if (val.length === +this.maxlength) {
            if (+e.key >= 0) {
                val = val.substring(1, val.length) + +e.key;
                this.formCtrl.control.patchValue(val);
                e.currentTarget.dispatchEvent(new Event('change'));
            }
        }
    }

    public handleChange() {
        if (this.formCtrl.control.value == '' || null) {
            return;
        }
        this.formCtrl.control.patchValue(this.pad_with_zeroes(this.formCtrl.value, this.maxlength));
    }

    public pad_with_zeroes(number, length): string {
        let my_string = '' + number;
        while (my_string.length < length) {
            my_string = '0' + my_string;
        }
        return my_string;
    }
}
