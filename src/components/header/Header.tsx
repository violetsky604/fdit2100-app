import { NavLink } from 'react-router';
import { MegaphoneIcon } from '@heroicons/react/24/solid';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAppStore } from '@/lib/appStore';
import { type ClassnameProps } from '@/lib/types/post';
import styles from './header.module.css';
import HamburgerMenu from '@/components/header/HamburgerMenu';


export default function Header() {
    const { user, isAuthenticated } = useAppStore();
    return (
        <header className={styles.header}>
            <HamburgerMenu />
            <div className="hidden md:flex">
                <h1 className="mr-8">
                    <NavLink to="/" className={`flex text-lg/1.3 font-extrabold ${styles.navlink}`}>
                        <MegaphoneIcon className="size-6 mr-3" /> Connect
                    </NavLink>
                </h1>
                <nav>
                    <ul className="flex gap-10">
                        <li><NavLink className={({ isActive }: ClassnameProps) => isActive ? styles.navlinkActive : styles.navlink} to="/members">Members</NavLink></li>
                        <li><NavLink className={({ isActive }: ClassnameProps) => isActive ? styles.navlinkActive : styles.navlink} to="/notifications">Notifications</NavLink></li>
                        <li><NavLink className={({ isActive }: ClassnameProps) => isActive ? styles.navlinkActive : styles.navlink} to="/messages">Messages</NavLink></li>
                    </ul>
                </nav>
            </div>
            {isAuthenticated && user ? (
            <Avatar className="size-10">
                <AvatarImage src={`avatars/${user.id}.png` } />
                <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            ) : (
                <NavLink to="/login" className={`flex text-lg/1.3 font font-extrabold ${styles.navlink}`}>Sign In</NavLink>

            )}
        </header>
    );
}
