import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

export default function Input() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <>
      {session && (
        <div className='flex border-b border-gray-200 p-m space-x-3'>
          <img onClick = {signOut}className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95 ml-2 mt-2" src={session.user.image} alt="pfp" />
          <div className='w-full divide-y divide-gray-200'>
            <div>
              <textarea className='w-full border-none mr-2 focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700' rows="2" placeholder='Ssup?!' />
            </div>
            <div className='flex items:center justify-between pt-2.5'>
              <div className='flex'>
                <PhotographIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
              </div>
              <button className='bg-blue-400 text-white mb-3 mr-2 px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-95'>Tweet</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
