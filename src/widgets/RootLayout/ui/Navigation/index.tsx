import { NAV_ITEMS } from '../../const';
import { NavLink as RouterNavLink } from 'react-router';

import s from './Navigation.module.css';
import clsx from 'clsx';

export const Navigation = () => {
    return (
        <nav>
            <ul className={s.list}>
                {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                        <RouterNavLink to={item.path} className={({ isActive }) => clsx(s.link, isActive && s.active)}>
                            {item.label}
                        </RouterNavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};