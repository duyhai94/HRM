import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Camera } from "@ionic-native/Camera/ngx";
import { File } from "@ionic-native/File/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { ForgotComponent } from "./pages/auth/forgot/forgot.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APIInterceptor } from "./shared/interceptors/api.interceptor";
import { LoaderInterceptor } from "./shared/interceptors/loader.interceptor";
import { AuthGuard } from "./shared/interceptors/auth.guard";
import { HandleErrorService } from "./shared/service/handle-error.service";
//sharemodule

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
