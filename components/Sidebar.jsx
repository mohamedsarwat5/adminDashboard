"use client"
import { StoreContext } from '@/StoreContextProvider/StoreContextProvider';
import { Bell, DollarSign, House, Info, Mail, Menu, Settings, ShoppingBag, ShoppingCart, Users, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const ICONS = {
  House,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Mail,
  Users,
  Bell,
  Info,
}

export default function Sidebar() {
    const { menuOpen, setMenuOpen } = useContext(StoreContext);

  const [open, setOpen] = useState(true);
  const [sidBarItems, setSidBarItems] = useState([])
  const pathname = usePathname()
  useEffect(() => {
    fetch(`/data/data.json`)
      .then(res => res.json())
      .then(data => setSidBarItems(data.sidebarItems))
      .catch(err => console.log(err))
  }, [])

  return (<>
    <div className={`relative z-10 transition-all duration-300 ease-in-out hidden lg:flex shrink-0  ${open ? 'w-64' : 'w-20'} `}>
      <div className=' h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f] w-full '>
        <button className='p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer ' onClick={() => setOpen(!open)}><Menu size={24} /></button>
        <nav className='mt-8 flex-1'>
          {sidBarItems?.map((item, index) => {
            const IconComponent = ICONS[item.icon];
            return (
              <Link key={index} href={item.href}>
                <div className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors duration-300 mb-2  ${pathname === item.href ? 'bg-[#2f2f2f]' : ''}`}>
                  <IconComponent size={20} style={{ minWidth: "20px" }} />
                  {open && <span
                    className={`ml-4 whitespace-nowrap transition-all duration-300 ${open ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}
                  >
                    {item.name}
                  </span>
                  }
                </div>
              </Link>
            )
          })}
        </nav>
      </div>

    </div>

    {/* mobile sidebar */}

    <div className={`${menuOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300 ease-in-out fixed top-0 bottom-0 end-0 w-9/12 bg-[#121212] z-40 px-4 `}>
      <button onClick={()=>setMenuOpen(false)} className='absolute top-4 right-4 p-2 rounded-full hover:bg-[#1e1e1e] transition-colors max-w-fit cursor-pointer '><X size={24} /></button>

      <nav className='mt-16  '>
        {sidBarItems?.map((item, index) => {
          const IconComponent = ICONS[item.icon];
          return (
            <Link key={index} href={item.href} onClick={()=>setMenuOpen(false)}>
              <div className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors duration-300 mb-2  ${pathname === item.href ? 'bg-[#2f2f2f]' : ''}`}>
                <IconComponent size={20} style={{ minWidth: "20px" }} />
                <span
                  className={`ml-4 whitespace-nowrap transition-all duration-300 `}
                >
                  {item.name}
                </span>

              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  </>);
}