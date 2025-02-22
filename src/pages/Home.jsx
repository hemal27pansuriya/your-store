import { ChevronRight, Heart, Menu, Search, ShoppingCart } from 'lucide-react'

const Home = () => {
    const categories = [
        'Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports', 'Books'
    ];

    const featuredProducts = [
        { id: 1, name: 'Product 1', price: 99.99, image: 'https://images.unsplash.com/photo-1726137570707-0c03e2867b16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' },
        { id: 2, name: 'Product 2', price: 149.99, image: 'https://images.unsplash.com/photo-1739382121445-19b3460a9e7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
        { id: 3, name: 'Product 3', price: 79.99, image: 'https://plus.unsplash.com/premium_photo-1734626880757-a107821e718e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Product 4', price: 199.99, image: 'https://images.unsplash.com/photo-1740098594279-8f54148fa43d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' },
    ];

    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* Header Section */}
            <header className='bg-white shadow-sm'>
                {/* add mx-auto if required */}
                <div className='container px-5 py-5'>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className='text-2xl font-bold text-blue-600'>
                            YourStore
                        </a>

                        {/* Search Bar */}
                        <div className='flex-1 items-center mx-8 max-w-2xl'>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder='Search Product...'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                <Search className='absolute right-3 top-2.5 hover:cursor-pointer text-gray-500' size={20} />
                            </div>
                        </div>

                        {/* Navigation options */}
                        <div className='flex items-center space-x-4'>
                            <button className='p-2 hover:bg-gray-100 rounded-full'>
                                <Heart size={24} className='text-gray-600' />
                            </button>
                            <a href="/cart" className='p-2 hover:bg-gray-100 rounded-full'>
                                <ShoppingCart size={24} className='text-gray-600' />
                            </a>
                            <button className='md:hidden p-2 hover:bg-gray-100 rounded-full'>
                                <Menu size={24} className='text-gray-600' />
                            </button>
                        </div>
                    </div>
                </div>
            </header >

            {/* Hero Section */}
            <section className='bg-blue-600 text-white py-16'>
                <div className='container mx-auto px-10'>
                    <div className='max-w-2xl'>
                        <h1 className='text-4xl font-bold mb-4'>Welcome to YourStore</h1>
                        <p className='text-xl mb-8'>Discover amazing products at great prices</p>
                        <a
                            href="/shop"
                            className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-100'
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className='py-12'>
                <div className='container mx-auto px-10'>
                    <h2 className='text-2xl font-semibold mb-8 justify-self-center'>Shop By Category</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {categories.map(category => (
                            <a
                                key={category}
                                href={`/shop?category=${category.toLowerCase()}`}
                                className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200'
                            >
                                <div className='flex items-center justify-between'>
                                    <span className='font-medium'>{category}</span>
                                    <ChevronRight size={20} className='text-gray-400' />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className='py-12 bg-white'>
                <div className='container mx-auto px-10'>
                    <h2 className='text-2xl font-semibold mb-8 justify-self-center'>Featured Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {featuredProducts.map(product => (
                            <a
                                key={product.id}
                                href={`/product/${product.id}`}
                                className='group'
                            >
                                <div className='bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className='w-full h-48 object-cover rounded-t-lg'
                                    />
                                    <div className='p-4'>
                                        <h3 className='font-medium text-gray-900 group-hover:text-blue-600'>
                                            {product.name}
                                        </h3>
                                        <p className='text-lg font-semibold text-blue-600 mt-2'>
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Home