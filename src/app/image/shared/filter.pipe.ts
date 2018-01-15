import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
    transform(items: any[], criteria: string): any {
        if (criteria === 'all') { 
            console.log(items);
            return items; 
        } 
        else {
            console.log('In else', criteria);
            return items.filter(item => {
                return item.category === criteria;
            });
        }
    }
}