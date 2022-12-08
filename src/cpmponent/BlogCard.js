import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex  flex-col text-indigo-900'>
        <div className=' mx-auto'>
          <img width="400px" className="h-[200px] rounded-3xl" src={blog.img} alt="" />
        </div>
        <h1 className='font-bold text-center text-2xl'>{blog.title}</h1>
        <p className=' font-semibold mb-3'>{blog.blog}</p>
        <div>
            <h4><span className='font-bold'>Author:</span>{blog.name}</h4>
            <p>post:<span className='ml-2'>{blog.postDate}</span></p>
            <p>update:<span className='ml-2'>{blog.updateDate}</span></p>
        </div>
        {/* <div className=' flex-1'>
          <ul className='space-y-2'>
            {product.keyFeature.map((feature) => {
              return (
                <li key={feature} className='text-sm '>
                  {feature}
                </li>
              );
            })}
          </ul>
        </div> */}
        <div className='flex gap-2 mt-5'>
          {/* {!pathname.includes("cart") && (
            <button
              onClick={() => dispatch(addToCart(product))}
              className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            >
              Add to cart
            </button>
          )}
  
          {!pathname.includes("cart") && (
            <button
              title='Add to wishlist'
              className='bg-indigo-500  py-1 px-2 rounded-full'
            >
              <BiListPlus className='text-white' />
            </button>
          )}
          {pathname.includes("cart") && (
            <button
              title='Remove'
              onClick={() => dispatch(removeFromCart(product))}
              className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
            >
              <p>Remove</p>
            </button>
          )} */}
        </div>
      </div>
    );
};

export default BlogCard;