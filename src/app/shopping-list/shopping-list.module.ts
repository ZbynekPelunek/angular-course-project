import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoggingService } from '../logging.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ],
  providers: [LoggingService]
})
export class ShoppingListModule { }