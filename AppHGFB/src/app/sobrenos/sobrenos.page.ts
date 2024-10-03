import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importação do Router

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.page.html',
  styleUrls: ['./sobrenos.page.scss'],
})
export class SobrenosPage implements AfterViewInit {

  // Referência ao botão e ao menu usando ViewChild
  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;
  @ViewChild('menuNav', { static: false }) menuNav!: ElementRef;

  constructor(private menuController: MenuController, private router: Router) {}

  ngAfterViewInit() {
    // Verifica se os elementos foram carregados corretamente
    if (this.menuButton && this.menuNav) {
    } else {
      console.error('Erro ao carregar os elementos');
    }
  }

  // Função para redirecionar para a página da mapa
  navigateToMapa() {
    this.router.navigate(['/mapalocal']);
  }

   // Função para redirecionar para a página da Sobre Nós
   navigateToSobreNos() {
    this.router.navigate(['/sobrenos']);
  }

   // Função para redirecionar para a página da home
   navigateToHome() {
    this.router.navigate(['/home']);
  } 
}
