import { View, Text, TouchableOpacity,  } from "react-native";
import { styles } from "./styles";
import Icon  from "react-native-vector-icons/Feather";
import Checkbox from "react-native-bouncy-checkbox";
import { Key, useState } from "react";

type Props = {
    id: Number | null,
    description: string,
    onRemove: () => void,
    onCheck : (check: boolean) => void
}

export function Task(props: Props){
    const [checkboxState, setCheckboxState] = useState(false);

    function onPressCheckbox(){
        setCheckboxState(!checkboxState);
        props.onCheck(!checkboxState);
    }

    return(
        <View style={styles.list}>
            <Checkbox 
                style={styles.checkbox}
                size={20}
                fillColor= {checkboxState ? '#5E60CE' : '#4EA8DE'}
                innerIconStyle={{borderWidth: 2}}
                textStyle={{color: checkboxState ? '#808080' : '#F2F2F2'}}
                text={props.description}
                onPress={onPressCheckbox}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={props.onRemove}
            >
                <Icon name='trash-2' size={20} color='#808080'/>
            </TouchableOpacity>
        </View>
    );
}