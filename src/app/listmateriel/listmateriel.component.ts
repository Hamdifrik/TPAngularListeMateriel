import { Component } from '@angular/core';

interface Materiel {
  nom: string;
  reference: string;
  image: string;
  prix: number;
  etat: string;
}

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent {

  materiels = [ {nom:'Scanner', reference: 'e7f8', image: 'assets/scanner.jpg', prix: 253.45, etat:'réparé'}, 
  {nom:'Ecran', reference: 'ec18', image: 'assets/ecrans.jpg', prix: 403.5,etat:'endommagé'}, 
  {nom:'Imprimante', reference: 'imp88', image: 'assets/imprimantes.jpg', prix: 189.5, etat:'endommagé'}, 
  {nom:'Pc Portable', reference: 'hp58', image: 'assets/pcPortables.jpg', 
  prix: 1512.8, etat:'réparé'} ]; 
  
  
  reparerMateriel(materiel: Materiel) {
    materiel.etat = 'réparé';
  }
}
