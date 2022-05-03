import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '../screens/game';
import { Menu } from '../screens/menu';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Menu" component={Menu} />
            <Stack.Screen options={{headerShown: false}} name="Game" component={Game} />
        </Stack.Navigator>
    );
};
  