import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
    title = 'Recent Photos';
    @Input() filterBy?: string = 'all'
    visibleImages: any[] = [];
    tempImages = [];
    constructor(private imageService: ImageService) {
       this.visibleImages = this.imageService.getImages();
       console.log(this.visibleImages);
       this.tempImages = this.visibleImages.slice();
    }

    ngOnChanges(){
        this.visibleImages = this.imageService.getImages();
    }

    filterImages(criteria: string): any {
        this.visibleImages = this.tempImages;
        if (criteria !== 'all') 
        { 
            console.log('In else', criteria);
            this.visibleImages = this.visibleImages.filter(item => {
                return item.category.toLowerCase() === criteria;
            });
        }
    }
}