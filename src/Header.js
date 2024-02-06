import { useState } from 'react';

const Header = () => {

    function initialNavItems(){
        const navBarItems =[
            {
                id:1,
                navItem:'Home'
            },
            {
                id:2,
                navItem:'Gallery'
            },
            {
                id:3,
                navItem:'Contact Us'
            },
            {
                id:4,
                navItem:'Location'
            },
        ]
        console.log(navBarItems);
        return navBarItems;
    }
    const [navItem,] = useState(()=>initialNavItems())
    return(
        <header className='navBarul'>
        <ul >{navItem.map(item=>(
            <li key={item.id} className='navBarLi'>
                <label>{item.navItem}</label>
            </li>
        ))}
        </ul>
        </header>
    )
}

export default Header;