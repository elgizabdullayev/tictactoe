import React from 'react';
import { getStyles } from './styles';
import { View, Pressable } from 'react-native';
import { Rectangle } from '../../../../assets/svg/rectangle';
import { Cross } from '../../../../assets/svg/cross';
import { CircleForm as Circle } from '../../../../assets/svg/circle';
import { Colors } from '../../../../assets/colors';


export const Cell = ({onPress, number, figure, winner, winningPattern}) => {
    const styles =  getStyles();
    const figures = {
        EMPTY: null,
        CROSS: <Cross stroke={winner ? (winner === figure ?  Colors.WHITE : Colors.YELLOW) : null} />,
        CIRCLE: <Circle stroke={winner ? (winner === figure ?  Colors.WHITE : Colors.YELLOW) : null}/>
    }

    return(
        <Pressable style={styles.container} onPress={() => onPress(number)}>
            <View style={styles.stepFigure}>
                <Rectangle fill={winningPattern?.includes(number) ? Colors.BLUE : null}/>
            </View>
            <View style={styles.stepFigure}>
                {figures[figure]}
            </View>
        </Pressable>
    )
};
