import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';

@Injectable({
    providedIn: 'root'
  })
  export class CostService {
  
    constructor(private http:HttpClient) { }

//item list type
    items: User[] = [];
  

  getTotalCost() {
    return this.items;
  }

  clearTotalCost() {
    this.items = [];
    return this.items;
  }
  }