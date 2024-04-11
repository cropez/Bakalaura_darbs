import { Component } from '@angular/core';
import { CartService } from '../cart.service'; 
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: Product[] = [
    {
      "name": "HP 250 G10 portatīvais dators",
      "price": "629,00 € / gab.",
      "details": [
        "Intel® Core™ i5-1335U, 16 GB, 512 GB, 15.6″, Intel Iris Xe Graphics, sudraba",
        "Ekrāna diagonāle: 15.6″",
        "Operētājsistēma: Windows 11",
        "Operatīvā atmiņa (RAM): 16 GB",
        "SSD/eMMC diska tilpums: 512 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "Acer Aspire 5 portatīvais dators",
      "price": "550,00 € / gab.",
      "details": [
        "AMD Ryzen 5 3500U, 8 GB, 256 GB SSD, Vega 8, 15.6″, melns",
        "Ekrāna diagonāle: 15.6″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 8 GB",
        "SSD diska tilpums: 256 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "Dell G3 spēļu portatīvais dators",
      "price": "990,00 € / gab.",
      "details": [
        "Intel® Core™ i7-10750H, 16 GB, 1 TB SSD, NVIDIA GeForce GTX 1650 4GB, 15.6″, melns",
        "Ekrāna diagonāle: 15.6″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 16 GB",
        "SSD diska tilpums: 1 TB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "ASUS ZenBook 14 ultrabooks",
      "price": "1200,00 € / gab.",
      "details": [
        "Intel® Core™ i5-10210U, 8 GB, 512 GB SSD, Intel UHD Graphics, 14″, zils",
        "Ekrāna diagonāle: 14″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 8 GB",
        "SSD diska tilpums: 512 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "Lenovo Yoga 7 pārveidojams portatīvais dators",
      "price": "1050,00 € / gab.",
      "details": [
        "Intel® Core™ i5-1135G7, 16 GB, 512 GB SSD, Intel Iris Xe Graphics, 14″, sudraba",
        "Ekrāna diagonāle: 14″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 16 GB",
        "SSD diska tilpums: 512 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "Microsoft Surface Laptop 4 portatīvais dators",
      "price": "1450,00 € / gab.",
      "details": [
        "AMD Ryzen 5 4680U, 8 GB, 256 GB SSD, AMD Radeon Graphics, 13.5″, platīna",
        "Ekrāna diagonāle: 13.5″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 8 GB",
        "SSD diska tilpums: 256 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "MacBook Air M1",
      "price": "999,00 € / gab.",
      "details": [
        "Apple M1 čips, 8 GB, 256 GB SSD, 13.3″, zeltains",
        "Ekrāna diagonāle: 13.3″",
        "Operētājsistēma: macOS",
        "Operatīvā atmiņa (RAM): 8 GB",
        "SSD diska tilpums: 256 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "Samsung Galaxy Book S",
      "price": "850,00 € / gab.",
      "details": [
        "Intel® Core™ i5-L16G7, 8 GB, 256 GB SSD, Intel UHD Graphics, 13.3″, zeltains",
        "Ekrāna diagonāle: 13.3″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 8 GB",
        "SSD diska tilpums: 256 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "ASUS TUF Gaming F15 spēļu portatīvais dators",
      "price": "1100,00 € / gab.",
      "details": [
        "Intel® Core™ i7-11800H, 16 GB, 512 GB SSD, NVIDIA GeForce RTX 3050 Ti, 15.6″, melns",
        "Ekrāna diagonāle: 15.6″",
        "Operētājsistēma: Windows 10",
        "Operatīvā atmiņa (RAM): 16 GB",
        "SSD diska tilpums: 512 GB"
      ],
      "availability": "Pievienot grozam"
    },
    {
      "name": "HP Pavilion x360 pārveidojams portatīvais dators",
      "price": "750,00 € / gab.",
      "details": [
        "Intel® Core™ i5-1135G7, 8 GB, 256 GB SSD, Intel Iris Xe Graphics, 14″, sudraba",
        "Ekrāna diagonāle: 14″",
        "Operētājsistēma: Windows 11",
        "Operatīvā atmiņa (RAM): 8 GB",
        "SSD diska tilpums: 256 GB"
      ],
      "availability": "Pievienot grozam"
    }
  ];

  constructor(private cartService: CartService) {} 

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}