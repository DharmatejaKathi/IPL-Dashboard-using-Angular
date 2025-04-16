import { Routes } from '@angular/router';
import { ListComponent } from './Component/list/list.component';
import { ListDetailComponent } from './Component/list-detail/list-detail.component';

export const routes: Routes = [
    {
      path: '',
      component: ListComponent,
    },
    {
        path: 'details/:id',
        component: ListDetailComponent,
      }   

];
