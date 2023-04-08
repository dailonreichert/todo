import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    list : {
        width: '100%',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#262626',
        flexDirection: 'row',
        marginBottom: 8
    },
    description : {
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        color: '#F2F2F2'
    },
    button: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    }
});