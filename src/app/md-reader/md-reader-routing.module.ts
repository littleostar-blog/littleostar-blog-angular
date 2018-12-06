import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MdReaderComponent} from './components/md-reader/md-reader.component';

const routes: Routes = [
  {path: 'reader', component: MdReaderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdReaderRoutingModule {
}
