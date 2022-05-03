import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { getStyles } from './styles';

export const Menu = () => {
    const styles = useMemo(() => getStyles(), []);
    
    return(
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>
    )
};
