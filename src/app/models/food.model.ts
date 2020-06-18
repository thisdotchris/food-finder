export class Food {
  constructor(
    public _id: string,
    public name: string,
    public ingredients: string[],
    public procedure: string,
    public imgPath: string,
    public calories: number,
    public foodType: any
  ) {}
}
