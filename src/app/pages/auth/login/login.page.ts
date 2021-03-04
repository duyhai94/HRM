import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/service/login/login.service";
import { ModalService } from "src/app/shared/service/modal.service";
import { Login } from "../model/login.model";

@Component({
    selector: "app-login",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
    model = new Login;
    constructor(
        public modalService: ModalService,
        private service: LoginService
    ) { }

    ngOnInit() {
    }

    LoginSaveAccount(event) {

    }

    buttonLogin() {
        this.service.login(this.model.account, this.model.password).subscribe(
            (res) => {
                // thông báo thành công
            },
            (err) => {
                // thông báo thất bại
            },
            () => {
                // xử lý dù thành công hay thất bại
            }
        );
    }

    forgotPassWord() {
        this.modalService.ForgotPassWork();
    }
}
