import React from "react";
import { View, Text, Button } from "react-native";

const CounterButton = (props) => {
    return (
        <View>
            <Button
                onPress={props.updateState}
                title="Press me to +1"
            />
        </View>
    )
}

export default CounterButton;