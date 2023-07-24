import React from 'react';
import Image from 'next/image';
import {HashtagIcon, HomeIcon, UsersIcon} from "@heroicons/react/solid";
import {BellIcon, BookmarkIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, InboxIcon} from "@heroicons/react/outline";
import Menu from "./Menu";
import { useSession,signIn, signOut } from 'next-auth/react';

export default function Sidebar(){

    const {data:session} = useSession();
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full '>
            {/* Twitter logo */}
            <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
                <Image width="50" height="50" src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"></Image>
            </div>

            {/* Menu */}
            <div className='mt-4 mb-2.5 xl:items-start'>
                <Menu text="Home" Icon={HomeIcon} active/>
                <Menu text="Explore" Icon={HashtagIcon}/>
                {session && (
                    <>
                    <Menu text="Notification" Icon={BellIcon}/>
                    <Menu text="Message" Icon={InboxIcon}/>
                    <Menu text="Bookmarks" Icon={BookmarkIcon}/>
                    <Menu text="Profile" Icon={UsersIcon}/>
                    <Menu text="More" Icon={DotsCircleHorizontalIcon}/>
                    </>
                )}
                
            </div>

            {/* button */}
            {session ? (
                    <>
                    <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

                    {/* mini-profile */}
                        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
                            <img onClick={signOut} src={session.user.image} alt="pfp" className='h-10 w-10 xl:mr-2 rounded-full'></img>
                            <div className='leading-5 hidden xl:inline'>
                                <h4 className='font-bold'>{session.user.name}</h4>
                                <p className='text-grey-500'>@{session.user.username}</p>
                            </div>
                            <DotsHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
                        </div>
                    </>
                ):(
                    <button className='bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline' onClick={signIn}
                    >Sign in </button>
                )}
            
        </div>
    )
}