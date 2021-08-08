import ReactDOM  from "react-dom";
import GuestList from './state/GuestList';

const App = () => {
    return (
        <div>
            <h2>React State Example with TypeScript</h2>
            <GuestList/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));