import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About} from './page/about/about';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';



export const routes: Routes = [

    {path:'',component:Home},
    {path:'nosotros',component:About},
    {path:'producto',component:Products},
    {path:'contacto',component:Contact},
    {path:'**',component:Home}

];
