import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";

import Welcome from "../components/Welcome";
import PopularJobs from "../components/PopularJobs";
import NearbyJobs from "../components/NearbyJobs";
import { COLORS, SIZES, icons, images } from "../constants";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />

      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
