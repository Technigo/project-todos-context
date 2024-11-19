import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import useTaskStore from "../stores/useTaskStore";

// Define Zod schema for validation
const formSchema = z.object({
  title: z.string().min(1, "Title is required"), // Ensure the title is not empty
  dueDate: z.string().nullable().optional(),
});

const AddTaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);

  // Initialize react-hook-form with Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      dueDate: null,
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    addTask({
      title: data.title,
      dueDate: data.dueDate || null,
    });
    form.reset(); // Clear the form after submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Title input field */}
        <FormField
          name="title" // Field name must match the Zod schema
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task title</FormLabel>
              <FormControl>
                <Input
                  {...field} // Connect input to react-hook-form
                  placeholder="Add new task"
                />
              </FormControl>
              <FormMessage /> {/* Displays validation errors */}
            </FormItem>
          )}
        />

        {/* Due date*/}
        <FormField
          name="dueDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button
          type="submit"
          className="mt-4"
        >
          Add Task
        </Button>
      </form>
    </Form>
  );
};

export default AddTaskForm;
