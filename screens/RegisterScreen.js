import React, { Component } from "react";
import { connect } from "react-redux";
import { createEmailAccount, registerError } from "../redux/action/authAction";

import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
    };
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Password do not match");
      return;
    }
    this.props.createEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const { navigation, auth } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.loginTextcontainer}>
          <Text style={styles.login}>Sign up</Text>
        </View>
        {auth.error.register && (
          <Text style={{ color: "red" }}> {auth.error.register}</Text>
        )}
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => {
              this.handleUpdateState("email", text);
            }}
            value={this.state.email}
            // onChangeText={this.handleUsernameChange()}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            onChangeText={(text) => {
              this.handleUpdateState("password", text);
            }}
            value={this.state.password}
            // onChangeText={this.handlePasswordChange()}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password again"
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            onChangeText={(text) => {
              this.handleUpdateState("confirm", text);
            }}
            value={this.state.passwordAgain}
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
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveText}>You already have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    registerError,
    createEmailAccount,
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 60,
  },
  login: {
    fontSize: 70,
    color: "#5100ad",
  },
  loginTextcontainer: {
    marginBottom: 40,
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
