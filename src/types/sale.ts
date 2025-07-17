import { SoldProduct } from "./sold_product";
import { User } from "./user";

export interface Sale {
    id: string;
    customer: User;
    sale_date: string; 
    installments_quantity: number;
    total: number;  
    sold_products: SoldProduct[];
}
