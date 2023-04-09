import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topContainer : {
        height: '20%',
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingTop: 55,
        paddingLeft: 20,
        paddingRight: 20
    },
    bottomContainer : {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1A1A1A'
    },
    form : {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 20
    },
    input : {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        fontSize: 16,
        padding: 16,
        marginRight: 6,
        color: '#FFF'
    },
    button : {
        width: 56,
        height: 56,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addImage : {
        color: '#F2F2F2',
        fontSize: 20
    },
    emptyListTextTitle : {
        paddingTop: 16,
        color: '#808080',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    emptyListTextDescription : {
        color: '#808080',
        textAlign: 'center'
    },
    emptyListView : {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#808080'
    },
    imageEmptyList : {
        marginTop: 48
    },
    counter : {
        marginTop: 20,
        marginBottom : 20,
        flexDirection: 'row'
    },
    countCreatedText : {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 16
    },
    countCreatedNumber : {
        flex: 1,
        fontSize: 16,
        marginLeft: 5,
        color: '#F2F2F2',
        fontWeight: 'bold'
    },
    countCompletedText : {
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 16
    },
    countCompletedNumber : {
        fontSize: 16,
        marginLeft: 5,
        color: '#F2F2F2',
        fontWeight: 'bold'
    }
});