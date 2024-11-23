import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const createTask = ({
  id,
  title,
  isCompleted = false,
  createdAt = new Date(),
  dueDate = null,
}) => ({
  id,
  title,
  isCompleted,
  createdAt,
  dueDate,
});

const createList = (name) => ({
  id: nanoid(),
  name,
  tasks: [],
});

const useTaskStore = create(
  persist(
    (set, get) => ({
      lists: [
        createList("Start here 🥳"), // Default list
      ],
      selectedListId: null,

      // Initialize the selectedListId to the first list if it's not set
      initializeStore: () => {
        const state = get();
        if (!state.selectedListId && state.lists.length > 0) {
          set({ selectedListId: state.lists[0].id });
        }
      },

      // Add a new task to a specific list
      addTask: (listId, { title, dueDate = null }) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: [
                    ...list.tasks,
                    createTask({
                      id: nanoid(),
                      title,
                      dueDate,
                    }),
                  ],
                }
              : list
          ),
        })),

      // Toggle a task's completion status in a specific list
      toggleTaskCompletion: (listId, taskId) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.map((task) =>
                    task.id === taskId
                      ? { ...task, isCompleted: !task.isCompleted }
                      : task
                  ),
                }
              : list
          ),
        })),

      editTask: (listId, taskId, editedTaskData) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.map((task) =>
                    task.id === taskId ? { ...task, ...editedTaskData } : task
                  ),
                }
              : list
          ),
        })),

      // Delete a task from a specific list
      deleteTask: (listId, taskId) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.filter((task) => task.id !== taskId),
                }
              : list
          ),
        })),

      // Clear all completed tasks from a specific list
      clearCompleted: (listId) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.filter((task) => !task.isCompleted),
                }
              : list
          ),
        })),

      // Add a new list
      addList: (name) => {
        const newList = createList(name);

        set((state) => ({
          lists: [...state.lists, newList],
          selectedListId: newList.id,
        }));
      },

      // Update a list's name
      editList: (listId, editedData) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId ? { ...list, ...editedData } : list
          ),
        })),

      // Delete a list
      deleteList: (listId) =>
        set((state) => ({
          lists: state.lists.filter((list) => list.id !== listId),
          // If the deleted list is the selected one, reset selectedListId
          selectedListId:
            state.selectedListId === listId ? null : state.selectedListId,
        })),

      // Reorder tasks within a list
      reorderTasks: (listId, fromIndex, toIndex) =>
        set((state) => {
          const lists = state.lists.map((list) => {
            if (list.id === listId) {
              const updatedTasks = [...list.tasks];
              const [movedTask] = updatedTasks.splice(fromIndex, 1);
              updatedTasks.splice(toIndex, 0, movedTask);

              return {
                ...list,
                tasks: updatedTasks,
              };
            }
            return list;
          });

          return { lists };
        }),

      // Action to set the selected list
      setSelectedList: (listId) => set({ selectedListId: listId }),
    }),
    {
      name: "tasks", // Key in localStorage
      partialize: (state) => ({
        lists: state.lists,
        selectedListId: state.selectedListId,
      }),
    }
  )
);

// Initialize the store on load
useTaskStore.getState().initializeStore();

export default useTaskStore;
