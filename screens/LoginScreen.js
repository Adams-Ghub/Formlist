import React, { Component } from "react";
import { connect } from "react-redux";
import { loginEmailAccount } from "../redux/action/authAction";

import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { auth } from "firebase";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    this.props.loginEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const { auth } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.loginTextcontainer}>
          <Text style={styles.login}>Log in</Text>
        </View>
        {auth.error.login && (
          <Text style={{ color: "red" }}>{auth.error.login}</Text>
        )}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => this.handleUpdateState("email", email)}
            placeholderTextColor="#aaaaaa"
            value={this.state.username}
            // onChangeText={this.handleUsernameChange()}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#aaaaaa"
            onChangeText={(password) =>
              this.handleUpdateState("password", password)
            }
            value={this.state.password}
            // onChangeText={this.handlePasswordChange()}
          />
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot password ?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={this.handleOnSubmit}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveText}>Don't have an account ?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state,
  };
}
function mapDispatchToProps() {
  return {
    loginEmailAccount,
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(LoginScreen);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  login: {
    fontSize: 70,
    color: "#5100ad",
  },
  loginTextcontainer: {
    marginBottom: 50,
  },
  textInput: {
    fontSize: 25,
    borderColor: "#5100ad",
    borderBottomWidth: 3,
    paddingTop: 30,
    paddingBottom: 15,
  },
  textInputContainer: {
    marginVertical: 30,
  },
  forgotText: {
    textAlign: "right",
    paddingVertical: 4,
    fontSize: 17,
    color: "#41A7CC",
  },
  buttonContainer: {
    backgroundColor: "#5100ad",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dontHaveText: {
    paddingRight: 15,
    fontSize: 16,
  },
  signupText: {
    color: "#5100ad",
    fontSize: 16,
  },
});
