export interface RecipeSum {
  id: string;
  title: string;
}

export interface RecipeDetails{
  id: string;
  title: string;
  image: string;
  ingredients: string;
  instruction: string;

}

export class RecipeModel{
  constructor(
    public title: string,
    public image: string,
    public ingredients: string,
    public instruction: string
    )
  {}
}
