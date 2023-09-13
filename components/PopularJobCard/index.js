import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { checkImageUrl } from "../../utils";
import { useRouter } from "expo-router";

const PopularJobCard = ({ item, selectedJob }) => {
  const router = useRouter();

  const toDetails = () => {
    router.push(`job-details/${item.job_id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toDetails}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageUrl(item.employer_logo)
              ? item.employer_logo
              : "https://thumbs.dreamstime.com/z/need-job-man-wearing-suit-showing-signboard-text-written-41311901.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
