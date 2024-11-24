import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  title: z.string().min(1, "Task name is required"), // Ensure the title is not empty
  dueDate: z.string().nullable().optional(),
});

const AddTaskForm = ({
  initialValues = { title: "", dueDate: "" },
  onSubmit: handleFormSubmit,
  onSuccess,
}) => {
  const selectedListId = useTaskStore((state) => state.selectedListId);

  // Initialize react-hook-form with Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // Handle form submission
  const onSubmit = (data) => {
    if (selectedListId) {
      handleFormSubmit(data);
      form.reset(); // Clear the form after submission
      if (onSuccess) {
        onSuccess(); // Close the dialog only after successful submission
      }
    } else {
      console.error("No list selected.");
    }
  };

  // Handle form submission and keep dialog open
  const onSubmitAndAddAnother = (data) => {
    if (selectedListId) {
      handleFormSubmit(data);
      form.reset(); // Clear the form for the next task
    } else {
      console.error("No list selected.");
    }
  };

  const isEditing = Boolean(initialValues.title);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        {/* Title input field */}
        <FormField
          name="title" // Field name must match the Zod schema
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task name</FormLabel>
              <FormControl>
                <Input
                  {...field} // Connect input to react-hook-form
                  placeholder="Enter task name..."
                  autoFocus
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
              <FormLabel>Due Date (optional)</FormLabel>
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

        {/* Submit buttons */}
        <div className="flex items-center justify-end gap-4">
          {!isEditing && (
            <Button
              variant="outline"
              type="button"
              onClick={form.handleSubmit(onSubmitAndAddAnother)}
              className="mt-4"
            >
              Create task and add another
            </Button>
          )}
          <Button
            type="submit"
            className="mt-4"
          >
            {initialValues.title ? "Update task" : "Create task"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddTaskForm;
