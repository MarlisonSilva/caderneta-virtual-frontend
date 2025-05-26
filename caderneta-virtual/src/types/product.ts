import { Category } from "./category";
import { Color } from "./color";

export type Product = {
  id: number;
  name: string;
  category: Category;
  color: Color;
  capacity: number;
};
