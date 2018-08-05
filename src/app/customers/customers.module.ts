import { NgModule } from "@angular/core";

import { CustomersComponent}  from './customers.component';

@NgModule({

    exports:[CustomersComponent],
    declarations:[CustomersComponent]
})

export class CustomersModule{

}