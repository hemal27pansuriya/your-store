import { useState } from "react"
import { categories, filterOptions, products } from "../shop-data"
import { Grid, List, SlidersHorizontal } from "lucide-react"

const Shop = () => {
    const [filtersVisible, setFiltersVisible] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedPriceRange, setSelectedPriceRange] = useState(null)
    const [sortBy, setSortBy] = useState('featured')
    const [viewMode, setViewMode] = useState('grid')

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Shop Header */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-10 py-8">
                    <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
                    <div className="flex items-center gap-1 mt-2 text-gray-600">
                        <a href="/" className="hover:text-blue-600">Home</a>
                        <span>/</span>
                        <span className="text-gray-900">Shop</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-10 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className={`lg:w-1/4 ${filtersVisible ? 'block' : 'hidden lg:block'}`}>

                        {/* Categories */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`w-full px-2 py-1.5 text-left rounded ${selectedCategory === 'all' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                >
                                    All Categories
                                </button>
                                {Object.entries(categories).map(([key, category]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedCategory(key)}
                                        className={`w-full px-2 py-1.5 text-left rounded ${selectedCategory === key ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Ranges */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                            <div className="space-y-2">
                                {filterOptions.priceRanges.map((range, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedPriceRange(range)}
                                        className={`w-full text-left px-2 py-1.5 ${selectedPriceRange === range ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                    >
                                        {range.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:w-3/4">

                        {/* Toolbar */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <button
                                    onClick={() => setFiltersVisible(!filtersVisible)}
                                    className="lg:hidden flex items-center gap-2 text-gray-600 hover:text-blue-600"
                                >
                                    <SlidersHorizontal size={20} />
                                    Filters
                                </button>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded ${viewMode === 'grid' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            <Grid size={20} />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded ${viewMode === 'list' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'}`}
                                        >
                                            <List size={20} />
                                        </button>
                                    </div>

                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {filterOptions.sortOptions.map(option => (
                                            <option
                                                value={option.value}
                                                key={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Products list/Grid */}
                        <div className="h-[calc(100vh-200px)] overflow-y-auto">
                            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                                {products.map(product => (
                                    <div
                                        key={product.id}
                                        className={`bg-white rounded-lg shadow-sm overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}
                                    >
                                        <div className={`relative ${viewMode === 'list' ? 'w-48' : ''}`}>
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-48 object-cover"
                                            />
                                            {product.badges && product.badges.length && (
                                                <div className="absolute top-2 left-2 flex gap-1">
                                                    {product.badges.map(badge => (
                                                        <span
                                                            key={badge}
                                                            className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                                                        >
                                                            {badge}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900">{product.name}</h3>
                                            <div className="flex items-center mt-2 gap-2">
                                                <span className="text-lg font-bold text-blue-600">
                                                    ${product.price}
                                                </span>
                                                {product.comparePrice && (
                                                    <span className="text-sm text-gray-500 line-through">
                                                        ${product.comparePrice}
                                                    </span>
                                                )}
                                            </div>
                                            {viewMode === 'list' && (
                                                <p className="mt-2 text-gray-600">{product.description}</p>
                                            )}
                                            <button className="mt-4 w-full bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700 transition duration-200">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop