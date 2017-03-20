'use strict';
var React = require('React');
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  NavigatorIOS
} from 'react-native';
import Header from './news163/Header';
import Important from './news163/Important';

function setup(): ReactClass<{}> {
  class Root extends React.Component {
    constructor() {
      super()
    }

    render() {

      return (
        <View>
          <Header></Header>
          <Important
            news = {[
              '队友太坑输掉游戏 玩家头撞显示屏自杀',
              '队友太坑输掉游戏 玩家头2撞显示屏自杀',
              '队友太坑输掉游戏 玩家头3撞显示屏自杀',
              '队友太坑输掉游戏 玩家头4撞显示屏自杀',
              '队友太坑输掉游戏 玩家头5撞显示屏自杀',
            ]}>
          </Important>
        </View>
      );
    }
  }
  return Root
}

const styles = StyleSheet.create({

});
module.exports = setup;
