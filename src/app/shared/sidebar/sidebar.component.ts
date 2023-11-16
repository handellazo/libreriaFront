import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  @Input('sidebarStatusLarge') sidebarStatusLarge:boolean=false;
  
  menus:Array<any> = [{
    link:'/home/alquiler',
    name:'Alquiler',
    icon:'fa-solid fa-business-time'
  },
  {
    link:'/home/libro',
    name:'Libro',
    icon:'fa-solid fa-book'
  },
  {
    link:'/home/lector',
    name:'Lector',
    icon:'fa-solid fa-book-open-reader'
  },
  {
    link:'/home/autor',
    name:'Autor',
    icon:'fa-solid fa-person'
  },
  {
    link:'/home/categoria',
    name:'Categoria',
    icon:'fa-regular fa-address-book'
  },
  {
    link:'/home/editorial',
    name:'Editorial',
    icon:'fa-solid fa-file'
  }
  ]

  ngOnInit(): void {

  }

}