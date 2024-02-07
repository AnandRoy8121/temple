import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {
    const path = usePathname()
  return (
    <Link href={link.url}><li className={`cursor-pointer hover:scale-105 ${path === link.url ? ' bg-white text-[#f15c1d] px-1 rounded-md':''}`}>{link.title}</li></Link>
  )
}

export default NavLink