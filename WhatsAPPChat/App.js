import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.UpperView}>
          <Text style={{color:'white',fontSize:20,marginEnd:250
        }}>WhatsApp</Text>
        <Text style={{color:'white',fontSize:15,flexBasis:'horizonal
    '}}>chats</Text>

        </View >
         <View style={styles.centerView}>
          <Text>hello</Text>
          
        </View>
         <View style={styles.bottomView}>
          <Text>hello</Text>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent: 'center',
  },
    UpperView: {
    flex: 0.15,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
    centerView: {
    flex: 0.7,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
    bottomView: {
    flex: 0.15,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
