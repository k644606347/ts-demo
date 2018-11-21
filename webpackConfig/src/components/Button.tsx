import { CSSProperties } from "react";
import * as React from "react";
import cssModules from './Button.scss';

interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    name?: string;
    onClick?: (e: React.MouseEvent) => void;
    disabled?: boolean;
    type?: 'primary' | 'danger';
}
const typeMap = {
    primary: cssModules.primary,
    danger: cssModules.danger,
}
export class Button extends React.PureComponent<ButtonProps, any> {
    render() {
        let { children, style, disabled, type, className } = this.props,
            classNames = [cssModules.btn, typeMap[type], className, disabled && cssModules.disabled];

        return <a className={classNames.filter(className => !!className).join(' ')} style={style}>{ children }</a>
    }
    handleClick(e: React.MouseEvent) {
        let { disabled, onClick } = this.props;

        if (disabled) {
            return false;
        }
        onClick && onClick(e);
    }
}