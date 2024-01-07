import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'pink'
    },

    txt: {
        marginTop: 100,
        fontSize: 30,
        marginBottom: 50,
    },

    inputOut: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 30,  // text box space another text box space
        paddingHorizontal: 15, // text space
        paddingVertical: 10, // text box heigth
        backgroundColor: 'white',
        elevation: 35,
        borderRadius: 15,
        borderWidth: 1,
    },

    input: {
        fontSize: 18,
        marginLeft: 20,

    },

    inputBtn: {
        backgroundColor: 'red',
        marginTop: 100,
        paddingHorizontal: 35,
        paddingVertical: 10,
        elevation: 35,
        borderRadius: 15,

    },
    
    btnTxt: {
        fontSize: 25,
        fontWeight: 'bold',
    },
})