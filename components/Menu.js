import React from 'react'

export default function Menu({text,Icon,active}) {
  return (
    <div className='hoverEffect flex items-center text-grey-700 justify-center xl:justify-start text-lg space-x-3'>
        <Icon className="h-7"/>
        <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
    </div>
  )
}
