import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { icons } from "../../../constants";

import styles from "./styles";

const JobFooter = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtn}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;
