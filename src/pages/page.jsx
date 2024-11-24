import { AppSidebar } from "../components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import TaskList from "../components/TaskList";
import useTaskStore from "../stores/useTaskStore";

export function Page() {
  // Retrieve selectedListId and lists from the store
  const selectedListId = useTaskStore((state) => state.selectedListId);
  const lists = useTaskStore((state) => state.lists);

  // Find the selected list based on selectedListId
  const selectedList = lists.find((list) => list.id === selectedListId);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-black/15 border-solid">
          <div className="flex items-center gap-2 px-4">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarTrigger className="-ml-1" />
                </TooltipTrigger>
                <TooltipContent side="right">Toggle sidebar</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-8">
          <TaskList />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
