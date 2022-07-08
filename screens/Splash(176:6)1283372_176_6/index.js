import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_195_717}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9025d139-8872-4dc8-b36f-353ccd32d840"
          }}
          style={styles.ImageBackground_176_59}
        />
        <View style={styles.View_176_61} />
        <View style={styles.View_176_62} />
      </View>
      <View style={styles.View_176_8}>
        <View style={styles.View_176_9}>
          <Text style={styles.Text_176_9}>CodeAct</Text>
        </View>
        <View style={styles.View_176_10}>
          <Text style={styles.Text_176_10}>On Demand Lawyer App</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f32f6d96-5c1a-4a91-91ae-60b3c728cc13"
          }}
          style={styles.ImageBackground_176_11}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_195_717: {
    width: wp("207%"),
    minWidth: wp("207%"),
    height: hp("144%"),
    minHeight: hp("144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31%"),
    top: hp("-23%")
  },
  ImageBackground_176_59: {
    width: wp("207%"),
    minWidth: wp("207%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%")
  },
  View_176_61: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("98%")
  },
  View_176_62: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  View_176_8: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("94%")
  },
  View_176_9: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_9: {
    color: "rgba(10, 17, 34, 1)",
    fontSize: 46,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5700000000000001,
    textTransform: "none"
  },
  View_176_10: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_176_10: {
    color: "rgba(55, 105, 233, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.45,
    textTransform: "uppercase"
  },
  ImageBackground_176_11: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
