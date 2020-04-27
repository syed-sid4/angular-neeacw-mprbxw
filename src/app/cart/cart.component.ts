import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;


  constructor(
      private cartService: CartService,
      private formbuilder : FormBuilder
   ) 

   
   { 
      this.checkoutForm = this.formbuilder.group
      (
        {
          name:'',
          address:''
        }
      )
   }

deleteItem()
{
  window.alert('Deleted');
this.items =[];

}
  ngOnInit() {

    this.items = this.cartService.getItems();
  }


  onSubmit(customerData)
  {
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();

      console.warn('Your order has been submitted', customerData);
  }

}