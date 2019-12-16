import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './buttonsAndIndicators/button/button.component';
import { Error404NotFoundComponent } from './error404-not-found/error404-not-found.component';
import { RootComponent } from './root/root.component';
import { ButtonToggleComponent } from './buttonsAndIndicators/button-toggle/button-toggle.component';
import {BadgeComponent} from './buttonsAndIndicators/badge/badge.component';
import {ChipsComponent} from './buttonsAndIndicators/chips/chips.component';
import {IconComponent} from './buttonsAndIndicators/icon/icon.component';
import {ProgressSpinnerComponent} from './buttonsAndIndicators/progress-spinner/progress-spinner.component';
import {ProgressBarComponent} from './buttonsAndIndicators/progress-bar/progress-bar.component';
import {RippleComponent} from './buttonsAndIndicators/ripple/ripple.component';
import {TableComponent} from './dataTable/table/table.component';


const routes: Routes = [

  {path: '', component: RootComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'icon', component: IconComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'ripples', component: RippleComponent},

  /* data table */
  {path: 'table', component: TableComponent},

  /*//not found*/
  {path: '**', component: Error404NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [TableComponent, RippleComponent, BadgeComponent, ChipsComponent, IconComponent, ProgressSpinnerComponent, ProgressBarComponent, ButtonToggleComponent, TypographyComponent, ButtonComponent, Error404NotFoundComponent, RootComponent];
