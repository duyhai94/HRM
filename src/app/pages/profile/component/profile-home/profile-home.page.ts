import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {
  Camera,
  CameraOptions,
  PictureSourceType,
} from "@ionic-native/Camera/ngx";
import { Platform, ActionSheetController } from "@ionic/angular";
import { File, FileEntry } from "@ionic-native/File/ngx";
import { WorkModel } from "src/app/model/work/work.model";
import { ProfileModel } from "src/app/model/profile/profile.model";
import { WorkService } from "src/app/service/work/work.service";
import { ProfileService } from "src/app/service/profile/profile.service";

@Component({
  selector: "app-profile-home",
  templateUrl: "./profile-home.page.html",
  styleUrls: ["./profile-home.page.scss"],
})
export class ProfileHomePage implements OnInit {
  image: any;
  //model
  workModel: WorkModel;
  profileModel: ProfileModel;

  // images: ApiImage[] = [];

  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;

  constructor(
    private file: File,
    private camera: Camera,
    private sanitizer: DomSanitizer,
    private plt: Platform,
    private actionSheetCtrl: ActionSheetController,
    private workService: WorkService,
    private profileService: ProfileService
  ) {
    // this.loadImages();
    // private api: ApiService,
  }

  ngOnInit() {
    this.workService.getInfoWork().subscribe((res) => {
      this.workModel = res;
    });
    this.profileService.getDetailProfile().subscribe((res) => {
      this.profileModel = res;
    });
  }
  // loadImages() {
  //   this.api.getImages().subscribe(images => {
  //     this.images = images;
  //   });
  // }
  async selectImageSource() {
    const buttons = [
      {
        text: "Take Photo",
        icon: "camera",
        handler: () => {
          this.addImage(this.camera.PictureSourceType.CAMERA);
        },
      },
      {
        text: "Choose From Photos Photo",
        icon: "image",
        handler: () => {
          this.addImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        },
      },
    ];

    // Only allow file selection inside a browser
    if (!this.plt.is("hybrid")) {
      buttons.push({
        text: "Choose a File",
        icon: "attach",
        handler: () => {
          this.fileInput.nativeElement.click();
        },
      });
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: "Select Image Source",
      buttons,
    });
    await actionSheet.present();
  }

  async addImage(source) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: source,
      destinationType: 0,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then((imagePath) => {
      this.image = "data:image/jpeg;base64," + imagePath;
    });
  }

  transform(image) {
    if (image) {
      return this.sanitizer.bypassSecurityTrustUrl(image);
    }
  }

  b64toBlob(b64Data, contentType = "", sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  uploadFile() {}
}
