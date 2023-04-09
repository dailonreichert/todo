import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Task } from '../components/Task';
import Icon from 'react-native-vector-icons/Feather';

//import clipboard from '../image/Clipboard.png';

type typeTask = {
    id: Number,
    description : String,
    isCheck : boolean
}

export default function Home(){
    const [taskNumber, setTaskNumber] = useState(0);
    const [task, setTask] = useState<typeTask[]>([]);
    const [taskName, setTaskName] = useState('');
    const [countCreated, setCountCreated] = useState(0);
    const [countCompleted, setCountCompleted] = useState(0);

    function handleTaskAdd(){
        setTask(prevState => [...prevState, {id :taskNumber, description: taskName, isCheck : false} ]);
        setTaskName('');
        setCountCreated(countCreated+1);
        setTaskNumber(taskNumber+1);
    }

    function handleTaskRemove(task: typeTask){
        console.log(task);
        setTask(prevState => prevState.filter(prevTask => prevTask.id !== task.id));
        setCountCreated(countCreated-1);
    }

    function handleOnCheck(completed : boolean){
        completed ? setCountCompleted(countCompleted+1) : setCountCompleted(countCompleted-1);
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
                    <Text style={styles.countCreatedText}>Criadas</Text>
                    <Text style={styles.countCreatedNumber}>{countCreated}</Text>
                    <Text style={styles.countCompletedText}>Concluídas</Text>
                    <Text style={styles.countCompletedNumber}>{countCompleted}</Text>
                </View>
                <FlatList
                    keyExtractor={item => String(item.id)}
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
                            key={Number(item.id)}
                            id={item.id}
                            description={String(item.description)}
                            onRemove={() => handleTaskRemove(item)}
                            onCheck={handleOnCheck}/>
                    )}
                />
            </View>
        </>
    );
}