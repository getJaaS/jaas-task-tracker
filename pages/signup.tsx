import styles from '../styles/signup.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const Signup = () => {

  const formRef: any = useRef();
  const firstNameRef: any = useRef();
  const lastNameRef: any = useRef();
  const phoneNumberRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const confirmPasswordRef: any = useRef();
  
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = formRef.current;
    const firstName: string = firstNameRef.current.value;
    const lastName: string = lastNameRef.current.value;
    const phoneNumber: string = phoneNumberRef.current.value;
    const email: string = emailRef.current.value;
    const password: any = passwordRef.current.value;
    const confirmPassword: any = confirmPasswordRef.current.value;

    alert(`Your account has been successfully created, ${firstName} ${lastName}.`);
    
    console.log(form);
    form.reset();
  }

    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <div className={`${styles.imageContainer} ${styles.center}`}>
              <Image
                className={styles.logo}
                src="/productivityArt.png"
                alt=""
                width={100}
                height={100}
                priority
                placeholder="blur"
                blurDataURL={"/productivityArt.png"}
                style={{ width: "100%", height: "auto" }}
              />

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
                  position: "absolute",
                  left: "50%",
                }}
              />
            </div>
            <h2>Track Your Productivity</h2>
          </div>
        </div>

        <div className={styles.right}>
          <h2>Register</h2>
          <p className={styles.subtitle}>
            Create an account to start using the Task Tracker.
          </p>

          <form ref={formRef}>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                id="firstName"
                ref={firstNameRef}
              />
            </label>

            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                id="lastName"
                ref={lastNameRef}
              />
            </label>

            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                ref={phoneNumberRef}
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                id="email"
                ref={emailRef}
              />
            </label>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
              />
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                ref={confirmPasswordRef}
              />
            </label>

            <div className={styles.termsAndPolicy}>
              <input
                type="checkbox"
                name="termsAndPolicy"
                id="termsAndPolicy"
              />
              <span>
                I have read, and I agree with the{" "}
                <Link href="#">Terms and Policy</Link>.
              </span>
            </div>

            <input type="submit" value="Create Account" onClick={handleSubmit} />

            <p className={styles.haveAnAccount}>
              Already have an account? <Link href="#">Sign in</Link>.
            </p>
          </form>
        </div>
      </div>
    );
}
 
export default Signup;