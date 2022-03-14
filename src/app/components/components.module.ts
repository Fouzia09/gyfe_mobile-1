import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { CommentComponent } from './comment/comment.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  declarations: [
    ExploreContainerComponent,
    FilterComponent,
    CommentComponent,
    DetailComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExploreContainerComponent,
    FilterComponent,
    CommentComponent,
    DetailComponent,
    FavoriteComponent
  ]
})
export class ComponentsModule { }
