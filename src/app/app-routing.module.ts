import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {path: '', component: WellcomeComponent},
    {path: 'training', loadChildren: './training/training.module#TrainingModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule{}
