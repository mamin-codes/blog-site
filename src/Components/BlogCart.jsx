import { Link } from "react-router";
import placeHolderImg from "../assets/404.jpg"
import { MdDeleteForever } from "react-icons/md";

const BlogCart = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;
  
  return (
    <div className="relative group">
      <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                    border border-base-300 hover:border-primary/30 hover:scale-[1.02] 
                    overflow-hidden h-full flex flex-col">
        
        {/* Image Section */}
        <Link to={`/blog/${id}`} className="block overflow-hidden">
          <img
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            src={cover_image || placeHolderImg}
            alt={title}
          />
        </Link>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          <Link to={`/blog/${id}`}>
            {/* Date */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {new Date(published_at).toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-base-content line-clamp-2 mb-3 
                         group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-base-content/70 text-sm leading-relaxed line-clamp-3 flex-1">
              {description}
            </p>
          </Link>

          {/* Read More Link */}
          <div className="mt-4 pt-3 border-t border-base-300">
            <Link 
              to={`/blog/${id}`}
              className="inline-flex items-center gap-1 text-primary font-medium text-sm 
                       hover:gap-2 transition-all duration-300 group/link"
            >
              Read More
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      {deletable && (
        <button
          onClick={() => handleDelete(id)}
          className="absolute -top-2 -right-2 bg-error text-error-content p-2 rounded-full 
                   shadow-lg hover:scale-110 hover:shadow-xl active:scale-95 
                   transition-all duration-300 z-10"
          aria-label="Delete blog"
        >
          <MdDeleteForever size={18} />
        </button>
      )}
    </div>
  );
};

export default BlogCart;