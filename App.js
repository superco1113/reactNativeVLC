/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player'
import Orientation from 'react-native-orientation'

export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Header /> */}
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <VLCPlayer
                ref={(ref) => (this.vlcPlayer1 = ref)}
                autoplay={true}
                //videoAspectRatio="16:9"
                source={{
                  uri: 'rtsp://60.251.59.76:1935/live/e65a13e0-a020-4b63-bf52-495415562a1611'
                  //uri: 'https://w04-tw.eupfin.com/live/e65a13e0-a020-4b63-bf52-495415562a1611/playlist.m3u8'
                }}
                onLoadStart={() => {
                  console.log('player1 load start')
                }}
                onError={(e) => {
                  console.log('error')
                  console.log(e)
                }}
                onBuffering={(e) => {
                  console.log('buffering')
                  console.log(e)
                }}
                onOpen={(e) => {
                  console.log('open')
                  console.log(e)
                }}
              />
            </View>
            <View style={styles.body}>
              <VLCPlayer
                ref={(ref) => (this.vlcPlayer2 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  uri: 'rtsp://60.251.59.76:1935/live/08c92cc1-05cd-4754-a176-70090be3aefd1'
                  //uri: 'https://w04-tw.eupfin.com/live/08c92cc1-05cd-4754-a176-70090be3aefd1/playlist.m3u8'
                }}
                onLoadStart={() => {
                  console.log('player1 load start')
                }}
                onError={(e) => {
                  console.log('error')
                  console.log(e)
                }}
                onBuffering={(e) => {
                  console.log('buffering')
                  console.log(e)
                }}
                onOpen={(e) => {
                  console.log('open')
                  console.log(e)
                }}
              />
            </View>
            <View style={styles.body}>
              <VLCPlayer
                ref={(ref) => (this.vlcPlayer3 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  uri: 'rtsp://60.251.59.76:1935/live/08c92cc1-05cd-4754-a176-70090be3aefd2'
                  //uri: 'https://w04-tw.eupfin.com/live/08c92cc1-05cd-4754-a176-70090be3aefd2/playlist.m3u8'
                }}
                onLoadStart={() => {
                  console.log('player1 load start')
                }}
                onError={(e) => {
                  console.log('error')
                  console.log(e)
                }}
                onBuffering={(e) => {
                  console.log('buffering')
                  console.log(e)
                }}
                onOpen={(e) => {
                  console.log('open')
                  console.log(e)
                }}
              />
            </View>
            <View style={styles.body}>
              <VLCPlayer
                ref={(ref) => (this.vlcPlayer4 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  uri: 'rtsp://60.251.59.76:1935/live/08c92cc1-05cd-4754-a176-70090be3aefd3'
                  //uri: 'https://w04-tw.eupfin.com/live/08c92cc1-05cd-4754-a176-70090be3aefd3/playlist.m3u8'
                }}
                onLoadStart={() => {
                  console.log('player1 load start')
                }}
                onError={(e) => {
                  console.log('error')
                  console.log(e)
                }}
                onBuffering={(e) => {
                  console.log('buffering')
                  console.log(e)
                }}
                onOpen={(e) => {
                  console.log('open')
                  console.log(e)
                }}
              />
            </View>
            <View style={styles.body}>
              <VLCPlayer
                ref={(ref) => (this.vlcPlayer5 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  uri: 'rtsp://60.251.59.76:1935/live/08c92cc1-05cd-4754-a176-70090be3aefd4'
                  //uri: 'https://w04-tw.eupfin.com/live/08c92cc1-05cd-4754-a176-70090be3aefd4/playlist.m3u8'
                }}
                onLoadStart={() => {
                  console.log('player1 load start')
                }}
                onError={(e) => {
                  console.log('error')
                  console.log(e)
                }}
                onBuffering={(e) => {
                  console.log('buffering')
                  console.log(e)
                }}
                onOpen={(e) => {
                  console.log('open')
                  console.log(e)
                }}
              />
            </View>

          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  body: {
    flex: 1,
    flexDirection: 'row',
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
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

//export default App;
