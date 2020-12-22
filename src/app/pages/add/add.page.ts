import { DatabaseService, Dev } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  developers: Dev[] = [];

  products: Observable<any[]>;

  developer = {};
  product = {};

  selectedView = 'devs';
  credential = "";

  clickedImage: string;
  certificate: string = "";
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  constructor(private db: DatabaseService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getDevs().subscribe(devs => {
          this.developers = devs;
        })
        this.products = this.db.getProducts();
      }
    });
  }

  addDeveloper() {

    this.db.addDeveloper(this.developer['name'], this.developer['skills'], this.developer['img'], this.developer['path'])
      .then(_ => {
        this.developer = {};
      });
  }

  addProduct() {
    this.db.addProduct(this.product['name'], this.product['creator'])
      .then(_ => {
        this.product = {};
      });
  }


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
      this.developer['path'] = this.croppedImagepath;
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }


  updateCredentials(e) {
    this.developer['skills'] = e.replace(/(\w)\w*\W*/g, function (_, i) {
      return i.toUpperCase();
    }
    );
  }
}