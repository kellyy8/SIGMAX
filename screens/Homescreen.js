import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import PythonService from '../PythonService';

import { auth } from "../Firebase";

const Homescreen = ({ navigation }) => {

  const onPressBandage = (param) => {
    console.log("called python api");
    PythonService.sendSignal(param);
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("SignIn");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>SIGMAX</Text>
        <Text style={styles.welcome}>Welcome, *name*! </Text>
        <Image
          source={{ uri: "https://freepngimg.com/thumb/categories/990.png" }}
          style={{ width: 200, height: 200, justifyContent: "center" }}
        />
        <View style={styles.button1}>
          <TouchableOpacity style={styles.button1} onPress={() => onPressBandage("bandages")}>
            <Text style={styles.buttonText}>bandages</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button2}>
          <TouchableOpacity style={styles.button2} onPress={() => onPressBandage("pills")}>
            <Text style={styles.buttonText}>pills</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button3}>
          <TouchableOpacity style={styles.button3} onPress={() => onPressBandage("miscellaneous")}>
            <Text style={styles.buttonText}>miscellaneous</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={onPressBandage}
            >
              <Image
                source={require("./images/Favorites.png")}
                style={{ width: 50, height: 50, justifyContent: "left" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={onPressBandage}
            >
              <Image
                source={require("./images/Home.png")}
                style={{ width: 50, height: 50, justifyContent: "left" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={handleSignOut}
            >
              <Image
                source={require("./images/User_alt.png")}
                style={{ width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //alignItems: "center",
  },
  title: {
    color: "#A95DF0",
    fontWeight: "bold",
    fontSize: 70,
    opacity: "0.3",
    borderLeftWidth: 30,
    borderTopWidth: 10,
    alignItems: "left",
  },
  welcome: {
    borderLeftWidth: 20,
    fontSize: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    color: "#000000",
    textAlign: "center",
    opacity: "1",
  },
  button1: {
    alignContent: "center",
    backgroundColor: "#c99bf6",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
    flex: 1
  },
  button2: {
    alignContent: "center",
    backgroundColor: "#d6b3f8",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
    flex: 1
  },
  button3: {
    alignContent: "center",
    backgroundColor: "#e2c9fb",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
    flex: 1
  },
  guideButton: {
    padding: 10,
    marginLeft: 40,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-end"
  }
});

