import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPurchaseComponent } from "./components/add-purchase/add-purchase.component";
import { ListPurchaseComponent } from "./components/list-purchase/list-purchase.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPurchaseComponent, ListPurchaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pirkinių sąrašas';
}
