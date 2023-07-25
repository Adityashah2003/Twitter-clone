import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";

export default function Widgets({newsRes , randUsers}) {
  const [artnum,setartnum]=useState(3);
  const [randNum,setrandNum]=useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5" >
        <div className="w-[90%] xl:w-[95%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
                <input className="absolute inset-0 rounded-full pl-11 border-grey-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 " type="text" placeholder="Search Twitter"/>
            </div>
        </div>

        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[95%]">
          <h4 className="font-bold text-xl px-4">Whats happening</h4>
          <AnimatePresence >
            {newsRes.slice(0,artnum).map((article) => (
              <motion.div key={article.title} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
                <News key={article.title} article = {article}/>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <button onClick={()=>setartnum(artnum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
        </div>

        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[95%] sticky top-16">
          <h4 className="font-bold text-xl px-4">Who to follow</h4>

          <AnimatePresence>
          {randUsers.slice(0,randNum).map((randomuser) => (
            <motion.div key={randomuser.login.username} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>          

            <div key={randomuser.login.username} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 hover:bg-gray-200 transition duration-400 ease-out">
              <img src={randomuser.picture.thumbnail} alt="img"  width="50" className="rounded-full ml-4"/>
              <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[14px] truncate">{randomuser.login.username}</h4>
                <h5 className="text-[13px] text-gray-500 truncate ">{randomuser.name.first+ " " + randomuser.name.last}</h5>
              </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
            </div>
            </motion.div>
          ))}
          </AnimatePresence>
          <button onClick={()=>setrandNum(randNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>

        </div>
    </div>
  )
}
