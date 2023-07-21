import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import React from 'react'

export default function Post({ post }) {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
      {/* image */}
      <img src={post.userimg} alt='usrImg' className='h-11 w-11 rounded-full mr-4'></img>

      {/* right side */}
      <div className='flex-1'>
        {/* header */}
        <div className='flex items-center justify-between mb-2'>
          {/* user-info */}
          <div className='flex items-center space-x-1'>
            <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
            <span className='text-sm sm:text-[15px] '>@{post.username}-</span>
            <span className='text-sm sm:text-[15px] hover:underline'>{post.timestamp}</span>
          </div>
          {/* dot icon */}
          <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
        </div>

        {/* post text */}
        <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post.text}</p>
        {/* post image */}
        {post.img && <img className='rounded-2xl mb-2' src={post.img} alt='pic'></img>}
        {/* icons */}
        <div className='flex justify-between text-gray-500 p-2'>
          <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
          <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100' />
          <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100' />
          <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
          <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
        </div>
      </div>
    </div>
  )
}