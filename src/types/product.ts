import { Category } from "./category";
import { Color } from "./color";
import { Metric } from "./metric";

export type Product = {
  id: number;
  name: string;
  category: Category;
  color: Color;
  capacity: number;
  metric: Metric;
};
