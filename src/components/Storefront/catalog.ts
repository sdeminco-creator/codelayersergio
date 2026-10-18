import { IProduct } from 'models';

export interface StoreProduct {
  sourceId: number;
  title: string;
  fit: string;
  colour: string;
  price: number;
  installments: number;
  image: string;
  freeShipping: boolean;
}

export const storeProducts: StoreProduct[] = [
  {
    sourceId: 0,
    title: 'Cropped Stay Groovy off white',
    fit: 'Cropped fit',
    colour: 'Off white',
    price: 10.9,
    installments: 9,
    image: '/assets/81cd0.png',
    freeShipping: true,
  },
  {
    sourceId: 11,
    title: 'Basic Cactus White T-shirt',
    fit: 'Regular fit',
    colour: 'White',
    price: 13.25,
    installments: 3,
    image: '/assets/fa223.png',
    freeShipping: true,
  },
  {
    sourceId: 4,
    title: 'Everyday Black Hoodie',
    fit: 'Relaxed fit',
    colour: 'Black',
    price: 29.9,
    installments: 3,
    image: '/assets/8aaff.png',
    freeShipping: false,
  },
  {
    sourceId: 13,
    title: 'Little Things Graphic T-shirt',
    fit: 'Regular fit',
    colour: 'Off white',
    price: 14.9,
    installments: 3,
    image: '/assets/c9f5e.png',
    freeShipping: true,
  },
  {
    sourceId: 12,
    title: 'Essential Oversized Black T-shirt',
    fit: 'Oversized fit',
    colour: 'Black',
    price: 15.9,
    installments: 3,
    image: '/assets/57c32.png',
    freeShipping: false,
  },
  {
    sourceId: 14,
    title: 'Off Duty Grey Sweatshirt',
    fit: 'Relaxed fit',
    colour: 'Grey marl',
    price: 26.9,
    installments: 3,
    image: '/assets/5f492.png',
    freeShipping: true,
  },
  {
    sourceId: 15,
    title: 'Easy Days Sage T-shirt',
    fit: 'Regular fit',
    colour: 'Sage',
    price: 12.9,
    installments: 3,
    image: '/assets/90fb4.png',
    freeShipping: false,
  },
  {
    sourceId: 1,
    title: 'Weekend Washed Charcoal T-shirt',
    fit: 'Oversized fit',
    colour: 'Charcoal',
    price: 17.9,
    installments: 3,
    image: '/assets/a939d.png',
    freeShipping: false,
  },
];

export const toCartProduct = (
  storeProduct: StoreProduct,
  products: IProduct[]
): IProduct => {
  const source = products.find(({ id }) => id === storeProduct.sourceId);

  return {
    ...(source || {
      id: storeProduct.sourceId,
      sku: storeProduct.sourceId,
      description: '',
      availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
      currencyId: 'USD',
      currencyFormat: '$',
      style: storeProduct.colour,
      isFreeShipping: storeProduct.freeShipping,
    }),
    title: storeProduct.title,
    price: storeProduct.price,
    installments: storeProduct.installments,
    style: storeProduct.colour,
    isFreeShipping: storeProduct.freeShipping,
  };
};

export const getStoreProduct = (id: number) =>
  storeProducts.find((product) => product.sourceId === id) || storeProducts[0];
