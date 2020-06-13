import React from 'react';
import classnames from 'classnames';
import { Avatar as MUIAvatar } from '@material-ui/core';

import styles from './style';

type Props = {
    src: string;
    nickname: string;
    mode?: 'responsive' | 'large';
};
const Avatar = ({ src, nickname, mode = 'responsive' }: Props) => {
    const classes = styles();
    return (
        <MUIAvatar
            src={src}
            classes={{ root: classnames(classes.avatar, classes[mode]) }}
            alt={nickname}
        >
            {nickname && nickname.length > 1 && nickname[0].toUpperCase()}
        </MUIAvatar>
    );
};

export default Avatar;
