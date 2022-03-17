import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentIN } from 'src/app/interfaces/comment';
import { UserOUT } from 'src/app/interfaces/user';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  @Input() page!: string;
  @Input() pageId!: number;
  form!: FormGroup;
  pseudo!: string;
  userLoggedInfo!: UserOUT;
  hasPseudo!: boolean;

  constructor(
    private router: Router,
    private commentService: CommentService,
    private fb: FormBuilder
    ) {
      const userLoggedInfo = localStorage.getItem('userLoggedInfo') as string;
      this.userLoggedInfo = JSON.parse(userLoggedInfo);
    }

  get pseudoFb(){
    return this.form.get('pseudoFb');
  }
  get content(){
    return this.form.get('content');
  }

  ngOnInit(): void {
    if (this.userLoggedInfo) { this.pseudo = this.userLoggedInfo.username; };
    this.hasPseudo = this.pseudo ? true : false;
    if (!this.hasPseudo) { this.pseudo = 'user_' + (Math.random() + 1).toString(36).substring(7); }

    this.initAddCommentForm(this.pseudo);
  }

  initAddCommentForm(pseudo: string): void {
    this.form = this.fb.group({
      pseudoFb: [pseudo, Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      const newComment: CommentIN = {
        author: form.value.pseudoFb,
        content: form.value.content
      };

      if (this.userLoggedInfo) { newComment.user = `api/users/${this.userLoggedInfo.id.toString()}`; }
      if (this.page === 'restaurant') { newComment.restaurant = `api/restaurants/${this.pageId.toString()}`; }
      else if (this.page === 'room') { newComment.room = `api/rooms/${this.pageId.toString()}`; }

      this.commentService.addComment(newComment).subscribe(
        () => {
          this.reload(`/room/detail/${this.pageId}`);
        },
        (error) => {
          console.log(error);
        });
    }
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
}
