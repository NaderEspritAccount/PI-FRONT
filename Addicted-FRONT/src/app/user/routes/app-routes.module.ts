import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from '../challenges/challenges.component';
import { OldpageComponent } from '../oldpage/oldpage.component';
import { RecommendedItemsComponent } from '../recommended-items/recommended-items.component';
import { PostComponent } from '../post/post.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengesComponent },
  { path: '', component: OldpageComponent },
  { path: 'produit', component: RecommendedItemsComponent },
  { path: 'post', component: PostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
