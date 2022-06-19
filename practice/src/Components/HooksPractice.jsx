import { useState, useTransition } from "react";

const HooksPractice = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const listSize = 2000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < listSize; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading"
        : list.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            );
          })}
    </>
  );
};

export default HooksPractice;
