export class Recipe {
  private id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public item: any[];

  constructor(name: string, desc: string, imagePath: string, item: any[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.item = item;
  }
}
