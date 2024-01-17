import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'

class Counter extends Component {
    state = {
        count: 0,
    }

    updateState = () => this.setState({ count: this.state.count + 1})

    resetCounter = () => this.setState({ count: 0 })

    render() {
        return (
            <View>
                <CounterButton count={this.state.count} updateState={this.updateState}/>
                <ResetButton reset={this.resetCounter} />
                <Text>{`Number of Presses: ${this.state.count}`}</Text>
            </View>
        );
    }

}

export default Counter;
