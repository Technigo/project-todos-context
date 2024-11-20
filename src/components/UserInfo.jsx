import { useUserStore } from "../stores/useUserStore";

export const UserInfo = () => {
  const { userName } = useUserStore()
  return(
    <> 
    <div>
      <p>hi there {userName}</p>
    </div>
    </>
  )
};