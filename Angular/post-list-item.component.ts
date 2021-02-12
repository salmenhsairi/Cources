import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
    post : {  
    title: string,  
    content: string,  
    loveIts: number, 
    created_at: Date,
    };
  
  constructor() {
  }
  onLoveIt() {
    this.post.loveIts++;
  }
  onNoLoveIt(){
    this.post.loveIts--;
  }
  ngOnInit(): void {
  }

}
