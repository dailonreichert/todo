import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Task } from '../components/Task';
import Icon from 'react-native-vector-icons/Feather';

//import clipboard from '../image/Clipboard.png';

export default function Home(){
    const [task, setTask] = useState<String[]>([]);
    const [taskName, setTaskName] = useState('');
    const [countCreated, setCountCreated] = useState(0);

    function handleTaskAdd(){
        setTask(prevState => [...prevState, taskName]);
        setTaskName('');
        setCountCreated(countCreated+1);
    }

    function handleTaskRemove(description: String){
        setTask(prevState => prevState.filter(task => task !== description));
        setCountCreated(countCreated-1);
    }

    return (
        <>
            <View style={styles.topContainer}>
                <Image source={require('../image/Logo.png')}/>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onChangeText={setTaskName}
                        value={taskName}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTaskAdd}
                    >
                        <Icon name='plus-circle' size={20} color='#F2F2F2'/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>Criadas</Text>
                    <Text style={styles.counterNumber}>{countCreated}</Text>
                </View>
                <FlatList
                    keyExtractor={item => item}
                    data={task}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyListView}>
                            <Image style={styles.imageEmptyList} source={require('../image/Clipboard.png')}/>
                            <Text style={styles.emptyListTextTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.emptyListTextDescription}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                    renderItem={({item}) => (
                        <Task
                            key={item}
                            description={item}
                            onRemove={() => handleTaskRemove(item)}/>
                    )}
                />
            </View>
        </>
    );
}