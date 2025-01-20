import { Component } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-purchase',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-purchase.component.html',
  styleUrl: './add-purchase.component.css'
})
export class AddPurchaseComponent {

  public item = { name: '', quantity: 1 };  

  public constructor(private purchaseService:PurchaseService){

  }

  public addPurchase(){
    if (this.item.name && this.item.quantity > 0) {
      this.purchaseService.addPurchase(this.item); 
      this.item = { name: '', quantity: 1 };  
    }
  }

}
