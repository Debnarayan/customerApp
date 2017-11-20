export interface ArtworkCategory{
    id:number,
    name:string
}

export interface Artwork{
    image_id:number,
    image_name:string,
    category_id:number
}

export interface Recipient{
    email:string,
    message?:string
}

export interface Gift{
    id: number,
    image_id?: number,
    image_name?: string,
    category_id?: number
    balance: number,
    expired_on?: string,
    sender_name?: string,
    sender_email?: string;
    message?:string
}