import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handlePress = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Press</Text>
        </TouchableHighlight>
        <Text>{this.state.count}</Text>
      </View>
    )
  }
}
