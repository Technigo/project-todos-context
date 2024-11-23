import { useState } from "react";
import { useForm } from "react-hook-form";
import useTaskStore from "../stores/useTaskStore";
import {
  Edit,
  ListChecks,
  Trash2,
  PlusCircle,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Separator } from "./ui/separator";

export function NavLists() {
  const lists = useTaskStore((state) => state.lists);
  const selectedListId = useTaskStore((state) => state.selectedListId);
  const setSelectedList = useTaskStore((state) => state.setSelectedList);

  const addList = useTaskStore((state) => state.addList);
  const editList = useTaskStore((state) => state.editList);
  const deleteList = useTaskStore((state) => state.deleteList);

  const [newListName, setNewListName] = useState("");
  const [isAddingList, setIsAddingList] = useState(false);

  const handleAddList = () => {
    if (newListName.trim() !== "") {
      addList(newListName.trim());
      setNewListName("");
      setIsAddingList(false);
    }
  };

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedListName, setEditedListName] = useState("");
  const [listToEdit, setListToEdit] = useState(null);

  const openEditDialog = (list) => {
    setListToEdit(list);
    setEditedListName(list.name);
    setIsEditDialogOpen(true);
  };

  const handleEditList = () => {
    if (editedListName.trim() !== "") {
      editList(listToEdit.id, { name: editedListName.trim() });
      setIsEditDialogOpen(false);
    }
  };

  const form = useForm();

  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Lists</SidebarGroupLabel>
      <SidebarMenu>
        {lists.map((list) => (
          <SidebarMenuItem key={list.id}>
            <SidebarMenuButton
              tooltip={list.name}
              data-active={selectedListId === list.id}
              onClick={() => setSelectedList(list.id)}
            >
              <ListChecks />
              <span className="flex items-center gap-2">
                {list.name}
                <span className="text-xs leading-none text-white font-semibold pt-1 pb-[0.34rem] px-2 bg-foreground rounded-full">
                  {list.tasks.length}
                </span>
              </span>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem onClick={() => openEditDialog(list)}>
                  <Edit />
                  <span>Edit list</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => deleteList(list.id)}>
                  <Trash2 />
                  <span>Delete list</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem className="flex justify-center">
          <Separator className="bg-border/25 my-3 w-full" />
        </SidebarMenuItem>
        <SidebarMenuItem>
          {isAddingList ? (
            <div className="flex w-full gap-2 px-2">
              <Form {...form}>
                <form
                  onSubmit={handleAddList}
                  className="w-full flex gap-4 flex-col"
                >
                  <FormField
                    name="list-name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">List name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white text-black"
                            placeholder="Enter list name..."
                            value={newListName}
                            onChange={(e) => setNewListName(e.target.value)}
                            autoFocus
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center gap-3 justify-between">
                    <Button
                      variant="default"
                      className="flex-1 basis-full"
                      onClick={handleAddList}
                    >
                      <PlusCircle /> Add
                    </Button>
                    <Button
                      variant="secondary"
                      className="flex-1 basis-full"
                      onClick={() => setIsAddingList(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          ) : (
            <>
              <SidebarMenuButton
                tooltip="Add new list"
                onClick={() => setIsAddingList(true)}
              >
                <PlusCircle />
                <span>Add new list</span>
              </SidebarMenuButton>
            </>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
      {/* Edit List Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit List</DialogTitle>
            <DialogDescription>Update the name of your list.</DialogDescription>
          </DialogHeader>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleEditList}
          >
            <Input
              value={editedListName}
              onChange={(e) => setEditedListName(e.target.value)}
              placeholder="List name"
              autoFocus
            />
            <Button onClick={handleEditList}>Save Changes</Button>
          </form>
        </DialogContent>
      </Dialog>
    </SidebarGroup>
  );
}
