export type ProductTop = {
  id: number;
  name: string;
  urlImg: string;
  code: string;
  urlManual: string;
  description: string;
  complement: string;
  logo: string;
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
};

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
};

export type minProductCarCat = {
  productId: number;
  name: string;
  code: string;
  image: string;
  logo: string;
  description: string;
  manualSec: string;
  categoryId: number;
  categoria: string;
  simbolo: string;
};

export type minModelCar = {
  mid: number;
  name: string;
  de: string;
  ate: string;
  montadora: string;
  categoryId: number;
  categoria: string;
  productId:number;
  image: string;
};

export type ProductCar = {
  id: number;
  modelId: number;
  modelName: string;
  modelYear: number;
  productId: number;
  productName: string;
  productCode: string;
  productImg: string;
  logoUrl: string;
  quantity: string;
  observation: string;
  complement: string;
  vc: number;
  vi: number;
  diagram: string;
  manualSec: string;
  video: string;
  categoryId: number;
  categoryName: string;
  categoryImage: string;
  portaD: number;
  porta2: number;
  porta4: number;
  vi0: number;
  vi1: number;
  vi2: number;
  vi4: number;
  combo: number;
  nConvCombo: number;
};

export type minModelPage = {
  content: minModelCar[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export type minModeloCarAno = {
  mid: number;
  name: string;
  ano:string;
  montadora: string;
  categoryId: number;
  categoria: string;
  productId:number;
  image:string;
 
};

export type minModelPageAno = {
  content: minModeloCarAno[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}