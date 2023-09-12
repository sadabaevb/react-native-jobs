import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.medium,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#fff",
    shadowColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {},
});

export default styles;
