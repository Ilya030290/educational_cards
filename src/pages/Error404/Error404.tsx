import React from 'react';
import s from './Error404.module.css';

export const Error404: React.FC = () => {
    return (
        <div className={s.error}>
            <div>Error 404...</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ— </div>
        </div>
    );
};
