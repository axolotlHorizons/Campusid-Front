//@ts-nocheck
import React from 'react';
import classnames from 'classnames';
import { CircularProgress, Icon } from '@material-ui/core';
import { Button } from '@material-ui/core';
import styles from './style';

type Props = {
    color?: 'primary' | 'secondary' | 'inherit';
    disabled?: boolean;
    variant?: 'contained' | 'text' | 'outlined';
    loading: boolean;
    success?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    children?: React.ReactNode;
    classes: Object;
    buttonClasses?: Object;
    type: string;
    role: string;
    fullWidth?: boolean;
    fullWidthMobile?: boolean;
};

const ProgressButton = ({
    children,
    color,
    variant,
    disabled,
    loading,
    success,
    onClick,
    type,
    role,
    fullWidth,
    fullWidthMobile,
    buttonClasses,
    ...rest
}: Props) => {
    const classes = styles();
    return (
        <div {...rest}>
            <Button
                variant={variant}
                color={color}
                className={classnames(
                    classes.button,
                    success && classes.buttonSuccess
                )}
                disabled={loading || disabled}
                onClick={onClick}
                type={type || 'button'}
                fullWidth
                disableRipple={success}
                classes={buttonClasses}
                role={role || 'button'}
            >
                <span
                    className={classnames(success && classes.successBtnLabel)}
                >
                    {children}
                </span>
            </Button>
            {loading && (
                <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                    color={color}
                />
            )}
            {success && <Icon className={classes.successIcon}>check</Icon>}
        </div>
    );
};

ProgressButton.defaultProps = {
    disabled: false,
    success: false,
    color: 'primary',
    onClick: undefined,
    fullWidth: false,
    fullWidthMobile: false,
    buttonClasses: {},
    variant: 'contained',

    children: null,
};

export default ProgressButton;
