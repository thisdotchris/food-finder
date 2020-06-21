export class Food {
  constructor(
    public _id: string,
    public name: string,
    public ingredients: Array<any>,
    public procedure: string,
    public imgPath: string,
    public calories: number,
    public foodType: any
  ) {}
}
