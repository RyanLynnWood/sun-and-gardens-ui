import {Image} from "./image"; 


export class Media {
 
    private images: Image[];

    constructor(media: any) {
        this.images = media.images;
    }

    getImageByType(type: string): Image {

        return this.images.find(function(image) {
            return image.type === type
        });
    }

}