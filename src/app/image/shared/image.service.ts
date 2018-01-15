import { Injectable } from '@angular/core';

@Injectable()

export class ImageService {
    visibleImages = [];
    IMAGES = [
        { id: 1,  category: "boats",   caption: "view from boat",    url: "assets/img/boat_01.jpeg" },
        { id: 2,  category: "boats",   caption: "Sailing the coast", url: "assets/img/boat_02.jpg" },
        { id: 3,  category: "boats",   caption: "Sunset pier",       url: "assets/img/boat_03.jpg" },
        { id: 4,  category: "boats",   caption: "Sunday afternoon",  url: "assets/img/boat_04.jpg" },
        { id: 5,  category: "boats",   caption: "view from boat",    url: "assets/img/boat_05.jpg" },
        { id: 6,  category: "camping", caption: "Camping trip '17'", url: "assets/img/camping_01.jpg" },
        { id: 7,  category: "camping", caption: "Kim and Jessie",    url: "assets/img/camping_02.jpg" },
        { id: 8,  category: "camping", caption: "View from the top", url: "assets/img/camping_03.jpg" },
        { id: 9,  category: "camping", caption: "on the trail",      url: "assets/img/camping_04.jpg" },
        { id: 10, category: "camping", caption: "Our camping spot",  url: "assets/img/camping_05.jpg" },
        { id: 11, category: "camping", caption: "RV life",           url: "assets/img/camping_06.jpg" },
        { id: 12, category: "camping", caption: "Hiking trip 2017",  url: "assets/img/camping_07.jpg" },
        { id: 13, category: "library", caption: "Big library",       url: "assets/img/library_01.jpg" },
        { id: 14, category: "Library", caption: "Stacks",            url: "assets/img/library_02.jpg" },
        { id: 15, category: "Library", caption: "Saturday Afternoon",url: "assets/img/library_03.jpg" },
        { id: 16, category: "Library", caption: "Local library",     url: "assets/img/library_04.jpg" },
        { id: 17, category: "Library", caption: "Nice Library",      url: "assets/img/library_05.jpg" }
    ];
    
    getImages() {
        return this.visibleImages = this.IMAGES.slice(0);
    }

    getImage(id: number) {
        return this.IMAGES.slice(0).find(image => image.id == id)
    }
} 



