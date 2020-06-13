import React from 'react';
import { Button, IconButton, Slider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RotateRightIcon from '@material-ui/icons/RotateRight';

import InputFile from '../InputFile';

import styles from './style';

type Props = {
    editMode?: boolean;
    uploadedImage: string | null;
    deleteHandler: () => void;
    onZoomChange?: (zoomValue: number | number[]) => void;
    onRotationChange?: () => void;
    setFileDataHandler: (fileData: string) => void;
    zoom?: number | number[];
};
const AvatarEditorDialogActions = ({
    editMode,
    uploadedImage,
    deleteHandler,
    onZoomChange,
    onRotationChange,
    setFileDataHandler,
    zoom,
}: Props) => {
    const classes = styles();
    return (
        <div className={classes.actions}>
            <Button
                size="small"
                variant="outlined"
                color="secondary"
                className={classes.button}
            >
                <InputFile setFileData={setFileDataHandler}>
                    Choisir un fichier
                </InputFile>
            </Button>

            {editMode && (
                <Slider
                    className={classes.slider}
                    color="secondary"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e, value: number | number[]) => {
                        if (onZoomChange) {
                            e.preventDefault();
                            onZoomChange(value);
                        }
                    }}
                />
            )}

            {editMode && (
                <IconButton
                    onClick={onRotationChange}
                    color="secondary"
                    className={classes.rotateIcon}
                >
                    <RotateRightIcon />
                </IconButton>
            )}

            {uploadedImage && (
                <div className={editMode ? '' : classes.noWidth}>
                    <IconButton
                        onClick={deleteHandler}
                        color="secondary"
                        className={classes.deleteIcon}
                        data-testid="delete-icon-button"
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
        </div>
    );
};

export default AvatarEditorDialogActions;
