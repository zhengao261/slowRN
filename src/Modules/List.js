'use strict';
var React = require('React');
import {
  ScrollView,
  Text,
  confirm
} from 'react-native';
import Detail from './Detail'
const List = React.createClass({
  goTo() {
    this.props.navigator.push({
      component:Detail,
      title:'详情',
      rightButtonTitle:'购物车',
      onRightButtonPress() {
        alert('购物车')
      }
    })
  },
  render() {
     return (
      <ScrollView>
        <Text onPress={this.goTo}> 123</Text>
      </ScrollView>
     )
  }

})

module.exports = List;
