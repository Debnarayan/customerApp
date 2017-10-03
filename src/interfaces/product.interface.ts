
export interface Order{
    id:number,
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
    id: number,
    name: string
}