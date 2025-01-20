import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  public purchase: Array<{ name: string, quantity: number }> = [];

  constructor() { 
    const tmp = localStorage.getItem("purchase");
    if (tmp) {
      this.purchase = JSON.parse(tmp);
    }
  }

  private save() {
    localStorage.setItem("purchase", JSON.stringify(this.purchase));
  }

  public addPurchase(item: { name: string, quantity: number }) {
    this.purchase.push(item);
    this.save();  
  }

  public deletePurchase(index: number) {
    this.purchase.splice(index, 1);  
    this.save();
  }

  public clearAll() {
    this.purchase = []; 
    this.save(); 
  }
}
