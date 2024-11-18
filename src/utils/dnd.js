export const handleDragEnd = (event) => {
  if (event.over && event.over.id === "droppable") {
    setIsDropped(true);
  }
};
