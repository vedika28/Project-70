import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";

export default class readStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"rgb(9, 173, 168)"}
          style={{ marginBottom: 200 }}
          centerComponent={{
            text: "Story Hub",
            style: { color: "#fff", fontSize: 35, fontWeight: "bold" },
          }}
        />

        <TextInput
          style={[styles.input, { marginTop: 120 }]}
          placeholder="Title of the book"
          onChangeText={(title) => {
            this.setState({ title: title });
          }}
          value={this.state.title}
        />

        <TextInput
          style={styles.input}
          placeholder="Author of the book"
          onChangeText={(author) => {
            this.setState({ author: author });
          }}
          value={this.state.author}
        />

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Story of the book"
          onChangeText={(story) => {
            this.setState({ story: story });
          }}
          value={this.state.story}
          multiline={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 60,
    borderWidth: 2,
    fontSize: 20,
    marginTop: 50,
  },
  button: {
    marginTop: 100,
    marginBottom: 60,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#add8e6",
    width: 200,
    height: 50,
  },
});