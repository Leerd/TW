import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Authorization } from './Components/authorization/authorization'
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ResultService } from '../App/Services/result.service';
import { TransportService } from '../App/Services/transport.service';

const appRoutes: Routes = [
    { path: '', component: Authorization },
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [Authorization],
    providers:[ResultService, TransportService],
    bootstrap: [Authorization]
})

export class AppModule { }