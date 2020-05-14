import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  friends = [
    {
      nome: 'Brener',
      idade: 20,
      nivelAmizade: 5
    },
    {
      nome: 'Mateus',
      idade: 23,
      nivelAmizade: 5
    },
    {
      nome: 'Otavio',
      idade: 25,
      nivelAmizade: 5
    },
    {
      nome: 'Pedro',
      idade: 22,
      nivelAmizade: 5
    },
    {
      nome: 'Rafael',
      idade: 27,
      nivelAmizade: 5
    }]

  deleteFriend(name) {
    this.(array.forEach(this.friends => {
      delete();
    })
    )
  }

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Edit',
        icon: 'pencil',
        handler: () => {
          console.log('Edit clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
