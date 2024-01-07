import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'pink',
    },

    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 80,
        backgroundColor: 'yellow',
    },

    name:{
        fontSize: 25,
        marginTop: 20,
        marginRight: 150,
    },

    obj: {
        fontSize: 25,
        marginTop: 20,
        marginRight: 100,
        backgroundColor: 'white',    
    },

    btn: {
       backgroundColor: 'blue',
       flexDirection: 'row',
       marginTop: 40,
       paddingHorizontal: 10,
    //    paddingVertical: 10,
       marginVertical: 20,
       borderRadius: 15,
       marginRight: 150,

       elevation: 20,
    },

    cout: {
        fontSize: 20,
        marginTop: 35,
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },

    in: {
        fontSize: 20,
        color: 'red',
        flexDirection: 'row',
        padding: 10,
       
    },

    de: {
        fontSize: 20,
        color: 'red',
        flexDirection: 'row',
        padding: 10,

    }
})