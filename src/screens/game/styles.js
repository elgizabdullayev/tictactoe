import { StyleSheet } from "react-native";
import {Colors} from "../../assets/colors"

export const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ROSE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        marginVertical: 55,
        marginHorizontal: 55
    }
})