import { Category } from "./category";
import { Color } from "./color";

export type Produto = {
  id: number;
  name: string;
  category: Category;
  color: Color;
  capacity: number;
};
