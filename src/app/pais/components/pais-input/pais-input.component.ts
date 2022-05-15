import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  

  termino: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Buscar país';

  debouncer : Subject<string> = new Subject;

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  buscar() {  
    this.onEnter.emit(this.termino);
  }


  ngOnInit() {
   
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(valor => {
      //console.log(termino);
      this.onDebounce.emit(valor);
    }
    );
  }
}
