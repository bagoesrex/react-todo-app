import { useEffect, useState } from "react";
import { api } from "../../api";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  async function fetchTodos() {
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Gagal fetch Todos. Silahkan Coba lagi");
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  async function handleCreate(newTodo) {
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Gagal membuat Todo. Silahkan Coba lagi");
    }
  }

  async function handleUpdate(id, newTodo) {
    try {
      await api.todos.update(id, newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Gagal memperbarui Todo. Silahkan Coba lagi");
    }
  }

  async function handleDelete(id) {
    try {
      await api.todos.delete(8);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Gagal menghapus Todo. Silahkan Coba lagi");
    }
  }

  return {
    data: todos,
    fetch: fetchTodos,
    filter: setFilters,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error: {
      errorMessage: errorMessage,
      clear: () => setErrorMessage(),
    },
  };
}
