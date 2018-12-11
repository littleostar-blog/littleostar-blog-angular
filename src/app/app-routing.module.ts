import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MdReaderComponent} from './md-reader/components/md-reader/md-reader.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},

  {path: 'md', component: MdReaderComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
