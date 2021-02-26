import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/shared/service/modal.service";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"],
})
export class ForgotComponent implements OnInit {
  getEmail = "";
  constructor(public modalService: ModalService) {}

  ngOnInit() {}
  close() {
    this.modalService.CloseModal();
  }
  buttonForgot() {
    console.log(this.getEmail);
  }
}
