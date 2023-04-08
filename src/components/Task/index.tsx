import { View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import Icon  from "react-native-vector-icons/Feather";

type Props = {
    description: String,
    onRemove: () => void
}

export function Task(props: Props){
    return(
        <View style={styles.list}>
            <Text style={styles.description}>
                {props.description}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={props.onRemove}
            >
                <Icon name='trash-2' size={20} color='#808080'/>
            </TouchableOpacity>
        </View>
    );
}