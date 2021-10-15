import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeRoutes } from "./home/home-routing.module";
import { IntroducaoRoutes } from "./introducao/introducao-routing.module";
import { SaibaMaisRoutes } from "./saiba-mais/saiba-mais-routing.module";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...HomeRoutes,
    ...IntroducaoRoutes,
    ...SaibaMaisRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
    exports:[RouterModule]
})

export class AppRoutingModule{}
