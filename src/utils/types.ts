export type ProductTop = {
  id: number;
  name: string;
  urlImg: string;
  code:string;
  urlManual: string;
  description: string;
  complement: string;
  logo:string;
  ranking: number;
};

export type Products = {
  id: number;
  name: string;
  code: string;
  urlImg: string;
  urlManual: string;
  description: string;
  complement: string;
  logoUrl: string;
  

}


export type Category = {
  id: number;
  name: string;
  image: string;
};

export type minProductPage = {
  content: minProductCarCat[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export type minProductCarCat = {
  productId: number;
  name: string;
  code: string;
  image: string;
  logo: string;
  description: string;
  manualSec: string;
  categoryId:number;
  categoria: string;
  simbolo: string;
}