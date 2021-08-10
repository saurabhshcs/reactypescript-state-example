import ReactDOM  from "react-dom";
import UserSearch from "./refs/UserSearch";
import GuestList from './state/GuestList';

const App = () => {
    return (
        <div>
            <h2>React State Example with TypeScript</h2>
            <GuestList/>
            <br />
            <br />
            <UserSearch/>
            <br />
            <br />
            <UserSearch />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));