export class Food {
    constructor(
        public id: number,
        public name: string,
        public ingredients: string[],
        public procedure: string,
        public imgPath: string
    ) { }
}