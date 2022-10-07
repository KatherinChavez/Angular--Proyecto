import { Component, OnInit } from '@angular/core';
import { Comments } from '../../interfaces/comments';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comments[] = []


  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAll().subscribe(data => this.comments = data)
  }
}
