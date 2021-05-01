import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'module1', loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module), canActivate: [AuthGuard] },
  { path: 'module2', loadChildren: () => import('./modules/module2/module2.module').then(m => m.Module2Module), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/module1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
