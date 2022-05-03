import React, { useMemo } from 'react';
import { getStyles } from './styles';
import { View } from 'react-native';
import { Rectangle } from '../../../../assets/svg/rectangle';
import { Cross } from '../../../../assets/svg/cross';
import { CircleForm as Circle } from '../../../../assets/svg/circle';


const figures = {
    EMPTY: null,
    CROSS: <Cross/>,
    CIRCLE: <Circle/>
}

export const Cell = () => {
    const styles =  getStyles();
    
    return(
        <View style={styles.container}>
            <View style={styles.stepFigure}>
                <Rectangle/>
            </View>
            <View style={styles.stepFigure}>
                {figures['CIRCLE']}
            </View>
        </View>
    )
};
