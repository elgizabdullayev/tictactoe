import { StyleSheet } from "react-native";
import {Colors} from "../../assets/colors"
import { Fonts } from "../../assets/fonts";
import { calculatedSize } from "../../utils/calculatedSize";

export const getStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.ROSE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        marginVertical: calculatedSize(50),
        paddingHorizontal: calculatedSize(45)
    },
    result: {
        height: calculatedSize(60),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ROSE,
        alignSelf: 'flex-start'
    },
    restartGameText: {
        color: Colors.WHITE,
        fontFamily: Fonts.MAIN_FONT_SEMIBOLD,
        fontSize: calculatedSize(20)
    },
    winnerText: {
        marginTop: 15,
        color: Colors.WHITE,
        fontFamily: Fonts.MAIN_FONT_SEMIBOLD,
        marginBottom: 15,
        fontSize: calculatedSize(20)
    },
    restartButton: {
        height: calculatedSize(40),
        padding: 5,
        borderWidth: 2,
        borderColor: Colors.WHITE,
        marginBottom: calculatedSize(40),
        borderRadius: 8
    }
})