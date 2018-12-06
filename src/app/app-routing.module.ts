import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrameworkBaseComponent} from './learn-material-demo/components/framework-base/framework-base.component';
import {MdReaderComponent} from './md-reader/components/md-reader/md-reader.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'reader'},
  {path: 'boot', component: FrameworkBaseComponent},
  {path: 'reader', component: MdReaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
