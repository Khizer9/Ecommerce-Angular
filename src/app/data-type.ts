export interface SignUp{
    name: string,
    email: string,
    password: string
}

export interface login{
    email: string,
    password: string,
}

export interface Product{
    id: number,
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image:string,
    quantity: undefined | number
}