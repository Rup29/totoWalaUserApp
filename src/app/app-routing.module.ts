import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     loadChildren: ()=> import('./pages/getstarted/getstarted.module').then(m=>m.GetstartedPageModule)
  },
  {
    path: 'home',
     loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomePageModule)
  },
  {
    path: 'login',
     loadChildren: ()=> import('./pages/auth/login/login.module').then(m=>m.LoginPageModule)
  },
 {
    path: 'otp',
    loadChildren: ()=> import('./pages/auth/otp/otp.module').then(m=>m.OtpPageModule)
 }, 
 {
  path: 'verify',
  loadChildren: ()=> import('./pages/auth/verify/verify.module').then(m=>m.VerifyPageModule)
}, 
  {
    path: '',
    redirectTo: 'getstarted',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/auth/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
