import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Comments } from '../../interfaces/comments';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment!: Comments

  constructor(private activatedRoute: ActivatedRoute, private ServiceService: ServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.ServiceService.getById(id)
        .subscribe(commentL => this.comment = commentL)
    })
  }
}
