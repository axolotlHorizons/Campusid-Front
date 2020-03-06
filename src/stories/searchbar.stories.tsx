import React from 'react';
import SearchBar from '../common/component/Searchbar/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';



export default {
    title: 'Searchbar',
    decorators: [withKnobs],
};

export const searchBar = () => {
    const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

    return (
        <SearchBar
            style={select('style', styles)}
            text={text('Text', 'You can put some text if you need')}
        />
    );
};

