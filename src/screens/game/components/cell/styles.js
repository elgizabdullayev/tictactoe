import {StyleSheet} from 'react-native';
import {calculatedSize} from '../../../../utils/calculatedSize';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: calculatedSize(30),
      width: calculatedSize(30),
    },
    stepFigure: {
      position: 'absolute',
    },
  });
