import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GuerraComponent } from './pages/guerra/guerra.component';
import { FinalComponent } from './pages/final/final.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component:HomeComponent},
  {path: '', component:FooterComponent},
  {path: '', component:HeaderComponent},
  {path: '', component:MenuComponent},
  {path: '**', redirectTo: 'home' },
  {path: `Guerra`, component:GuerraComponent},
  {path: `Final`, component:FinalComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
