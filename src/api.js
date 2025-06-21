export const api = {
  todos: {
    getAll(params = {}) {
      const searchParams = new URLSearchParams(params).toString();

      return fetch(
        `${import.meta.env.VITE_MOCKAPI_BASE_URL}todos?${searchParams}`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      ).then((res) => {
        if (res.ok) return res.json();
        if (res.status === 404) return [];
      });
    },

    create(data) {
      return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) return res.json();
      });
    },

    update(id, data) {
      return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) return res.json();
      });
    },

    delete(id) {
      return fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}todos/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) return res.json();
      });
    },
  },
};
