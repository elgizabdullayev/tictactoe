import React, { useMemo } from 'react';
import { getStyles } from './styles';
import { View } from 'react-native';

export const Game = () => {
    const styles = useMemo(() => getStyles(), []);
    
    return(
        <View style={styles.container}>
            
        </View>
    )
};
