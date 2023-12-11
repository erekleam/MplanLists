import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Dictionary } from 'src/app/shared/models/dictionary.model';


import { DictionaryService } from './dictionary.service';
import { DictionaryModalComponent } from './components/dictionary-modal/dictionary-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private bsModalRef: BsModalRef;

    constructor(private modalService: BsModalService, private dictionaryService: DictionaryService, private fb: FormBuilder) {}

    public openDictionaryModal(
        dictionary: string,
        code: AbstractControl,
        text: AbstractControl,
        filter?: string,
        pairDictionary?: string,
        pairCode?: AbstractControl,
        pairText?: AbstractControl
    ) {
        const initialState = {
            dictionaryName: dictionary,
            filter,
        };

        let modal$: Subscription;
        this.bsModalRef = this.modalService.show(DictionaryModalComponent, { initialState, class: 'modal-lg modal-dialog-centered' });

        modal$ = this.bsModalRef.onHidden.subscribe(() => {
            const selected: Dictionary = this.bsModalRef.content?.selected;
            if (selected) {
                this.handleControls(selected, code, text, true);
                if (pairCode && pairText) {
                    pairCode.patchValue(selected?.pair);
                    this.getDictionary(pairDictionary, pairCode, pairText, code.value).add(() => {
                        modal$.unsubscribe();
                    });
                } else {
                    modal$.unsubscribe();
                }
            } else {
                modal$.unsubscribe();
            }
        });

        return modal$;
    }

    public getDictionary(
        dictionary: string,
        code: AbstractControl,
        text: AbstractControl,
        filter?: string,
        pairDictionary?: string,
        pairCode?: AbstractControl,
        pairText?: AbstractControl,
    ) {       
        let selected: Dictionary = null;
        let sub$: Subscription;

        code?.setErrors(null);
        text?.setErrors(null);

        if (code.invalid) {
            code.setErrors({ incorrect: true });
            code.markAsTouched();
            text.patchValue('კოდი არასწორია');
            text.setErrors({ incorrect: true });
            text.markAsTouched();
            if (pairCode && pairText) {
                pairCode.patchValue('');
                pairCode.setErrors({ incorrect: true });
                pairCode.markAsTouched();
                pairText.patchValue('კოდი არასწორია');
                pairText.setErrors({ incorrect: true });
                pairText.markAsTouched();
            }
            return;
        }

        sub$ = this.dictionaryService.getDictionary(dictionary, { filter, code: code?.value }).subscribe((data) => {
            if (data.data.length > 0) {
                const value = data.data[0];
                if (value) {
                    selected = value;
                    this.handleControls(selected, code, text, null, false);
                    if (pairCode && pairText) {
                        pairCode.patchValue(selected?.pair);
                        this.getDictionary(pairDictionary, pairCode, pairText, code.value).add(() => {
                            sub$?.unsubscribe();
                        });
                    } else {
                        sub$?.unsubscribe();
                    }
                }
            } else {
                this.handleControls(selected, code, text, null, true);
                if (pairCode && pairText) {
                    pairCode.patchValue('');
                    pairCode.setErrors({ incorrect: true });
                    pairCode.markAsTouched();
                    pairText.patchValue('კოდი არასწორია');
                    pairText.setErrors({ incorrect: true });
                    pairText.markAsTouched();
                }
                sub$?.unsubscribe();
            }
        });

        return sub$;
    }

    public handleControls(selected: Dictionary, code: AbstractControl, text: AbstractControl, modal?: boolean, error?: boolean) {
        if (selected !== null || error) {
            if (code && code.value == null) {
                text.patchValue('');
                return;
            }
            if (error) {
                text.patchValue('კოდი არასწორია');
                code.setErrors({ incorrect: true });
                text.setErrors({ incorrect: true });
                code.markAsTouched();
                text.markAsTouched();
            } else {
                if (code !== null) {
                    code.setErrors(null);
                    text.setErrors(null);
                    if (modal) {
                        code.patchValue(selected.code);
                

                    }
                    text.patchValue(selected.name);
                    code.markAsTouched();
                    text.markAsTouched();
                } else {
                    if (text.value !== '') {
                        text.patchValue(text.value + '\n');
                    }
                    text.patchValue(text.value + selected.code + ' ' + selected.name);
                    text.markAsTouched();
                }
            }
        }
    }

    // public openGuidesModal(guides: FormArray, guideNumber: number, index:number,wagonBodyForm?: FormArray) {
    //     let modal$: Subscription;
    //     const initialState = {
    //         guidesFrom: guides,
    //         guideNumber,
    //         wagonBodyForm,
    //         index: index,
    //     };
    //     this.bsModalRef = this.modalService.show(GuidesModalComponent, { initialState, class: 'modal-lg modal-dialog-centered', ignoreBackdropClick: true });

    //     modal$ = this.bsModalRef.onHidden
    //         .subscribe(() => {
    //             const guidesFromModal = this.bsModalRef.content?.guides as FormArray;
    //             if (guidesFromModal.controls.length > 0) {
    //                 guides?.clear();
    //                 for (const guide of guidesFromModal.controls) {
    //                     const vale = guide as FormGroup;
    //                     const bla = vale.getRawValue();
    //                     const newGuide: FormGroup = this.fb.group(bla);
    //                     guides?.push(newGuide);
    //                 }
    //             }
    //         })
    //         .add(() => {
    //             modal$.unsubscribe();
    //         });

    //     return modal$;
    // }

    

    // public openRejectModal(reason: FormControl) {
    //     let modal$: Subscription;
    //     const initialState = {};

    //     this.bsModalRef = this.modalService.show(RejectModalComponent, { initialState, class: 'modal-lg modal-dialog-centered' });

    //     modal$ = this.bsModalRef.onHidden
    //         .subscribe(() => {
    //             if (this.bsModalRef.content?.return && this.bsModalRef.content?.return !== null) {
    //                 reason.patchValue(this.bsModalRef.content.return);
    //                 modal$?.unsubscribe();
    //             }
    //         })
    //         .add(() => {
    //             modal$?.unsubscribe();
    //         });

    //     return modal$;
    // }


 

    // public openComnfirmModal(operation: string, id: number) {
    //     const initialState = {
    //         operation,
    //         id
    //     };

    //     this.bsModalRef = this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-md modal-dialog-centered' });

    //     const modal$: Subscription = this.bsModalRef.onHidden
    //         .subscribe(() => {
    //             if (this.bsModalRef.content?.return && this.bsModalRef.content?.return !== null) {                   
    //                 modal$?.unsubscribe();
    //             }
    //         })
    //         .add(() => {
    //             modal$?.unsubscribe();
    //         });    
    //     return modal$;
    // }








}
