// Product Categories and Subcategories
export const categories = {
    electronics: {
        name: 'Electronics',
        subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
    },
    fashion: {
        name: 'Fashion',
        subcategories: ['Men', 'Women', 'Kids', 'Accessories']
    },
    home: {
        name: 'Home & Living',
        subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bath']
    },
    beauty: {
        name: 'Beauty',
        subcategories: ['Skincare', 'Makeup', 'Haircare', 'Fragrance']
    }
};

// Available brands for filtering
export const brands = [
    'Apple', 'Samsung', 'Nike', 'Adidas', 'Sony',
    'LG', 'Dell', 'HP', 'Zara', 'H&M'
];

// Product data
export const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 199.99,
        comparePrice: 249.99,
        category: "electronics",
        subcategory: "Accessories",
        brand: "Sony",
        rating: 4.5,
        reviewCount: 127,
        stock: 23,
        images: ['https://images.unsplash.com/photo-1726137570707-0c03e2867b16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'],
        badges: ["New", "Sale"],
    },
    {
        id: 2,
        name: "Premium Leather Wallet",
        description: "Handcrafted genuine leather wallet with multiple card slots",
        price: 49.99,
        category: "fashion",
        subcategory: "Accessories",
        brand: "Generic",
        rating: 4.8,
        reviewCount: 89,
        stock: 45,
        images: ['https://images.unsplash.com/photo-1726137570707-0c03e2867b16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'],
        badges: ["Bestseller"],
    },
    {
        id: 3,
        name: "Smart LED TV 55\"",
        description: "4K Ultra HD Smart LED TV with HDR",
        price: 699.99,
        comparePrice: 899.99,
        category: "electronics",
        subcategory: "TV",
        brand: "Samsung",
        rating: 4.6,
        reviewCount: 203,
        stock: 12,
        images: ['https://images.unsplash.com/photo-1726137570707-0c03e2867b16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'],
        badges: ["Sale", "Free Shipping"],
    }
];

// Filter options
export const filterOptions = {
    priceRanges: [
        { label: "Under $50", min: 0, max: 50 },
        { label: "$50 - $100", min: 50, max: 100 },
        { label: "$100 - $200", min: 100, max: 200 },
        { label: "$200 - $500", min: 200, max: 500 },
        { label: "Over $500", min: 500, max: Infinity }
    ],
    ratings: [4, 3, 2, 1],
    sortOptions: [
        { label: "Featured", value: "featured" },
        { label: "Price: Low to High", value: "price_asc" },
        { label: "Price: High to Low", value: "price_desc" },
        { label: "Best Rating", value: "rating" },
        { label: "Newest", value: "newest" }
    ]
};