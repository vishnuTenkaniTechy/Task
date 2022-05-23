import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitHistoryComponent } from './commit-history/commit-history.component';


const routes: Routes = [{
  path:'',component:CommitHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
