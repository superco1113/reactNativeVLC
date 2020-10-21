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
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  //uri: 'https://w05-tw.eupfin.com/live/c7597799-febc-4b86-9f22-e75bc0846e581/playlist.m3u8'
                  //uri: 'rtmp://61.222.206.22:1935/live/c7597799-febc-4b86-9f22-e75bc0846e581'
                  //uri: 'https://w05-tw.eupfin.com/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d91/playlist.m3u8'
                  //uri: "rtmp://61.222.206.22:1935/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d91"
                  uri: 'rtmp://61.222.206.22:1935/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb1'
                  //uri: 'https://w05-tw.eupfin.com/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb1/playlist.m3u8'
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
                ref={(ref) => (this.vlcPlayer1 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  //uri: 'https://w05-tw.eupfin.com/live/c7597799-febc-4b86-9f22-e75bc0846e582/playlist.m3u8'
                  //uri: 'rtmp://61.222.206.22:1935/live/c7597799-febc-4b86-9f22-e75bc0846e582'
                  //uri: 'https://w05-tw.eupfin.com/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d92/playlist.m3u8'
                  // uri: "rtmp://61.222.206.22:1935/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d92"
                  uri: 'rtmp://61.222.206.22:1935/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb2'
                  //uri: 'https://w05-tw.eupfin.com/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb2/playlist.m3u8'
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
                ref={(ref) => (this.vlcPlayer1 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  //uri: 'https://w05-tw.eupfin.com/live/c7597799-febc-4b86-9f22-e75bc0846e583/playlist.m3u8'
                  //uri: 'rtmp://61.222.206.22:1935/live/c7597799-febc-4b86-9f22-e75bc0846e583'
                  //uri: 'https://w05-tw.eupfin.com/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d93/playlist.m3u8'
                  //uri: "rtmp://61.222.206.22:1935/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d93"
                  uri: 'rtmp://61.222.206.22:1935/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb3'
                  //uri: 'https://w05-tw.eupfin.com/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb3/playlist.m3u8'
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
                ref={(ref) => (this.vlcPlayer1 = ref)}
                style={{ width: '100%', height: 200 }}
                autoplay={true}
                videoAspectRatio="16:9"
                source={{
                  //uri: 'https://w05-tw.eupfin.com/live/c7597799-febc-4b86-9f22-e75bc0846e584/playlist.m3u8'
                  //uri: 'rtmp://61.222.206.22:1935/live/c7597799-febc-4b86-9f22-e75bc0846e584'
                  //uri: 'https://w05-tw.eupfin.com/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d94/playlist.m3u8'
                  //uri: "rtmp://61.222.206.22:1935/live/2dda6c27-1f78-48d3-b39f-a35ff451e1d94"
                  uri: 'rtmp://61.222.206.22:1935/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb4'
                  //uri: 'https://w05-tw.eupfin.com/live/eddffc46-34a7-4d5a-b4df-85cc5c61bbfb4/playlist.m3u8'
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
