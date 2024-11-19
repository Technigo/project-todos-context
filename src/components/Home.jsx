import { appContentStore } from "../stores/AppContentStore";

export const Home = () => {
  const { appContent } = appContentStore()

  return(
    <h1>{appContent.heading}</h1>
  );
};