import { Component, Input, Output, EventEmitter, OnChanges, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})

@NgModule({
  declarations: [
    StockStatusComponent, FormsModule
  ],
  imports: [
    BrowserModule, FormsModule //<<<< and here
  ],
  providers: [],
  bootstrap: [StockStatusComponent]
})

export class StockStatusComponent implements OnChanges{

  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue: number;

  stockValueChanged(){
    this.stockValueChange.emit(
      {id: this.productId, updatedstockvalue: this.updatedstockvalue});
      this.updatedstockvalue = null;
  }

  ngOnChanges(){
    if(this.stock > 10){
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
