import toast, { Toaster } from 'react-hot-toast';

// Get blogs
export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
};

// Save blog
export const saveBlog = (blog) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id);

    if (isExist) {
        return toast.error("Already BookMarked!");
    }

    blogs.push(blog); // <-- FIXED
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success("Blog BookMarked Successfully");
};

// Delete blog
export const deleteBlogs = (id) => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success("Blog Removed From BookMark");
};
