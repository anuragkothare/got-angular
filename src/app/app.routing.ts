import { HousedetailComponent } from './housedetail/housedetail.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from "@angular/core";
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';
import { NotfoundComponent } from './notfound/notfound.component'



const routes: Routes = [
  {path: 'cards', component: CardListComponent},
  {path: '', redirectTo: '/cards', pathMatch: 'full'},
  {path: 'book/:id', component: BookdetailComponent},
  {path: 'character/:id', component: CharacterdetailComponent},
  {path: 'character', component: CharacterdetailComponent},
  {path: 'house', component: HousedetailComponent},
  {path: 'house/:id', component: HousedetailComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
