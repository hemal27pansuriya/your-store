import { ArrowRight, ChevronRight, Heart, Menu, Search, ShoppingCart } from 'lucide-react'

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
            <section className='relative bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
                {/* Background Pattern */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='w-full h-full' style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className='container mx-auto px-10 py-20'>
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className='max-w-2xl lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0'>
                            <h1 className='text-5xl font-bold mb-6 leading-tight'>
                                Discover your life style requirements
                            </h1>
                            <p className='text-xl mb-8 text-blue-100'>
                                Explore our curated collection of premium products at unbeatable prices.
                                Get up to 50% off on new arrivals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="/shop"
                                    className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
                           transform transition-all duration-300 ease-in-out
                            hover:scale-105 hover:shadow-lg active:scale-95"
                                >
                                    Shop Now
                                    <ArrowRight className="ml-2" size={20} />
                                </a>
                                <a
                                    href="/categories"
                                    className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold
                                    transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95'
                                >
                                    Browse Categories
                                </a>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className='lg:w-1/2 flex justify-center'>
                            <div className='relative'>
                                <img
                                    src="https://images.unsplash.com/photo-1740130768424-10c4fb1daaac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Featured Products"
                                    className='rounded-lg shadow-2xl'
                                />

                                {/* Floating Stats Card */}
                                <div className='absolute bg-white -bottom-6 -left-6 text-gray-800 p-6 rounded-lg shadow-xl'>
                                    <div className='flex items-center gap-4'>
                                        <div className='text-center'>
                                            <p className='text-3xl font-bold text-blue-600'>50k+</p>
                                            <p className='text-sm text-gray-600'>Products</p>
                                        </div>
                                        <div className='w-px h-12 bg-gray-200'></div>
                                        <div className='text-center'>
                                            <p className='text-3xl font-bold text-blue-600'>98%</p>
                                            <p className='text-sm text-gray-600'>Happy Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <div className='bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-200'>
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