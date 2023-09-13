import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const JobAbout = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contentText}>{info}</Text>
      </View>
    </View>
  );
};

export default JobAbout;
