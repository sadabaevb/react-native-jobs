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
import NearbyJobCard from "../NearbyJobCard";

const NearbyJobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data.map((job) => <NearbyJobCard key={job.job_id} job={job} />)
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
