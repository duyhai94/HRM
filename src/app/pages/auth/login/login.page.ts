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
  getAccount: any;
  getPassWork: any;
  getSavePass: any;
  login: Login;
  constructor(
    public modalService: ModalService,
    private service: LoginService
  ) {}

  ngOnInit() {}
  LoginSaveAccount(event) {
    this.getSavePass = event.target.checked;
    console.log(this.getSavePass);

    return this.getSavePass;
  }
  buttonLogin() {
    let FormsLogin = [];
    FormsLogin.push(this.getAccount);
    FormsLogin.push(this.getPassWork);
    FormsLogin.push(this.getSavePass);
    console.log(FormsLogin);
    this.service.login(FormsLogin).subscribe(
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
