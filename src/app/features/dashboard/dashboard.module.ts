import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';
import { UserComponent } from './user/user.component';
import { UsersCounterComponent } from './_shared/counters/users-counter/users-counter.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SharedModule } from "../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    DashboardComponent,
    SysAdminComponent,
    UserComponent,
    UsersCounterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ScrollToModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardModule { }
