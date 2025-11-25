import React, { useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router';
import { MdBookmarkAdded } from "react-icons/md";
import { saveBlog } from '../DataSet';

const BlogDea = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const blog = useLoaderData();

    const handleBookMark = (blog) => {
        saveBlog(blog)
    }

    const {
        title,
        description,
        reading_time_minutes,
        positive_reactions_count,
        published_at,
        user,
        tags,
        cover_image
    } = blog;

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-base-200 to-base-300 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Author Info & Stats */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-base-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-4">
                            <img 
                                src={user.profile_image_90 || "https://source.unsplash.com/100x100/?portrait"} 
                                alt={user.name}
                                className="w-16 h-16 rounded-full border-4 border-primary/20"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-base-content">{user.name}</h3>
                                <p className="text-base-content/60">{new Date(published_at).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{reading_time_minutes}</div>
                                <div className="text-sm text-base-content/60">min read</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">{positive_reactions_count}</div>
                                <div className="text-sm text-base-content/60">views</div>
                            </div>
                            <button 
                                onClick={() => handleBookMark(blog)}
                                className="bg-primary hover:bg-primary-focus text-primary-content p-3 rounded-full 
                                         transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                                aria-label="Save to bookmarks"
                            >
                                <MdBookmarkAdded size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Navigation Tabs */}
                <div className="flex items-center border-b border-base-300 mb-8">
                    <Link
                        onClick={() => setTabIndex(0)}
                        to={""}
                        className={`flex items-center gap-3 px-6 py-4 font-semibold border-b-2 transition-all duration-300 ${
                            tabIndex === 0 
                            ? "border-primary text-primary bg-primary/5" 
                            : "border-transparent text-base-content/60 hover:text-base-content"
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Article Content</span>
                    </Link>
                    
                    <Link
                        onClick={() => setTabIndex(1)}
                        to={"author"}
                        className={`flex items-center gap-3 px-6 py-4 font-semibold border-b-2 transition-all duration-300 ${
                            tabIndex === 1 
                            ? "border-primary text-primary bg-primary/5" 
                            : "border-transparent text-base-content/60 hover:text-base-content"
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>About Author</span>
                    </Link>
                </div>

                {/* Outlet Content */}
                <div className="min-h-[400px]">
                    <Outlet />
                </div>

                {/* Tags Section */}
                <div className="mt-12 pt-8 border-t border-base-300">
                    <h3 className="text-xl font-semibold text-base-content mb-4">Article Tags</h3>
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-content 
                                         rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDea;