import { Component, OnInit } from '@angular/core';
import { BookService } from './product-item/product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  livros: any;
  bookService: BookService;

  constructor(  bookService: BookService) {

    this.bookService = bookService;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.livros = this.bookService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))


  }
}
