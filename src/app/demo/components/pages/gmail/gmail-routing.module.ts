import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GmailComponent } from './gmail.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: GmailComponent }
	])],
	exports: [RouterModule]
})
export class GmailRoutingModule { }
