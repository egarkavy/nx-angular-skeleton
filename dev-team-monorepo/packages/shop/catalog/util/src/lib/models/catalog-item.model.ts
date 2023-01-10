export type CatalogItem = {
    id: number;
    name: string;
    price: number;
    img: string;
    specs: {
        height: number;
        weight: number;
        skinTone: string;
        isAlive: boolean;
        jobsDone: number;
        rating: 1 | 2 | 3 | 4 | 5
    }
}