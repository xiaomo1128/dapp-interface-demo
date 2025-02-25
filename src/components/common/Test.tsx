import { useImmer } from "@/hooks/useImmer";
import { todoCountAtom } from "@/states";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

function Test() {
  const [count, setCount] = useAtom(todoCountAtom); // 使用jotai的atom

  const [user, setUser] = useImmer({
    name: "John",
    age: 25,
    scores: {
      math: 90,
      english: 85,
    },
  });
  // const [user, setUser] = useState({
  //   name: "John",
  //   age: 25,
  //   scores: {
  //     math: 90,
  //     english: 85,
  //   },
  // });

  console.log("Test组件 User State Updated: ");
  // useEffect(() => {
  // }, []);

  // 错误方式：直接修改同一个对象
  const handleWrongUpdate = () => {
    setUser({
      name: "Johnlll",
      age: 25,
      scores: {
        math: 90,
        english: 85,
      },
    });

    // user.age += 1;
    // user.scores.math += 5;
    // setUser(user); // 这不会触发重新渲染，因为引用没有改变
  };

  // 正确方式：创建新对象 不使用immer的情况，手动创建新对象
  const handleCorrectUpdate = () => {
    setUser((draft) => {
      draft.age += 1;
      draft.scores = {
        math: 90,
        english: 85,
      };
      draft.name = `John${draft.scores}`;
    });

    // setUser({
    //   ...user,
    //   age: user.age + 1,
    //   scores: {
    //     ...user.scores,
    //     math: user.scores.math + 5,
    //   },
    // });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">State Update Demo</h2>

      <div className="mb-4">
        <p className="text-gray-700">Name: {user.name}</p>
        <p className="text-gray-700">Age: {user.age}</p>
        <p className="text-gray-700">Math Score: {user.scores.math}</p>
        <p className="text-gray-700">English Score: {user.scores.english}</p>
      </div>

      <div className="space-x-4">
        <button
          onClick={handleWrongUpdate}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Wrong Update (No Effect)
        </button>

        <button
          onClick={handleCorrectUpdate}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Correct Update
        </button>
      </div>
    </div>
  );
}

Test.whyDidYouRender = true;
export default Test;
