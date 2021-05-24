import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
{ path:'',component: HomeComponent},
{ path:'about', component: AboutComponent},

{path:'signin', component: SigninComponent},
{path:'signup', component: RegisterComponent},

{path:'userprofile', component: UserProfileComponent,canActivate: [AuthGuard]},
{path:'post-create', component: PostCreateComponent},
{ path: 'edit/:postId', component: PostCreateComponent },
{path:'post-list', component: PostListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[HomeComponent,AboutComponent,SigninComponent,RegisterComponent,UserProfileComponent,PostCreateComponent,PostListComponent]
