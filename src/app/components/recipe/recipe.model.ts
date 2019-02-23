export class Recipe {
  //private id: integer;
  public name: string;
  public description: string;
  public imagePath: string;
  public item: any[];

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;

  }
}
