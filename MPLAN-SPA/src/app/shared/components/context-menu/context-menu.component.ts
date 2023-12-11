import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ContextMenu } from '../../models/context-menu.model';

const anim = trigger('toggle', [
    state('true', style({ opacity: '1', transform: 'translateY(0)' })),
    state('false', style({ opacity: '0', transform: 'translateY(50%)' })),
    transition('true <=> false', animate('300ms ease')),
]);
@Component({
    selector: 'app-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss'],
    animations: [anim],
})
export class ContextMenuComponent implements AfterViewInit {
    @Input() items: ContextMenu[];
    @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('menu') menu: ElementRef;

    private x: number = 0;
    private y: number = 0;

    private menuEl: HTMLElement;

    public show: boolean = false;

    ngAfterViewInit(): void {
        this.menuEl = this.menu.nativeElement;
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.menu.nativeElement.contains(event.target)) {
            this.close();
        }
    }

    private handleMenuPosition() {
        const screenPadding = 16;
        const menu = this.menuEl;

        menu.style.left = this.x + 'px';
        menu.style.right = 'auto';
        menu.style.top = this.y + 'px';

        const menuRect = menu.getBoundingClientRect();
        const menuRight = menuRect.x + menuRect.width;

        if (menuRect.x < 0) {
            menu.style.left = screenPadding + 'px';
            menu.style.right = 'auto';
            this.x = screenPadding;
        }

        if (menuRight > window.innerWidth) {
            menu.style.left = 'auto';
            menu.style.right = screenPadding + 'px';
            this.x = window.innerWidth - screenPadding;
        }
    }

    public handleItemClick(eventName: string) {
        this.onItemClick.emit(eventName);
        this.close();
    }

    public open({ pageX, pageY }: MouseEvent) {
        this.show = true;
        this.x = pageX;
        this.y = pageY;
        this.handleMenuPosition();
    }

    public close() {
        this.show = false;
    }
}
