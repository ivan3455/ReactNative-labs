import React from "react";
import { View, Text, Button } from "react-native";

const ResetButton = (props) => {
    return (
        <View>
            <Button
                onPress={props.reset}
                title="Reset"
            />
        </View>
    )
}

export default ResetButton;