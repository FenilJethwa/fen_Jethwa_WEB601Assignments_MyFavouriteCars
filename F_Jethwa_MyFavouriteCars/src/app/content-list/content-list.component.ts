import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contents: Content[] = [
    {
      id: 1,
      title: 'First Content',
      description: 'This is the first content',
      creator: 'John Doe',
      imgURL: 'https://example.com/image1.jpg',
      type: 'video',
      tags: ['tag1', 'tag2']
    },
    {
      id: 2,
      title: 'Second Content',
      description: 'This is the second content',
      creator: 'Jane Doe',
      imgURL: 'https://example.com/image2.jpg',
      type: 'album',
      tags: ['tag3', 'tag4']
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'This is the third content',
      creator: 'Bob Smith',
      imgURL: 'https://example.com/image3.jpg',
      type: 'video',
      tags: ['tag1', 'tag4']
    },
    {
      id: 4,
      title: 'Fourth Content',
      description: 'This is the fourth content',
      creator: 'Alice Smith',
      imgURL: 'https://example.com/image4.jpg',
      type: 'article',
      tags: ['tag2', 'tag3']
    },
    {
      id: 5,
      title: 'Fifth Content',
      description: 'This is the fifth content',
      creator: 'Michael Johnson',
      imgURL: 'https://example.com/image5.jpg',
      type: 'video',
      tags: ['tag1', 'tag3']
    },
    {
      id: 6,
      title: 'Sixth Content',
      description: 'This is the sixth content',
      creator: 'Emily Johnson',
      imgURL: 'https://example.com/image6.jpg',
      type: 'article',
      tags: ['tag2', 'tag4']
    },
    {
      id: 7,
      title: 'Sixth Content',
      description: 'This is the sixth content',
      creator: 'Emily Johnson',
      imgURL: 'https://example.com/image6.jpg',
      tags: ['tag5', 'tag']
    },
  ];
}
