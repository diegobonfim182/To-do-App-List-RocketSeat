import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

{/* onRemove Não tem retorno essa função por isso void de vázio */};
type Props = {
    name: string;
    onRemove: () => void; 
}

export function Participant({name, onRemove}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

{/* Você pode ao invés de colocar o props como acima colocar o name que é o item que vc quer fazer o props direto em chaves para chamar

Como está em typescript você tem que tipar o props ou o name. Ou seja, definir tipo as classes do objeto

type Props = {
    name: string;
}


Assim no TSX = Typescript

export function Participant(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export function Participant({name}: Props) {
    return (
        <View style={styles.container}>
            <Text style={name}>{props.name}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

Assim n Jsx
export function Participant(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export function Participant({name}) {
    return (
        <View style={styles.container}>
            <Text style={name}>{props.name}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
} */}