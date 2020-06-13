import React from 'react';

import styles from './style';

type Props = {
    children: React.ReactNode;
    setFileData: (fileDataURL: string) => void;
};

const InputFile = ({ children, setFileData }: Props) => {
    const classes = styles();

    const readFile = (file: Blob): Promise<string> => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.addEventListener(
                'load',
                () => resolve(reader.result?.toString()),
                false
            );
            reader.readAsDataURL(file);
        });
    };

    const onFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ): Promise<any> => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];

            const fileDataURL = await readFile(file);
            // TODO: What if it fails?

            setFileData(fileDataURL);
        }
    };

    return (
        <label htmlFor="avatar-file" className={classes.label}>
            {children}
            <input
                id="avatar-file"
                data-testid="avatar-input-file"
                name="avatar"
                accept="image/png, image/jpeg, image/jpg"
                type="file"
                className={classes.hiddenInputFile}
                onChange={onFileChange}
                onClick={e => {
                    // Reset the value for every click, so we always have a change
                    e.currentTarget.value = '';
                }}
            />
        </label>
    );
};

export default InputFile;
