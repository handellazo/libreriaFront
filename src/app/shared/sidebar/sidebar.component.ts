import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  @Input('sidebarStatusLarge') sidebarStatusLarge:boolean=false;
  
  menus:Array<any> = [{
    link:'/alquiler',
    name:'Alquiler',
    icon:'fa-solid fa-business-time'
  },
  {
    link:'',
    name:'Libro',
    icon:'fa-solid fa-book'
  },
  {
    link:'/lector',
    name:'Lector',
    icon:'fa-solid fa-book-open-reader'
  },
  {
    link:'/autor',
    name:'Autor',
    icon:'fa-solid fa-person'
  },
  {
    link:'/categoria',
    name:'Categoria',
    icon:'fa-regular fa-address-book'
  },
  {
    link:'/editorial',
    name:'Editorial',
    icon:'fa-solid fa-file'
  }
  ]

  ngOnInit(): void {

  }

}