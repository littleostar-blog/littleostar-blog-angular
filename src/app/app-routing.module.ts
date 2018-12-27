import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MdReaderComponent} from './components/md-reader/md-reader.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},

  // {path: 'home', component: CoreIndexComponent},

  {path: 'md-page', component: MdReaderComponent},
  {path: 'md-page/:nav', component: MdReaderComponent},
  {path: 'md-page/:nav/:item', component: MdReaderComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
