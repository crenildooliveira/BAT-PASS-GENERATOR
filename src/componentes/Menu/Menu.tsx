{/*rnbc _ react-native basics*/}

import React from 'react';
import { View, Text } from 'react-native';

import styles from "./MenuStyles";

export default function Menu() {
  return (
    <View style={styles.container}>
        <Text>Olá Menu</Text>
    </View>
  );
}