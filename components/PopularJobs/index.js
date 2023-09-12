import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";
import PopularJobCard from "../PopularJobCard";
import { SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

const PopularJobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  console.log("data: ", data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PopularJobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
