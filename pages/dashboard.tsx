import Link from "next/link";
import Image from "next/image";

import styles from "../styles/dashboard.module.scss";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

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
      <div className={styles.container}>
        <Link href="/" className={styles.link}>
          <Image
            src="/jaas-logo.png"
            alt=""
            // fill
            width={100}
            height={100}
            priority
            placeholder="blur"
            blurDataURL={"/jaas-logo.png"}
            style={{
              width: "70%",
              height: "auto",
            }}
          />
        </Link>
        <h1>Dashboard!</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
}
 
export default Dashboard;