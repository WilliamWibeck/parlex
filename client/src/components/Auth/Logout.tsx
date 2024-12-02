import { Button } from "@mui/material";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

type Props = {};

const Logout = (props: Props) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <Button onClick={handleLogout}>Logout :D</Button>;
};

export default Logout;
