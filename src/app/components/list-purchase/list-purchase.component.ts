import { CommonModule } from '@angular/common';  
import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-list-purchase',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css']
})
export class ListPurchaseComponent implements OnInit {
  public purchaseList: Array<{ name: string, quantity: number }> = [];

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.purchaseList = this.purchaseService.purchase;
  }

  public delete(index: number) {
    this.purchaseService.deletePurchase(index);
  }

  public clearAll() {
    this.purchaseService.clearAll();
    this.purchaseList = [];
  }
}
