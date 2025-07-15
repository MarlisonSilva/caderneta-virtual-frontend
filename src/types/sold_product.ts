import { Sale } from "@/types/sale";
import { Product } from "@/types/product";

export interface SoldProduct {
    id: number;
    product: Product;
    sale: Sale;
}