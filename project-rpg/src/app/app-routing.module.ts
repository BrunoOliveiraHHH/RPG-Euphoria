import { Routes } from '@angular/router';
import { ConsultarComponent } from './components/npc/consultar/consultar.component';
import { CadastrarComponent } from './components/npc/cadastrar/cadastrar.component';
import { AlterarComponent } from './components/npc/alterar/alterar.component';
import { VizualizarComponent } from './components/npc/vizualizar/vizualizar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'consultar', pathMatch: 'full' },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'consultar/:id', component: VizualizarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'alterar', component: AlterarComponent },
];
export class AppRoutingModule { }