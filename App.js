import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Pressable,
    Alert,
    ActivityIndicator,
    Switch,
} from "react-native";
import { Modal, Progress, Toast } from "antd-mobile";

export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const showAlert = () => {
        Alert.alert("Bonjour", "Hey! You just pressed a button");
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text1}>Hello</Text>
                <Text style={styles.text2}>Bonjour</Text>
                <Text style={styles.text3}>Salut!</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
                    }}
                    alt="Logo"
                />
                <Image
                    style={styles.image}
                    source={require("./assets/konexio-logo.png")}
                />
                <Pressable onPress={showAlert}>
                    <Text
                        style={{
                            padding: 20,
                            backgroundColor: "grey",
                            color: "white",
                        }}
                    >
                        Press Me
                    </Text>
                </Pressable>
                <ActivityIndicator style={{ padding: 20 }} />
                <Text>HEllo</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        padding: 10,
        marginHorizontal: "auto",
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        backgroundColor: "white",
    },
    text1: {
        fontSize: 30,
        marginVertical: 80,
        backgroundColor: "skyblue",
        padding: 10,
    },
    text2: {
        textAlign: "center",
        marginVertical: 80,
        backgroundColor: "skyblue",
        padding: 10,
    },
    text3: {
        fontWeight: "bold",
        marginVertical: 80,
        backgroundColor: "skyblue",
        padding: 10,
    },
    image: {
        width: 200,
        height: 60,
        marginVertical: 10,
        borderColor: "grey",
        borderWidth: 2,
    },
});
