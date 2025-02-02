import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from './store/atoms/count';
import { useMemo } from "react";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
};

function Count() {
  console.log("re-rener");
  return <div>
    <CounterRender />
    <Button />
  </div>
}

function CounterRender() {
  // const count = useContext(CountContext);
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom);

  // const isEven = (count % 2 == 0);

  // const isEven = useMemo(() => {
  //   return count % 2 == 0;
  // }, [count]);

  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Button() {
  console.log("re-render Buttons");
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>

}

export default App;