import binImage from "../assets/bin.png"
import "./BinButton.css";
import { useToDoStore } from "../stores/useToDoStore";

export const BinButton = ({ todoId }) => {
    const removeTodo = useToDoStore(state => state.removeTodo)

    return (
        <button className="bin-button" onClick={() => removeTodo(todoId)}>
            <img className="image-bin"
                src={binImage}
                alt="Delete"
            >
            </img>
        </button>
    )
}