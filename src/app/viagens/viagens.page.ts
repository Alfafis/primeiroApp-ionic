import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  travels = [
    {
      title: "Nova York",
      url: "https://catracalivre.com.br/wp-content/uploads/2019/08/istock-931933966-910x607.jpg",
      description: "New York é um dos maiores destinos turísticos do mundo, tanto para lazer quanto para negócios. Para muitos estudantes e profissionais de diferentes áreas, ter contato com o mundo de negócios de Manhattan pode abrir muitas portas. Sabendo disso, a State University of New York abriu um processo seletivo para bolsas de estudo parciais para brasileiros em seus cursos de curta duração (três semanas)."
    }
  ]

}
