import { Component, Input } from "@angular/core";
import { ModalOptions } from "../../services/modal.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    standalone: false,
    templateUrl: './base-modal.component.html',
})
export class BaseModalComponent {
    @Input() options!: ModalOptions

    constructor(
        public activeModal: NgbActiveModal,
    ) {}
}