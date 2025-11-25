import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import BlogCart from '../Components/BlogCart';
import Loader from '../Components/Loader';

const Blogs = () => {
    const navigation = useNavigation()
    const blogs = useLoaderData()
    if( navigation.state === "loading") return <Loader></Loader>
    
    return (
        <div className="min-h-screen bg-base-100">
            <section className="py-8">
                <div className="container max-w-7xl mx-auto px-4">
                    {/* Featured Blog - Improved Design */}
                    <div className="mb-12">
                        <div className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="lg:grid lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-7">
                                    <img 
                                        src={blogs[0].cover_image} 
                                        alt={blogs[0].title}
                                        className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-medium px-2 py-1 bg-primary text-primary-content rounded-full">
                                            Featured
                                        </span>
                                        <span className="text-sm text-base-content/60">
                                            {new Date(blogs[0].published_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <Link 
                                        to={`/blog/${blogs[0].id}`} 
                                        className="text-2xl lg:text-3xl font-bold text-base-content hover:text-primary transition-colors duration-300 mb-4 line-clamp-2"
                                    >
                                        {blogs[0].title}
                                    </Link>
                                    <p className="text-base-content/70 leading-relaxed mb-4 line-clamp-3">
                                        {blogs[0].description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm text-primary font-medium">Read More →</span>
                                        <div className="flex items-center gap-1 text-sm text-base-content/50">
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-base-content">Latest Articles</h2>
                            <span className="text-base-content/60">{blogs.length - 1} articles</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogs.slice(1, 19).map(blog => (
                                <BlogCart key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center">
                        <button 
                            type="button" 
                            className="px-8 py-3 bg-primary text-primary-content font-semibold rounded-lg hover:bg-primary-focus transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                            Load More Posts
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;