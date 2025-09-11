import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const {backendUrl} = useContext(AppContext);

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced) {
        return;
      }

      try {
        const token = await getToken();

        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
        };

        await axios.post(
          `${backendUrl}/users`,
          userData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );


        setSynced(true);
      } catch (error) {
        console.error("User sync failed", error);
        toast.error("User sync failed, please try again");
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, getToken, user, synced, backendUrl]);

  return null;
};

export default UserSyncHandler;
