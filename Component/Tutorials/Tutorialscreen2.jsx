// import React from "react";
// import { StyleSheet, View, Text, Image } from "react-native";
// import AppIntroSlider from "react-native-app-intro-slider";
// import { Divider, Button } from "react-native-paper";

// const slides = [
//   {
//     key: "1",
//     title: "Start Your Non-Experience Career",
//     text:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor quis morbi sagittis donec sed massa. Velit malesuada amet pretium turpis in commodo aliquet pulvinar ultrices.",
//     image: require("../../assets/Tutorials/Tutorial1.png"),
//     backgroundColor: "#59b2ab",
//   },
//   {
//     key: "2",
//     title: "Student CV and Protfolio",
//     text:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor quis morbi sagittis donec sed massa. Velit malesuada amet pretium turpis in commodo aliquet pulvinar ultrices.", // image: require("./assets/2.jpg"),
//     image: require("../../assets/Tutorials/Tutorial2.png"),

//     backgroundColor: "#febe29",
//   },
//   {
//     key: "3",
//     title: "Career Coaching Guidance",
//     text:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor quis morbi sagittis donec sed massa. Velit malesuada amet pretium turpis in commodo aliquet pulvinar ultrices.", // image: require("./assets/3.jpg"),
//     image: require("../../assets/Tutorials/Tutorial3.png"),

//     backgroundColor: "#22bcb5",
//   },
// ];

// export class Tutorial2 extends React.Component {
//   state = {
//     showRealApp: false,
//   };
//   _renderItem = ({ item }) => {
//     return (
//       <View style={styles.container}>
//         <Image style={styles.img} source={item.image} />

//         <Text style={styles.title}>{item.title}</Text>
//         <Divider style={styles.hr} />

//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showRealApp: true });
//   };
//   _onSkip = () => {
//     this.setState({ showRealApp: true });
//   };
//   _renderNextButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Text style={{ color: "#1E4275" }}>Next</Text>
//         {/* <Ion name="md-arrow-round-forward" color="blue" size={24} /> */}
//       </View>
//     );
//   };
//   _renderDoneButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Text style={{ color: "#1E4275" }}>Done</Text>
//       </View>
//     );
//   };
//   _renderSkipButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         <Text style={{ color: "#1E4275" }}>Skip</Text>
//       </View>
//     );
//   };
//   render() {
//     if (this.state.showRealApp) {
//       return <App />;
//     } else {
//       return (
//         <AppIntroSlider
//           renderItem={this._renderItem}
//           renderNextButton={this._renderNextButton}
//           renderDoneButton={this._renderDoneButton}
//           renderSkipButton={this._renderSkipButton}
//           data={slides}
//           onDone={this._onDone}
//           onSkip={this._onSkip}
//           showSkipButton={true}
//           activeDotStyle={{ backgroundColor: "#1E4275" }}
//           dotStyle={{ backgroundColor: "rgba(30, 66, 117,.5)" }}
//         />
//       );
//     }
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 18,
//     color: "#1E4275",
//     marginTop: 56,
//   },
//   text: {
//     flex: 1,
//     alignItems: "center",
//     // textAlign: "center",
//     paddingHorizontal: 28,
//     // width: 319,
//     fontSize: 14,
//     lineHeight: 20,
//     color: "#1E4275",
//   },
//   img: {
//     flex: 1,
//     // flexDirection: "row",
//     width: "100%",
//     // resizeMode: "contain",
//     height: 303,
//   },
//   hr: {
//     backgroundColor: "#CD8930",
//     height: 2,
//     width: 254,
//     marginTop: 11,
//     marginBottom: 13,
//   },
//   buttonCircle: {
//     backgroundColor: "transparent",
//     marginRight: 28,
//     marginTop: 13,
//   },
// });
