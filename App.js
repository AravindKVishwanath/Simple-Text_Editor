import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { RichEditor, RichToolbar, actions } from "react-native-pell-rich-editor";


export default function App() {
  const richText = React.useRef();

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Text
            style={{
              color: "blue",
              fontSize: 28,
              marginTop: 40,
              backgroundColor: "lightgrey",
              borderRadius: 10,
              textAlign: "center",
            }}
          >Text Editor</Text>
          
          <Text
            style={{
              fontFamily: "monospace",
              fontWeight: 900,
              fontSize: 15,
              padding: 10,
            }}
          >
          Enter text here:
          </Text>
          <RichEditor ref={richText} onChangeText={(text)=>{console.log("Description text",text)}}/>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={{position:"absolute",bottom:0}}>
          <RichToolbar
            style={{ marginTop: 10 ,height:50}}
            editor={richText}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.setUnderline,
              actions.removeFormat,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.checkboxList,
              actions.insertLink,
              actions.setStrikethrough,
              actions.code,
              actions.alignLeft,
              actions.alignRight,
            ]}
           
            iconMap={{ [actions.heading1]: ({tintColor})=>{
              <Text style={[{color:tintColor}]}>H1</Text>
            } }}
            />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
