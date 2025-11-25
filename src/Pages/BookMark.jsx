import React, { useEffect, useState } from 'react';
import { deleteBlogs, getBlogs } from '../DataSet';
import BlogCart from '../Components/BlogCart';
import EmptyState from '../Components/EmptyState';

const BookMark = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, []);

    const handleDelete = (id) => {
        deleteBlogs(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    };

    if (blogs.length < 1) {
        return (
            <EmptyState 
                message={"No Bookmarks Available"} 
                address={"/blogs"} 
                label={"Browse Blogs"}
            />
        );
    }

    return (
        <div className="min-h-screen bg-base-100 py-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-base-content mb-4">
                        Your <span className="text-primary">Bookmarks</span>
                    </h1>
                    <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
                        All your saved articles in one place. Quickly access your favorite content anytime.
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-center items-center gap-6 mt-6">
                        <div className="bg-primary/10 px-4 py-2 rounded-lg">
                            <span className="text-2xl font-bold text-primary">{blogs.length}</span>
                            <span className="text-base-content/60 ml-2">saved articles</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bookmarks Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {blogs.map(blog => (
                        <BlogCart 
                            handleDelete={handleDelete} 
                            deletable={true} 
                            key={blog.id} 
                            blog={blog}
                        />
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            {blogs.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="text-center bg-base-200 rounded-2xl p-6">
                        <p className="text-base-content/60">
                            💡 Tip: Click the delete icon to remove articles from your bookmarks
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookMark;