import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReplaceComponent} from './replace/replace.component'
import {LivewellComponent} from './livewell/livewell.component'
import {ChooseFisherComponent} from './choose-fisher/choose-fisher.component'
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // {path:'Login', component: LoginComponent},
  // {path: '', component: AppComponent},
  {path: 'Replace', component: ReplaceComponent},
  {path: 'Livewell', component: LivewellComponent},
  {path: 'ChooseFisher', component: ChooseFisherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
