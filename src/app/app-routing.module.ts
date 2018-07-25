import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTemplatesComponent } from './componets/list-templates/list-templates.component';
import { TemplateViewComponent } from './componets/template-view/template-view.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/templates' },
    { path: 'templates', component: ListTemplatesComponent },
    { path: 'templates/:id', component: TemplateViewComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true})
     ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }