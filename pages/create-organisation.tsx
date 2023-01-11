import styles from '../styles/createOrganisation.module.scss';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

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
            Organisation Name:
            <input
              type="text"
              name="organisationName"
              id="organisationName"
              ref={organisationNameRef}
              required
              placeholder="Enter the name of your Organisation"
            />
          </label>

          <label htmlFor="organisationEmail">
            Organisation Email:
            <input
              type="text"
              name="organisationEmail"
              id="organisationEmail"
              ref={organisationEmailRef}
              required
              placeholder="Enter the email of your organisation"
            />
          </label>


          <label htmlFor="organisationPhoneNumber">
            Organisation Phone Number:
            <input
              type="text"
              name="organisationPhoneNumber"
              id="organisationPhoneNumber"
              ref={organisationPhoneNumberRef}
              required
              placeholder="Enter the phone number of your organisation"
            />
          </label>

          <label htmlFor="departments">
            Departments:
            <input
              type="text"
              name="departments"
              id="departments"
              ref={departmentsRef}
              required
              placeholder="Enter the departments of your organisation"
            />
          </label>
          
          <label htmlFor="companySize">
            Company Size:
            <input
              type="number"
              name="companySize"
              id="companySize"
              ref={companySizeRef}
              required
              placeholder="Enter your company size"
            />
          </label>

          <label htmlFor="overview">
            Overview:
            <textarea
              name="overview"
              id="overview"
              ref={overviewRef}
              required
              placeholder="Enter a brief overview of your organisation"
            />
          </label>

          <input type="submit" value="Submit Organisation" />
        </form>
      </div>
    </div>
  );
};

export default CreateOrganisation;