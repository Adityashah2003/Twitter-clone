import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import {db, storage} from "../firebase";
import {addDoc,collection, serverTimestamp, updateDoc,doc} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

export default function Input() {
  const { data: session } = useSession();
  const [input,setInput] = useState("");
  const [selectedFile,setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)
  const [loading,setLoading] = useState(false);

  const sendPost = async ()=>{
    if(loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db,"posts"),{
      id: session.user.uid,
      text: input,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      username: session.user.username,
    });

    const imageRef = ref(storage,`posts/${docRef.id}/image`);
    
    if (selectedFile){
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db,"posts",docRef.id),{
          image:downloadURL,
        })
      });
    }

    setInput("");
    setSelectedFile(null);
    setLoading(false);
  };

  const addImageToPost = (e) => {
  const reader = new FileReader();
  if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
  }

  reader.onload = (readerEvent) => {
    setSelectedFile(readerEvent.target.result); 
  };
};

  return (
    <>
      {session && (
        <div className='flex border-b border-gray-200 p-m space-x-3'>
          <img onClick = {signOut}className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95 ml-2 mt-2" src={session.user.image} alt="pfp" />
          <div className='w-full divide-y divide-gray-200'>
            <div>
              <textarea className='w-full border-none mr-2 focus:ring-0 text-lg placeholder-gray-500 tracking-wide min-h-[50px] text-gray-700' rows="2" placeholder='Ssup?!' value={input} onChange={(e)=> setInput(e.target.value)} />
            </div>
            {selectedFile && (
              <div className='relative'>
                <XIcon 
                onClick={()=>setSelectedFile(null)} 
                className='h-7 text-black absolute cursor-pointer shadow-md shadow-white rounded-full'></XIcon>
                <img src={selectedFile} className={`${loading && "animate-pulse"}`}></img>
              </div>
            )}
            <div className='flex items:center justify-between pt-2.5'>
              {!loading &&
                <>
                  <div className='flex'>
                <div onClick={()=>filePickerRef.current.click()}>
                  <PhotographIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                  <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>
                </div>
                  <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                </div>
                <button onClick={sendPost} disabled={!input.trim()} className='bg-blue-400 text-white mb-3 mr-2 px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-95'>Tweet</button>
                </>
              }
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
