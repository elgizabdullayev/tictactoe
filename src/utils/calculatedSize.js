import {Dimensions} from 'react-native';

const designWidth = 375;

export const calculatedSize = value => {
  return Math.floor(value * (Dimensions.get('window').width / designWidth));
};
