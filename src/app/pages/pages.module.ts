import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [ PagesRoutingModule ],
  exports: [ PagesRoutingModule ]
})
export class PagesModule { }
