import React, { useState } from 'react';
import { getStyles } from './styles';
import { View, Text, Pressable } from 'react-native';
import {Cell} from './components/cell'
import {figuresNames} from './../../utils/figuresNames'

export const Game = () => {
    const styles =  getStyles();
    const [turn, setTurn] = useState(figuresNames.CROSS);
    const [cells, setCells] = useState(Array(9).fill(figuresNames.EMPTY));
    const [winner, setWinner] = useState(null);
    const [winningPattern, setWinningPattern] = useState([]);

    const checkForWinner = (squares) => {
        let combos = {
            row: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            column: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ]
        };

        for(let combo in combos) {
            combos[combo].forEach((pattern)=> {
                if(
                    squares[pattern[0]] === figuresNames.EMPTY ||
                    squares[pattern[1]] === figuresNames.EMPTY ||
                    squares[pattern[2]] === figuresNames.EMPTY
                ) {
                    return;
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ){
                    setWinningPattern(pattern);
                    setWinner(squares[pattern[1]]);
                } else if(!squares.includes(figuresNames.EMPTY) && !winner){
                    setWinner('draw')
                }
            })
        }
    }

    const onPressHandler = (number) => {
        if(cells[number] !== figuresNames.EMPTY || winner){
            return;
        }
        let squares = [...cells];
        if(turn === figuresNames.CROSS) {
            squares[number] =  figuresNames.CROSS;
            setTurn(figuresNames.CIRCLE);
        } else {
            squares[number] = figuresNames.CIRCLE;
            setTurn(figuresNames.CROSS);
        }
        checkForWinner(squares);
        setCells(squares);
    }

    const onRestartGame = () => {
        setCells(Array(9).fill(figuresNames.EMPTY));
        setTurn(figuresNames.CROSS);
        setWinner(null);
        setWinningPattern([]);
    }
    
    return(
        <View style={styles.container}>
            {winner ? 
                <View style={styles.result}>
                    <Text style={styles.winnerText}>
                        {winner == 'draw' ? 'DRAW' : `WINNER IS ${winner}`}
                    </Text> 
                    <Pressable style={styles.restartButton} onPress={onRestartGame}>
                        <Text style={styles.restartGameText}>
                            Restart game
                        </Text>
                    </Pressable>
                </View>
            : <View style={styles.result}/>}
            <View style={styles.row}>
                <Cell onPress={onPressHandler} number={0} figure={cells[0]} winner={winner} winningPattern={winningPattern}/>
                <Cell onPress={onPressHandler} number={1} figure={cells[1]} winner={winner} winningPattern={winningPattern}/>
                <Cell onPress={onPressHandler} number={2} figure={cells[2]} winner={winner} winningPattern={winningPattern}/>
            </View>
            <View style={styles.row}>
                <Cell onPress={onPressHandler} number={3} figure={cells[3]} winner={winner} winningPattern={winningPattern}/>
                <Cell onPress={onPressHandler} number={4} figure={cells[4]} winner={winner} winningPattern={winningPattern}/>
                <Cell onPress={onPressHandler} number={5} figure={cells[5]} winner={winner} winningPattern={winningPattern}/>
            </View>
            <View style={styles.row}>
                <Cell onPress={onPressHandler} number={6} figure={cells[6]} winner={winner} winningPattern={winningPattern}/>
                <Cell onPress={onPressHandler} number={7} figure={cells[7]} winner={winner} winningPattern={winningPattern}/>
                <Cell onPress={onPressHandler} number={8} figure={cells[8]} winner={winner} winningPattern={winningPattern}/>
            </View>
        </View>
    )
};
