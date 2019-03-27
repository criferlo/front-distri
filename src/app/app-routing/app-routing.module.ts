import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { AgendaComponent } from '../agenda/agenda.component'
import { AppComponent } from 'app/app.component';

const routes: Routes = [
  {path: 'agenda',component: AgendaComponent}
  //{path: '', component: AppComponent, pathMatch: 'full'},
]

@NgModule({
 exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
