import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-confirm-cart',
  templateUrl: './confirm-cart.component.html',
  styleUrls: ['./confirm-cart.component.scss'],
})
export class ConfirmCartComponent implements OnInit {

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.openAnotherAlert(); 
      },
    },
  ];

  constructor(
    private alertController: AlertController,
    private router: Router 
  ) { } 

  ngOnInit() {}

  async openAnotherAlert() {
    const anotherAlert = await this.alertController.create({
      header: 'Muchas gracias',
      message: 'Pronto podra disfrutar de su compra.',
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            window.location.reload();
          }
        }
      ],
    });

    await anotherAlert.present();
  }
}


