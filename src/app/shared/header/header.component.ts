import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  //Output = Es usado para enviar datos al componente padre
  @Output() buttonSidebarAction:EventEmitter<boolean> = new EventEmitter();

  nombre:String = 'Handel A.';
  status:boolean = false;

  //Ciclo de vida de un componente

  ngOnInit(): void {
    
  }

  btnAction(){
    if(this.status == false){
      this.status = !this.status
      this.buttonSidebarAction.emit(this.status)
    } else {
      this.status = !this.status
      this.buttonSidebarAction.emit(this.status)
    }
  }

}
