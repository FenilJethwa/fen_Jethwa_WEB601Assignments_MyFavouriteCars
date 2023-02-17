import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contents: Content[], typeFilter?: string): Content[] {
    if (!contents) {
      return [];
    }
    if (!typeFilter) {
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === typeFilter);
  }

}
