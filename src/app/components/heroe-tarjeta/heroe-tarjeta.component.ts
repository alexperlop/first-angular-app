import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  seeHeroe() {
    // this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['/heroe', this.heroe.nombre]);
  }
}
