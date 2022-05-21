import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage.clear();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 0,
  whitelist: ["user"],
};

export default persistConfig;
