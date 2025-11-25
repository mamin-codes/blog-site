import {useLoaderData } from "react-router";
import placeHolderImg from "../assets/404.jpg"
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, description, published_at, tags,body_html,url } = blog;
    return (
        <div className="   
   mx-auto group hover:no-underline focus:no-underline p-2 dark:bg-gray-50">
            <div
              
                className=""
            >
                <img className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={cover_image || placeHolderImg}
                />
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    {
                        tags.map((tag,index)=> <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>)
                    }
                       
                       
                    </div>
                    
                </div>
                <div className=" space-y-2">
                    <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline cursor-pointer">
                        {title}
                    </a>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                    
                </div>
            </div>

        </div>
    );
};

export default Content;