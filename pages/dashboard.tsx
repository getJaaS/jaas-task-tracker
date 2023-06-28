import Link from "next/link";
import Image from "next/image";

import styles from "../styles/dashboard.module.scss";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";

const Dashboard = () => {

    const router = useRouter();

    const handleSignOut = (e: any) => {
        signOut(auth)
            .then(() => {
            sessionStorage.removeItem("Token");
            toast.success("Successfully signed out");
            router.push("/signin");
        })
            .catch((error: any) => {
            toast.error(error.message);
        })
    }

  return (
    <Sidebar>
      <div className={styles.container}>
        <h1>Dashboard!</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </Sidebar>
  );
}
 
export default Dashboard;