import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '../screens/game';
import { Menu } from '../screens/menu';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Menu" component={Menu} />
                <Stack.Screen options={{headerShown: false}} name="Game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
  