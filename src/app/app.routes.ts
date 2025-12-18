import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { RegistroUsuario } from './pages/registro-usuario/registro-usuario';
import { Home } from './pages/home/home';
import { publicGuard } from './core/guards/public.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '', component: Login, canActivate: [publicGuard]
    },
    {
        path: 'newuser', component: RegistroUsuario,canActivate: [publicGuard]
    },
    {
        path: 'home', component: Home, canActivate: [authGuard]
    }
];
