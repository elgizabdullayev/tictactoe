import { StyleSheet } from "react-native";
import {Colors} from "../../assets/colors";
import {Fonts} from "../../assets/fonts";
import {calculatedSize} from "../../utils/calculatedSize"

export const getStyles = () => StyleSheet.create({
    container: {
        backgroundColor: Colors.ROSE,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuButtons: {
       alignItems: 'center'
    },
    menuTextStart: {
        fontFamily: Fonts.MAIN_FONT_SEMIBOLD,
        fontSize: calculatedSize(48),
        color: Colors.WHITE,
        marginBottom: 25
    },
    menuTextQuit: {
        fontFamily: Fonts.MAIN_FONT_SEMIBOLD,
        fontSize: calculatedSize(24),
        color: Colors.WHITE
    }
})