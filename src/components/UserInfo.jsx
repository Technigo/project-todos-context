import { useUserStore } from "../stores/useUserStore";

export const UserInfo = () => {
  const { userName } = useUserStore()
  return(
    <> 
    <div>
      <h2>User Profile</h2>
      <p>hi there {userName}</p>
    </div>
    </>
  )
};