export interface Pizza{
  _id?:string;
  id:number;
  name:string;
  desc:string;
  picture:string;
  price:number;
  ingredient_ids:Array<Object>
}
