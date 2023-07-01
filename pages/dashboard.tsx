import Link from "next/link";
import Image from "next/image";

import styles from "../styles/dashboard.module.scss";
import { signOut } from "firebase/auth";
import { auth, database } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [loading, setLoading]: any = useState(true);
  const [organisations, setOrganisations]: any = useState([]);
  // const organisations: any = [];

  useEffect(() => {
    fetchData();
    console.log(organisations.length);
  });

  const fetchData = async () => {
    const userId = sessionStorage.getItem("UserId");
    const q = query(
      collection(database, "organisations"),
      where("ownerId", "==", userId)
    );

    const organisationSnapshot: any = await getDocs(q)
      .then((organisationSnapshot => {
        const newData = organisationSnapshot.docs
          .map((doc: any) => ({ ...doc.data(), id: doc.id }));
        setOrganisations(newData);
    }))

    // console.log(organisationSnapshot);
    // organisationSnapshot.forEach((organisation) => {
    //   return organisations.push(organisation.data());
    // });
    setLoading(false);
    // console.log(organisations.length);

  };

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
      {loading && <p>Loading...</p>}
      {organisations && (
        <div className={`${styles.container} container`}>
          <div className={styles.content}>
            <div className={`${styles.card} ${styles.organisationsCard}`}>
              <p className="card-title">Organisations</p>
              <p className="card-count">{organisations.length}</p>
            </div>
            <div className={`${styles.card} ${styles.staffCard}`}>
              <p className="card-title">All Staff</p>
              <p className="card-count">23</p>
            </div>
            <div className={`${styles.card} ${styles.teamsCard}`}>
              <p className="card-title">All Teams</p>
              <p className="card-count">6</p>
            </div>
            <div className={`${styles.card} ${styles.projectsCard}`}>
              <p className="card-title">All Projects</p>
              <p className="card-count">6</p>
            </div>
          </div>

          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </Sidebar>
  );
}
 
export default Dashboard;