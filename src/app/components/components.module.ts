import { IonicModule } from '@ionic/angular';import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { CommentComponent } from './comment/comment.component';
import { ListCommentsComponent } from './comment/list-comments/list-comments.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AddFavoriteComponent } from './favorite/add-favorite/add-favorite.component';
import {
  IonCheckbox,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonList,
  IonLabel,
  IonRadio,
  IonToggle
} from '@ionic/angular';

@NgModule({
  declarations: [
    ExploreContainerComponent,
    FilterComponent,
    CommentComponent,
    ListCommentsComponent,
    AddCommentComponent,
    DetailComponent,
    FavoriteComponent,
    AddFavoriteComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    ExploreContainerComponent,
    FilterComponent,
    CommentComponent,
    ListCommentsComponent,
    AddCommentComponent,
    DetailComponent,
    FavoriteComponent,
    AddFavoriteComponent
  ]
})
export class ComponentsModule { }
