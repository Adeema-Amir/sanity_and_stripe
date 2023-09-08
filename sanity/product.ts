/* eslint-disable import/no-anonymous-default-export */

// sanity/pet.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'title'
        },
        {
            name: 'decription',
            type: 'string',
            title: 'decription'
        },
        {
            name: 'product_price',
            type: 'string',
            title: 'Product_price'
        },
        {
            name: 'product_image',
            type: 'image',
            title: 'Product_image',
        },
    ]
}