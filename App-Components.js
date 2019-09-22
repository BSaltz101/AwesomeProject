import React, {Fragment} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import picSierra from './assets/Sierra-Spencer.png';
import picTanner from './assets/Tanner-McTab.png';

const App = () => {
  return (
    <Fragment>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.defaultText}>Sierra</Text>
            <Text style={[styles.defaultText,styles.selectedText]}>Tanner</Text>
            <Text style={styles.defaultText}>Travis</Text>
          </View>
          <View style={styles.picContainer}>
            <Image style={styles.pic} source={picSierra} />
            <Text style={styles.userName}>Sierra Spencer</Text>
            <Image style={styles.pic} source={picTanner} />
            <Text style={styles.userName}>Tanner McTab</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD'
  },
  picContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pic: {
    flex: 1,
    borderRadius: 100,
    width: Dimensions.get('window').width,
    resizeMode: 'cover'
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    color: 'white'
  }
});

export default App;
