import MenuLink from '../MenuLink';
import styles from './Menu.module.css';


export default function Menu() {
    

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                        Início
                </MenuLink>
                <MenuLink to='/sobreMim'>
                        Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}