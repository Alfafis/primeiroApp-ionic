import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';

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

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet(nome: string) {
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
          this.deleteAmigo(nome);
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

  deleteAmigo(nome: string) {
    this.friends.forEach((item, index) => {
      if (item.nome === nome) this.friends.splice(index, 1)
    });
  }

  ngOnInit() {
  }

}
