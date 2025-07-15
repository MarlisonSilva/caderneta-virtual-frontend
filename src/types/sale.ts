export interface Sale {
    id: string;
    customer: string;
    date: string; 
    installments: number;
    total: number;  
    products: string[];
}
