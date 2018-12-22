import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MkPageComponent} from './components/mk-page/mk-page.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {path: '', redirectTo: '', pathMatch: 'full'},

  {path: 'mk-page', component: MkPageComponent},
  {path: 'mk-page/:section', component: MkPageComponent},
  {path: 'mk-page/:section/:item', component: MkPageComponent},

  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
