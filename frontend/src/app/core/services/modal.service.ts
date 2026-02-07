import { inject, Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BaseModalComponent } from "../components/interface/base-modal.component";

@Injectable({
  providedIn: 'root',
})
export class ModalService {
    public constructor(
        private modalService: NgbModal,
    ) {}

    public openModal(options: ModalOptions): void {
        console.log(BaseModalComponent);

		const modalRef = this.modalService.open(BaseModalComponent, { ariaLabelledBy: options.title + ' Modal' });

        modalRef.componentInstance.options = options;
    }
}

export interface ModalOptions {
    title: string,
    submitBtnText?: string,        
}