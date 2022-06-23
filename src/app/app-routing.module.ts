import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '', 
    component : MainComponent,
    children: [
      {path: 'country_detail', component: CountryDetailComponent },
      {path: '',component: CountryListComponent }
    ]
  
  },
  {
    path: '**', 
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
