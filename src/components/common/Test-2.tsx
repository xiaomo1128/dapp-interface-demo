import { atom, useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { useState } from "react";

// 定义一个带有immer的atom来存储todos
const todosAtom = atomWithImmer([
  { id: 1, text: "学习 Jotai", completed: false },
  { id: 2, text: "学习 Immer", completed: false },
]);

// 定义一个派生atom来计算完成的任务数量
const completedCountAtom = atom((get) => {
  const todos = get(todosAtom);
  return todos.filter((todo) => todo.completed).length;
});

export default function TodoList() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [completedCount] = useAtom(completedCountAtom);
  const [newTodoText, setNewTodoText] = useState("");

  // 添加新的todo
  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;

    setTodos((draft) => {
      draft.push({
        id: Date.now(),
        text: newTodoText,
        completed: false,
      });
    });
    setNewTodoText("");
  };

  // 切换todo的完成状态
  const toggleTodo = (id: number) => {
    setTodos((draft) => {
      const todo = draft.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    });
  };

  // 删除todo
  const deleteTodo = (id: number) => {
    setTodos((draft) => {
      const index = draft.findIndex((t) => t.id === id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List with Jotai & Immer</h1>

      <div className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
            placeholder="添加新任务..."
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            添加
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          完成进度: {completedCount} / {todos.length}
        </p>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-white border rounded shadow-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-4 w-4"
              />
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
