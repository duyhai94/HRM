import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { Camera } from "@ionic-native/Camera/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { File } from "@ionic-native/File/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ForgotComponent } from "./pages/auth/forgot/forgot.component";
import { APIInterceptor } from "./shared/interceptors/api.interceptor";
import { AuthGuard } from "./shared/interceptors/auth.guard";
import { SharedModule } from "./shared/shared.module";
@NgModule({
    declarations: [AppComponent, ForgotComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
    ],
    providers: [
        AuthGuard,
        StatusBar,
        SplashScreen,
        Camera,
        File,
        WebView,
        FilePath,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
        FCM
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
