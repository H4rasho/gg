import { Text, View, Pressable } from "react-native";

export default function Index() {
  function onPressFunction () {
    console.log("Jeh")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Control de gastos</Text>
      <Pressable onPressIn={onPressFunction}
      style={{
        top:20,
        borderRadius: 10 ,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50,
      }}
      >
        <Text style={{fontSize:30, color: "white"}}>+</Text>
      </Pressable>
    </View>
  );
}
