import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";
import { SIZES, icons } from "../../constants";
import { useState } from "react";
import { useRouter } from "expo-router";

const JOB_TYPES = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, onClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  const handleTabPress = (item) => {
    setActiveJobType(item);
    // router.push(`/search/${item}`);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Bektur!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            style={styles.searchInput}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={onClick}>
          <Image style={styles.searchBtnImage} source={icons.search} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JOB_TYPES}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => handleTabPress(item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
