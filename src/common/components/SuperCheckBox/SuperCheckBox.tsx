import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperCheckBox.module.css';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeChecked) {
            onChangeChecked(e.currentTarget.checked)
        }
        if (onChange) {
            onChange(e)
        }
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <div>
            <label>
                <input
                    type={'checkbox'}
                    onChange={onChangeCallback}
                    className={finalInputClassName}

                    {...restProps}
                />
                {children && <span className={s.spanClassName}>{children}</span>}
            </label>
        </div>
    )
}

export default SuperCheckbox;