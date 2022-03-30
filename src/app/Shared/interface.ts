export interface IProduct
{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{rate:number,count:number}
}
export interface IUserData
{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
    checkAgree:boolean;
    isLogin:boolean;
}