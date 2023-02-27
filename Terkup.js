import { StyleSheet, TouchableHighlight, Text, TextInput } from "react-native";
import { useState } from "react";
import { View } from "react-native-web";

function Terkup() {

    const [radius, setRadius] = useState('')
    const [height, setHeight] = useState('')
    const [volume, setVolume] = useState('')

    function calculate() {
        // number type
        let vol = Number((1/3)*Math.pow(radius, 2)*height)
        setVolume(vol)
        console.log(vol);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Feladat 301</Text>

            <Text style={styles.label}>Sugár</Text>
            <TextInput
                style={styles.inputField}
                onChangeText={(data) => setRadius(data)}
            />

            <Text style={styles.label}>Magasság</Text>
            <TextInput
                style={styles.inputField}
                onChangeText={(data) => setHeight(data)}
            />

            <TouchableHighlight 
                onPress={calculate}
                style={styles.button}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableHighlight>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        backgroundColor: 'white',
        height: 30,
        border: 'solid 2px grey',
        width: '90%',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'rgba(180, 127, 12, 0.8)',
        width: '90%',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '3px',
        border: 'solid 1px grey'
    },
    buttonText: {
        color: 'white'
    },
    mainText: {
        fontWeight: 400,
        fontSize: 30,

    },
    label: {
        fontWeight: 200,
        fontSize: 16,

    }
});


export default Terkup
