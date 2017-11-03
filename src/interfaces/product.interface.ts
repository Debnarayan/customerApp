
export interface Order{
    id:number,
    category_id:number,
    name:string,
    price:number,
    quantity?:number
}

export interface Product extends Order{
    image_path?:string,
    image_name?:string,
    description?:string
}

export interface Category{
    product_category_id: number,
    product_category_name: string
}