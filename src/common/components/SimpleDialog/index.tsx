import React from 'react';
import { Close as CloseIcon } from '@material-ui/icons';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    Button,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

import styles from './style';

type Props = {
    open: boolean;
    title?: React.ReactNode;
    miniTitle?: boolean;
    onClose: (event: React.SyntheticEvent) => void;
    onSubmit?: (event: React.SyntheticEvent) => void;
    isSubmitLoading: boolean;
    isSubmitSuccess?: boolean;
    cancelButtonText?: string;
    submitButtonText?: string;
    submitButtonDisabled?: boolean;
    fullSizeActions?: boolean;
    customDialogActions?: React.ReactNode;
    showActionBar?: boolean;
    showCloseButton?: boolean;
    showHorizontalRule?: boolean;
    stickyOnMobile?: boolean;
    error?: string;
    children: React.ReactNode;
};

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

const SimpleDialog = ({
    open,
    title,
    miniTitle,
    onClose,
    onSubmit,
    isSubmitLoading,
    isSubmitSuccess,
    cancelButtonText,
    submitButtonText,
    submitButtonDisabled,
    fullSizeActions,
    customDialogActions,
    showActionBar = true,
    showCloseButton = true,
    showHorizontalRule,
    stickyOnMobile,
    error,
    children,
    ...other
}: Props) => {
    const classes = styles();

    const withProgressButton =
        isSubmitLoading === true || isSubmitSuccess === true;

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={onClose}
            onClick={e => e.stopPropagation()}
            {...other}
            fullWidth
            maxWidth="sm"
        >
            {(title || showCloseButton) && (
                <DialogTitle>
                    <div className={classes.titleContainer}>
                        <span>{title}</span>
                        {showCloseButton && (
                            <IconButton onClick={onClose} title="Fermer">
                                <CloseIcon />
                            </IconButton>
                        )}
                    </div>
                </DialogTitle>
            )}
            <DialogContent>
                {children}
                {error && <div>{error}</div>}
            </DialogContent>
            {showActionBar && (
                <>
                    {customDialogActions}
                    {!customDialogActions &&
                        (submitButtonText || cancelButtonText) && (
                            <DialogActions>
                                {cancelButtonText && (
                                    <Button
                                        variant="outlined"
                                        onClick={onClose}
                                    >
                                        {cancelButtonText}
                                    </Button>
                                )}
                                {submitButtonText && (
                                    <>
                                        {withProgressButton ? (
                                            <Button>{submitButtonText}</Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                onClick={onSubmit}
                                                color="primary"
                                                disabled={submitButtonDisabled}
                                            >
                                                {submitButtonText}
                                            </Button>
                                        )}
                                    </>
                                )}
                            </DialogActions>
                        )}
                </>
            )}
        </Dialog>
    );
};

export default SimpleDialog;
