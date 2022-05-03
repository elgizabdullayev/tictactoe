import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { getStyles } from './styles';

export const Menu = () => {
    const styles =  getStyles();
    const navigation = useNavigation();
    const onPressStart = () => {
        navigation.navigate('Game');
    };

    return(
        <View style={styles.container}>
            <Pressable style={styles.menuButtons} onPress={onPressStart}>
                <Text style={styles.menuTextStart}>Start</Text>
            </Pressable>
            <Pressable style={styles.menuButtons}>
                <Text style={styles.menuTextQuit}>Quit</Text>
            </Pressable>
        </View>
    )
};
