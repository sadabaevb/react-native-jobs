import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const ScreenHeaderBtn = ({ iconUrl, dimension, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image source={iconUrl} style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
