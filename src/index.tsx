import ReactDOM  from "react-dom";
import GuestList from './state/GuestList';
import UserSearch from "./state/UserSearch";

const App = () => {
    return (
        <div>
            <h2>React State Example with TypeScript</h2>
            <GuestList/>
            <br />
            <br />
            <UserSearch/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));