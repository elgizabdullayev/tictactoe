import React, { useMemo } from 'react';
import { getStyles } from './styles';
import { View } from 'react-native';
import {Cell} from './components/cell'

export const Game = () => {
    const styles =  getStyles();
    
    return(
        <View style={styles.container}>
            <Cell/>
        </View>
    )
};
