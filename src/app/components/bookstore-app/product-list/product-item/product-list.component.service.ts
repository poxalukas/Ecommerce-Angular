import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../model/Books";

@Injectable()

export class BookService{
   
    private url = 'https://sheet.best/api/sheets/50345ab2-3e43-4bcb-a5c6-ce5751b73641';

        httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
          
         constructor( private http: HttpClient){}
      
               
          getBooks() {
            return this.http.get(this.url)
      
        
          }
      
      }
    