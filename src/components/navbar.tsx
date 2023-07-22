import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Navbar(){
    return (
        <nav>
            <Image
                src={logo}
                alt="Hackteer Logo Icon"
            />
    </nav>
)
}