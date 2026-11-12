import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";

function App() {

  return (

    // MAIN //
    <main className="min-h-screen bg-gray-200 text-gray-700 p-6">

      <h1 className="text-4xl md:text-5xl font-bold italic text-center mb-8">
        Minha Todo List
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8">

        <div className="w-full max-w-2xl mx-auto border border-blue-300 bg-white rounded-lg p-5">
          <TodoForm />
          <TodoFilters />
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <TodoList />
        </div>

      </div>

    </main>
    // MAIN //

  );

}

export default App;