import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMatrixComponent } from './components/form-matrix/form-matrix.component';
import { LoginComponent } from './components/login/login.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'formMatrix', component: FormMatrixComponent },
  { path: 'matrix/:size', component: MatrixComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
