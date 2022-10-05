import React, { useState } from 'react';
import Link from '../link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routers = [
        { id: 1, name: 'home', path: '/home' },
        { id: 2, name: 'products', path: '/products' },
        { id: 3, name: 'orders', path: '/orders' },
        { id: 4, name: 'contact', path: '/contact' },
        { id: 5, name: 'about', path: '/about' },
        { id: 6, name: 'others', path: '/others' }
    ]
    return (
        <nav className='bg-gray-200 w-full'>

            <div className='md:hidden'> {
                open ?
                    <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6 " />
                    : <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6 " />
            }

            </div>
            <ul className={`bg-gray-200 md:flex justify-center w-full absolute duration-500 ease-in md:static ${open ? 'top-6' : 'top-[-150px]'}`}>
                {
                    routers.map(router => <Link key={router.id} router={router}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;