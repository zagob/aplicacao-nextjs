import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(false);

  useEffect(() => {
    if (countDown === true && count > 0) {
      setTimeout(() => {
        setCount((old) => old - 1);
      }, 1000);
    }

    if (count <= 0) {
      setCountDown(false);
      setCount(0)
    }
  }, [count, countDown]);

  function handleCount() {
    setCount((old) => old + 1);
  }

  function handleReset() {
    setCountDown(false);
    setCount(0);
  }
  return (
    <div className="content">
      <h1>Contador</h1>
      <h2>{count}</h2>
      <div className="section">
        <button
          disabled={countDown ? true : false}
          className="btn"
          onClick={handleCount}
        >
          Contar
        </button>
        <button
          className="btn btn-countDown"
          disabled={count === 0 ? true : false}
          onClick={() => (countDown ? setCountDown(false) : setCountDown(true))}
        >
          {countDown ? "Parar" : "Iniciar Contagem Regressiva"}
        </button>
        <button
          disabled={count === 0 ? true : false}
          className="btn btn-reset"
          onClick={handleReset}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
