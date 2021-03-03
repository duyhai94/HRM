import { Component, OnInit } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './service/login/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private fcm: FCM,
        private authService: AuthService
    ) {
        this.initializeApp();
    }

    async ngOnInit() {
        await this.initFireBaseToken();
    }

    initFireBaseToken() {
        const user = JSON.parse(localStorage.getItem("access_user"));
        if (!user) return localStorage.clear();
        this.fcm.getToken().then(token => {
            const data = {
                Username: user.Username,
                GUID: token
            }
            this.authService.checkGUID(data).subscribe(res => {
                // console.log(res);
                // return localStorage.clear();
            })

        });
    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
