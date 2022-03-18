import React, {useState} from 'react'
import {Body, Container} from './styles/styles'
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./counterSlice";
import {colorchange, colorchange2} from "./colors";


function App() {
  const [count, setCount] = useState('0')
  const values = useSelector((state) => state.tommy.value)
  const special = useSelector((state) => state.hyewon.color)
  const special2 = useSelector((state) => state.hyewon.color2)
  const dispatch = useDispatch()

  return (
    <Body color={special}>
        <Container color={special2}>
            <h1>Change your Background!</h1>

            <div>
                <button onClick={() => {
                    dispatch(colorchange());
                    dispatch(colorchange2())
                }} >🎨</button>
            </div>
            <h1>Count:{count}</h1>
            <h1>Value:{values}</h1>
            <div>
                <button onClick={() => setCount(count+ 1)}>❤️ </button>
                <button onClick={() => setCount(count- 1)}>💔</button>
                <button onClick={() => dispatch(increment())}>🙂</button>
                <button onClick={() => dispatch(decrement())}>🙃</button>
            </div>
        </Container>
    </Body>
  );
}

export default App;
