import React, { useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Avatar from 'common/components/Avatar';
import { AddPhotoAlternate } from '@material-ui/icons';
import { useCurrentUser } from 'common/hooks';

import { getProfileImage } from 'common/state/selectors';
import InputFile from './InputFile';

import styles from './style';

type Props = {
    children: React.ReactNode;
};

const AvatarEditorDialog = React.lazy(() => import('./AvatarEditorDialog'));
const AvatarPreviewDialog = React.lazy(() => import('./AvatarPreviewDialog'));

const AvatarPicker = (props: Props) => {
    const currentUser = useCurrentUser();

    const { children } = props;
    const [isModalOpen, setIsModalOpen] = useState<string | null>('');
    const [uploadedImage, setUploadedImage] = useState<string | null>('');
    const src = useSelector(getProfileImage);
    const classes = styles();
    return (
        <div>
            {src ? (
                <div
                    role="button"
                    className={classes.avatarPreviewContainer}
                    onClick={() => {
                        setUploadedImage(src);
                        setIsModalOpen('PREVIEW');
                    }}
                >
                    <span className={classes.container}>
                        <Avatar
                            src={src}
                            nickname={currentUser.firstname}
                            mode="large"
                        />
                        <AddPhotoAlternate className={classes.icon} />
                    </span>
                </div>
            ) : (
                <InputFile
                    setFileData={(fileData: string) => {
                        setIsModalOpen('EDIT');
                        setUploadedImage(fileData);
                    }}
                >
                    <span className={classes.container}>
                        {children}
                        <AddPhotoAlternate className={classes.icon} />
                    </span>
                </InputFile>
            )}

            <Suspense fallback={null}>
                <AvatarEditorDialog
                    onClose={() => {
                        setIsModalOpen(null);
                        setUploadedImage(src);
                    }}
                    isOpen={isModalOpen === 'EDIT'}
                    uploadedImage={uploadedImage}
                    setFileDataHandler={fileData => {
                        setUploadedImage(fileData);
                    }}
                    deleteHandler={() => {
                        setIsModalOpen('PREVIEW');
                        setUploadedImage(null);
                    }}
                />
                <AvatarPreviewDialog
                    onClose={() => {
                        setIsModalOpen(null);
                        setUploadedImage(src);
                    }}
                    isOpen={isModalOpen === 'PREVIEW'}
                    uploadedImage={uploadedImage}
                    setFileDataHandler={(fileData: string) => {
                        setUploadedImage(fileData);
                        setIsModalOpen('EDIT');
                    }}
                    setUploadedImage={(newUploadedImage: string | null) => {
                        setUploadedImage(newUploadedImage);
                    }}
                    deleteHandler={() => {
                        setUploadedImage(null);
                    }}
                />
            </Suspense>
        </div>
    );
};

export default AvatarPicker;
