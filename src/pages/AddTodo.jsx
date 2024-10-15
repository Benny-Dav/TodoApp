
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        // Collect form input
        const formData = new FormData(event.target);
        // Post data to todo api
        await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`,formData);
            
        //     {
        //     title:formData.get("todo")
        // });    was removed because with file selection, object cannot be specified, only formData can be sent

        // Goto the homepage
        navigate("/");
    }
    return (
        <div>
            <h1>Add a new Todo</h1>
            <form onSubmit={saveTodo}>
                {/* changed input name from "todo" to "title" because with adding a file, you can't send objects. Sending the whole form, so name of input should correspond */}
                <input type="text" placeholder="Enter your todo" required name="title"/>  /
                <input type="file" required name="icon"/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
export default AddTodo;