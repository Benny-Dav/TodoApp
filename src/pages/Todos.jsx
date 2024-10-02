import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () => {
    return (
        <div>
            <h1>All Todos</h1>
            <div>
                <TodoTile title={"Creating a React App"}/>
                <TodoTile title={"Install Tailwind"}/>
                <TodoTile title={"Commit code to GitHub"}/>
                <TodoTile title={"Host on Netlify"}/>
            </div>
            <Link to = {"add"}>Add Todo</Link>
        </div>
    );
}
  
export default Todos;