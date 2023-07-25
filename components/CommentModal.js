import { useRecoilState } from "recoil"
import {modalState,postIdState} from "../atom/modalAtom"
import Modal from "react-modal"
import {XIcon,PhotographIcon,EmojiHappyIcon} from "@heroicons/react/outline"
import { useEffect, useState } from "react";
import Moment from 'react-moment';
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";

export default function CommentModal() {
    const {data:session}=useSession();
    const [open,setOpen] = useRecoilState(modalState);
    const [postId] = useRecoilState(postIdState);
    const [post,setPost] = useState({});
    const [input,setInput] = useState("");

    useEffect(()=>{
      onSnapshot(doc(db,"posts",postId),(snapshot)=>{setPost(snapshot);
      });
    },[postId,db]);
    function sendComment(){

    }

  return (
    <div>
        <h1>CommentModal</h1>
        {open && (
          <Modal isOpen={open} onRequestClose={()=> setOpen(false)}
            className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-400 rounded-xl shadow-md-2">
            <div className="p-1">
                <div className="border-b border-gray-200 py-2 px-1.5">
                    <div onClick={()=> setOpen(false)} className="hoverEffect w-10 h-10 items-center justify-center flex ">
                      <XIcon className="h-[23px] text-gray-700 p-0"/>
                    </div>
                </div>
                <div className="p-2 flex  iterms-center space-x-1 relative">
                  <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300"/>
                  <img className='h-11 w-11 rounded-full mr-4' src={post?.data()?.userImg } alt='usrImg' ></img>
                  <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post?.data()?.name}</h4>
                  <span className='text-sm sm:text-[15px] '>@{post?.data()?.username}-</span>
                  <span className='text-sm sm:text-[15px] hover:underline'>
                    <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                  </span>
                </div>
                <p className="text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2">{post?.data()?.text}</p>
                <div className='flex border-gray-200 p-m space-x-3'>
                  <img className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95 ml-2 mt-2" src={session.user.image} alt="pfp" />
                  <div className='w-full divide-y divide-gray-200'>
                    <div>
                      <textarea className='w-full border-none mr-2 focus:ring-0 text-lg placeholder-gray-500 tracking-wide min-h-[50px] text-gray-700' rows="2" placeholder='Tweet your reply' value={input} onChange={(e)=> setInput(e.target.value)} />
                    </div>
                    <div className='flex items:center justify-between pt-2.5'>
                      <div className='flex'>
                        <div 
                        // onClick={()=>filePickerRef.current.click()}
                        >
                          <PhotographIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                          {/* <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/> */}
                        </div>
                          <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                      </div>
                      <button onClick={sendComment} disabled={!input.trim()} className='bg-blue-400 text-white mb-3 mr-2 px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-95'>Reply</button>
                    </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
    </div>
  )
}