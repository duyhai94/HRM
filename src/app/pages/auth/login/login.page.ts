import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  getAccount: any;
  getPassWork: any;
  getSavePass: any;
  login :Login;
  constructor() { }

  ngOnInit() {

  }
  LoginSaveAccount(event){
        this.getSavePass = event.target.checked;
        console.log(this.getSavePass);
        
        return this.getSavePass;      
        
  }
  buttonLogin(){
   let FormsLogin = [];
    FormsLogin.push(this.getAccount);
    FormsLogin.push(this.getPassWork);
    FormsLogin.push(this.getSavePass);
    console.log(FormsLogin);
  }

}