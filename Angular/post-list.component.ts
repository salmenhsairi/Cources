import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input()
  posts : Array<
  { 
    title: string,  
    content: string,  
    loveIts: number,  
    created_at: Date
  }>;
  post1 = 
  {
    title: "post1",  
    content: "c'est mon premier poste",  
    loveIts: 0,  
    created_at: new Date()
  }
  constructor() {}

  ngOnInit(): void {
  }

}
