import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentListComponent {

  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'My Car 1',
        description: 'Car1',
        creator: 'Mahindra ',
        imgURL: 'https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/100429/xuv700-right-front-three-quarter-3.jpeg?isig=0&q=75',
        type: 'Hyper-sport',
        tags: ['XUV', 'Luxary'],
      },
      {
        id: 2,
        title: 'My Car 2',
        description: 'Car2',
        creator: 'Audi',
        imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Full-HD-Wallpapers-1080p-Cars.jpg',
        type: 'Hyper-sport',
        tags: ['V8', 'Luxary'],
      },
      {
        id: 3,
        title: 'My Car 3',
        description: 'Car3',
        creator: 'Porsche',
        imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/1080p-Cars-Wallpapers-Fulll-HD.jpg',
        type: '',
        tags: ['Gt', 'V8'],
      },
      {
        id: 4,
        title: 'My Car 4',
        description: 'Car4',
        creator: 'Chevrolet',
        imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Download-Free-1080p-Cars-Full-HD-Images.jpg',
        type: '',
        tags: ['Bumblee', 'Bee'],
      },
      {
        id: 5,
        title: 'My Car 5',
        description: 'Car5',
        creator: 'Dodge',
        imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Photos-1080p-Cars-Download.jpg',
        type: 'Muscle',
        tags: ['V12', 'American'],
      },
      {
        id: 6,
        title: 'My Car 6',
        description: 'Car6',
        creator: 'Masarati',
        imgURL: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Full-HD-1080p-Cars-Wallpapers.jpg',
        type: 'Muscle',
        tags: ['Luxary', 'Sport'],
      },
    ];
  }
}
