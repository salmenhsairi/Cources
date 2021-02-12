import { Component} from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "post1",  
      content: "c'est mon premier poste",  
      loveIts: 0,  
      created_at: new Date()
    },
    {
      title: "post2",  
      content: "c'est mon deuxiéme poste",  
      loveIts: 0,  
      created_at: new Date()
    },
    {
      title: "post3",  
      content: "c'est mon troixiéme poste",  
      loveIts: 0,  
      created_at: new Date()
    }
  ]
  constructor(){
}
}
