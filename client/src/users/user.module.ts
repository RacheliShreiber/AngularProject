import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user.service";
import { LecturerService } from "./services/lecturer.service";
import { AppRoutingModule } from "../app/app.routes";
import { LogoutComponent } from "./logout/logout.component";




@NgModule({
    declarations:[LoginComponent,RegisterComponent,LogoutComponent],
    imports:[CommonModule,ReactiveFormsModule,HttpClientModule],
    providers:[UserService,LecturerService],
    exports:[LoginComponent,RegisterComponent]
})
export class UserModule{
    
}