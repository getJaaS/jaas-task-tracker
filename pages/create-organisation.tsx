import styles from '../styles/createOrganisation.module.scss';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

import { auth, database } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

const CreateOrganisation = () => {
  const formRef: any = useRef();
  const organisationNameRef: any = useRef();
  const organisationEmailRef: any = useRef();
  const organisationPhoneNumberRef: any = useRef();
  const departmentsRef: any = useRef();
  const companySizeRef: any = useRef();
  const overviewRef: any = useRef();

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = formRef.current;
    const organisationName: string = organisationNameRef.current.value;
    const organisationEmail: string = organisationEmailRef.current.value;
    const organisationPhoneNumber: string = organisationPhoneNumberRef.current.value;
    const departments: string = departmentsRef.current.value;
    const companySize: number = companySizeRef.current.value;
    const overview: string = overviewRef.current.value;

    try {
      const organisationRef = await addDoc(collection(database, "organisations"), {
        name: organisationName,
        email: organisationEmail,
        phoneNumber: organisationPhoneNumber,
        departments: departments,
        companySize: companySize,
        overview: overview,
        staff: {
          superAdmin: auth.currentUser?.displayName
        }
      })
      
      const staffRef = await addDoc(collection(database, "organisations", organisationRef.id, "staff"), {
        name: auth.currentUser?.displayName,
        email: auth.currentUser?.email,
      });
      toast.success(`Organisation ${organisationName} created successfully.`);
      router.push("/");
      form.reset()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <Link href="/" className={styles.link}>
            <Image
              className={styles.logo}
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
          <div className={`${styles.imageContainer} ${styles.center}`}>
            <Image
              className={styles.logo}
              src="/organisationArt.png"
              alt=""
              width={100}
              height={100}
              priority
              placeholder="blur"
              blurDataURL={"/organisationArt.png"}
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <h2 className={styles.leftText}>Tell us about your Organisation</h2>
        </div>
      </div>

      <div className={styles.right}>
        <ToastContainer />
        <h2>Organisation</h2>
        <p className={styles.subtitle}>
          Submitting these details about your Organisation will allow you to get
          access to services tailor-made for you.
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="organisationName">
            Organisation Name
            <input
              type="text"
              name="organisationName"
              id="organisationName"
              ref={organisationNameRef}
              required
            />
          </label>

          <label htmlFor="organisationEmail">
            Organisation Email
            <input
              type="text"
              name="organisationEmail"
              id="organisationEmail"
              ref={organisationEmailRef}
              required
            />
          </label>


          <label htmlFor="organisationPhoneNumber">
            Organisation Phone Number
            <input
              type="text"
              name="organisationPhoneNumber"
              id="organisationPhoneNumber"
              ref={organisationPhoneNumberRef}
              required
            />
          </label>

          <label htmlFor="departments">
            Departments
            <input
              type="text"
              name="departments"
              id="departments"
              ref={departmentsRef}
              required
            />
          </label>
          
          <label htmlFor="companySize">
            Company Size
            <input
              type="number"
              name="companySize"
              id="companySize"
              ref={companySizeRef}
              required
            />
          </label>

          <label htmlFor="overview">
            Overview
            <textarea
              name="overview"
              id="overview"
              ref={overviewRef}
              required
            />
          </label>

          <input type="submit" value="Submit Organisation" />
        </form>
      </div>
    </div>
  );
};

export default CreateOrganisation;