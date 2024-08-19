import { Routes } from '@angular/router';

import {ListComponent} from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/Info/pages/about/about.component';
import { LayoutComponent } from '@shared/component/layout/layout.component';
import { NotFoundComponent } from './domains/Info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'about',
                component: AboutComponent
            }
        ]
    },
    
    {
        path: '**',
        component: NotFoundComponent
         
    }
];
