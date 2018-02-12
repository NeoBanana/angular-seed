import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { InfoGeneralComponent } from "./pages/info-general/info-general.component";
import { InfoRulesComponent } from "./pages/info-rules/info-rules.component";
import { EditionsComponent } from "./pages/editions/editions.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AdminPanelComponent } from "./pages/admin-panel/admin-panel.component";
import { AdminDaneKomitetuComponent } from "./pages/admin-dane-komitetu/admin-dane-komitetu.component";
import { SchoolAddParticipentComponent } from "./pages/school-add-participent/school-add-participent.component";
import { SchoolSettingComponent } from "./pages/school-setting/school-setting.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent
  },
  {
    path: "admin-dane-komitetu",
    component: AdminDaneKomitetuComponent
  },
  {
    path: "school-add-participent",
    component: SchoolAddParticipentComponent
  },
  {
    path: "school-setting",
    component: SchoolSettingComponent
  },
  {
    path: "info",
    children: [
      { path: "ogolne", component: InfoGeneralComponent },
      { path: "regulaminy", component: InfoRulesComponent },
      { path: "", redirectTo: "/info/ogolne", pathMatch: "full" }
    ]
  },
  {
    path: "edycja",
    children: [
      { path: ":id", component: EditionsComponent, data: { title: "edycje" } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {}
