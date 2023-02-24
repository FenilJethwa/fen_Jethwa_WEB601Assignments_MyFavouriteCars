
import { Content } from "./content-interface";


export class ContentList {
  private contentList: Content[];

  constructor() {
    this.contentList = [];
  }

  getContents(): Content[] {
    return this.contentList;
  }

  addContent(content: Content): void {
    this.contentList.push(content);
  }

  getContentCount(): number {
    return this.contentList.length;
  }

  getContentHtml(index: number): string {
    const content = this.contentList[index];
    const imgTag = content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}">` : '';
    return `
      <div>
        <h2>${content.title}</h2>
        ${imgTag}
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        <p>Type: ${content.type || 'N/A'}</p>
      </div>
    `;
  }
}
