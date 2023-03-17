import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList = new ContentList();

  constructor() {
    this.contentList.addContent({id: 1, title: 'My First Content', description: 'This is the description for my first content item.', creator: 'Me', imgURL: 'https://example.com/image1.jpg', type: 'type1', tags: ['tag1', 'tag2']});
    this.contentList.addContent({id: 2, title: 'My Second Content', description: 'This is the description for my second content item.', creator: 'Me', imgURL: 'https://example.com/image2.jpg', type: 'type2', tags: ['tag2', 'tag3']});
    this.contentList.addContent({id: 3, title: 'My Third Content', description: 'This is the description for my third content item.', creator: 'Me', type: 'type3', tags: ['tag3', 'tag4']});
  }

  ngOnInit(): void {
  }
}


