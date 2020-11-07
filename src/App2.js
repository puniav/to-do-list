import logo from './logo.svg';
import './App2.css';

function App2(props) {

    const clickHandler = function () {
        //names = ['Harkirat', 'Jayant'];

        props.func(props.id);
    }

    return (
        <div class="abc">
            Hello {props.name}

            <button onClick={clickHandler}>I am button</button>
        </div>
    );
}

export default App2;
