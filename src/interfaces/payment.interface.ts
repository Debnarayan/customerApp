export interface Payment{
    amount:string,
    currency?:string,
    description?:string,
    intent?:string
}

export interface Card{
    card_number:number,
    cardholder_name:string,
    card_type?:string,
    valid_to_month:number,
    valid_to_year:number,
    cvv?:number
}

export interface Bill{
    total_price:number,
    total_quantity?:number
}