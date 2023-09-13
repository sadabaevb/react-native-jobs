import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { checkImageUrl } from "../../utils";
import { useRouter } from "expo-router";

const NearbyJobCard = ({ job }) => {
  const router = useRouter();

  const toDetails = () => {
    router.push(`job-details/${job.job_id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toDetails}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageUrl(job.employer_logo)
              ? job.employer_logo
              : "https://thumbs.dreamstime.com/z/need-job-man-wearing-suit-showing-signboard-text-written-41311901.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
