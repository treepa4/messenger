import { View } from "react-native"

export function BlankBox(props) {
    let width = props.width ?? '0%';
    let height = props.height ?? '0%';
    
    return (
        <View style={{paddingHorizontal: width, paddingVertical: height}}/>
    );
}
