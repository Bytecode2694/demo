import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  Image,
  NativeModules,
  TextInput,
  Platform,
  Dimensions,
  Easing,
  Animated,
} from 'react-native';
const {StatusBarManager} = NativeModules;
const deviceDimension = Dimensions.get('window');
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  defaultOnOverflowMenuPress,
} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      fadeSignin: new Animated.Value(1),
      fadeSignup: new Animated.Value(1),
      fadToValue: [1, 0.7],
      signUpVal: 1,
      signInVal: 1,
    };
  }
  componentDidMount() {
    if (Platform.OS === 'ios') {
      var barheight = 0;
      StatusBarManager.getHeight(resp => {
        // Alert.alert('Height' + resp.height);
        this.setState({height: resp.height});
      });
    }
  }

  stopAnimation(val) {
    Animated.timing(this.state.fadeSignin, {
      toValue: val,
      duration: 900,
    }).start();
    // Animated.timing(this.state.fadeSignin).stop();
    //this.startAnimation(1);
  }

  startAnimation(val) {
    Animated.timing(this.state.fadeSignup, {
      toValue: val,
      duration: 900,
    }).start();
    //this.stopAnimation(1);
  }
  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <>
        <View
          style={{
            height: this.state.height,
            backgroundColor: '#306060',
          }}>
          <StatusBar backgroundColor="#306060" barStyle="light-content" />
        </View>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <View style={styles.iconLeft}></View>
                <Animated.View
                  style={[styles.signIn, {opacity: this.state.fadeSignin}]}>
                  <TouchableOpacity onPress={() => this.stopAnimation(0.7)}>
                    <Text style={styles.leftTextStyle}>Sign In</Text>
                  </TouchableOpacity>
                  <Animated.View
                    style={[
                      styles.uderLine,
                      {width: '38%', opacity: this.state.fadeSignin},
                    ]}></Animated.View>
                </Animated.View>
                <Animated.View
                  style={[styles.signUp, {opacity: this.state.fadeSignup}]}>
                  <TouchableOpacity onPress={() => this.startAnimation(0.7)}>
                    <Text style={styles.leftTextStyle}>Sign Up</Text>
                  </TouchableOpacity>
                  <Animated.View
                    style={[
                      styles.uderLine,
                      {width: '42%', opacity: this.state.fadeSignup},
                    ]}></Animated.View>
                </Animated.View>
              </View>
              <View style={styles.screenTitleContainer}>
                <Text
                  style={[
                    styles.titleHeading,
                    {fontSize: 30, fontWeight: '500', padding: 10},
                  ]}>
                  Welcom back,
                </Text>
                <Text
                  style={[
                    styles.titleHeading,
                    {fontSize: 16, fontWeight: '100', padding: 10},
                  ]}>
                  Signin to continue
                </Text>
              </View>
              <View style={styles.content}>
                <View style={styles.formContainer}>
                  <Text style={styles.credentialsText}>Email address</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '3%',
                      paddingBottom: '2%',
                    }}>
                    <View style={{flex: 0.9}}>
                      <TextInput
                        name=""
                        keyboardType={'email-address'}
                        style={styles.authTextInput}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        width: 20,
                        height: 33,
                        // borderColor: '#dfdfdf',
                        // borderWidth: 2,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                      <Ionicons
                        name="ios-checkmark"
                        size={45}
                        color={'#00E420'}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      height: '1%',
                      width: '100%',
                      backgroundColor: '#DFDFDF',
                      marginBottom: '11%',
                    }}></View>

                  <Text style={styles.credentialsText}>Password</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '3%',
                      paddingBottom: '1%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 0.9}}>
                      <TextInput
                        name=""
                        keyboardType={'email-address'}
                        style={styles.authTextInput}
                        secureTextEntry={true}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Ionicons
                        name="ios-eye-off"
                        color={'#00e420'}
                        size={28}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      height: '1%',
                      width: '100%',
                      backgroundColor: '#DFDFDF',
                    }}></View>
                  <Text style={styles.forgotpwdText}>Forgot password?</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginTop: '4%',
                    }}>
                    <View>
                      <Ionicons
                        name={1 ? 'ios-checkbox' : 'ios-eye-off'}
                        color={'#f19b00'}
                        size={35}
                      />
                    </View>
                    <View>
                      <Text style={styles.rememberText}>
                        Remember me and keep me logged in
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.signinButton}>
                  <TouchableOpacity>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

  onPressLearnMore = () => {};
}

const styles = StyleSheet.create({
  forgotpwdText: {
    color: '#F19B00',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'right',
    marginTop: '3%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  signinButton: {
    backgroundColor: '#306060',
    justifyContent: 'center',
    marginTop: '6%',
    marginBottom: '6%',
    marginHorizontal: '7%',
    height: deviceDimension.height - 840,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#696969',
    shadowColor: '#696969',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.6,
    elevation: 6,
  },
  rememberText: {
    color: '#6E6F6F',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: '2%',
    textAlign: 'center',
  },
  authTextInput: {
    margin: 0,
    flex: 0.9,
    // borderWidth: 2,
    borderColor: '#6E6F6F',
    fontSize: 22,
    color: '#6E6F6F',
    height: 22,
    fontWeight: '400',
    //fontFamily: 'Courier',
  },
  formContainer: {
    flex: 1,
    padding: 10,
    marginHorizontal: '5%',
    marginTop: '10%',
  },
  credentialsText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    //borderWidth: 1,
    //borderColor: '#696969',
    shadowColor: '#696969',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleHeading: {
    color: '#fff',
    textAlign: 'left',
    marginLeft: '5%',
  },
  screenTitleContainer: {
    marginTop: '10%',
    marginBottom: '10%',
    height: deviceDimension.height - 800,
  },
  uderLine: {
    height: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 5,
  },
  leftTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  signIn: {
    flex: 0.4,
    justifyContent: 'center',
  },
  signUp: {
    flex: 0.4,
    justifyContent: 'center',
  },
  iconLeft: {
    flex: 0.2,
    marginLeft: '5%',
    height: 40,
    width: 40,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#306060',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
