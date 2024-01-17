import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from "./Style"
import BatLogo from "../../componentes/Menu/BatLogo/BatLogo";
import { BatTextInput } from "../../componentes/BatTextInput/BatTextInput";
import { BatButton } from "../../componentes/BatButton/BatButton";

export default function Home(){
    return (
        <View style={styles.appContainer}>
            
            <View style={styles.logoContainer}>
                <BatLogo/>
                <StatusBar style="light" />
            </View>

            <View style={styles.inputContainer}>
                
                <BatButton/>
            </View>

        </View>
    )
}