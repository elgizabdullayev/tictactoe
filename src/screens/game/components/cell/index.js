import React, { useMemo } from 'react';
import { getStyles } from './styles';
import { View, Pressable } from 'react-native';
import { Rectangle } from '../../../../assets/svg/rectangle';
import { Cross } from '../../../../assets/svg/cross';
import { CircleForm as Circle } from '../../../../assets/svg/circle';

const figures = {
    EMPTY: null,
    CROSS: <Cross/>,
    CIRCLE: <Circle/>
}

export const Cell = ({onPress, number, figure}) => {
    const styles =  getStyles();
    
    return(
        <Pressable style={styles.container} onPress={() => onPress(number)}>
            <View style={styles.stepFigure}>
                <Rectangle/>
            </View>
            <View style={styles.stepFigure}>
                {figures[figure]}
            </View>
        </Pressable>
    )
};
