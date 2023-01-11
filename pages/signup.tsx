import styles from '../styles/signup.module.scss';

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Signup = () => {

  const formRef: any = useRef();
  const firstNameRef: any = useRef();
  const lastNameRef: any = useRef();
  const phoneNumberRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const confirmPasswordRef: any = useRef();
  const termsAndPolicyRef: any = useRef();

  const router = useRouter();
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = formRef.current;
    const firstName: string = firstNameRef.current.value;
    const lastName: string = lastNameRef.current.value;
    const phoneNumber: string = phoneNumberRef.current.value;
    const email: string = emailRef.current.value;
    const password: any = passwordRef.current.value;
    const confirmPassword: any = confirmPasswordRef.current.value;
    const termsAndPolicy: any = termsAndPolicyRef.current;
    
    if (firstName === '' || lastName === '' || phoneNumber === '' || email === '' || password === '' || confirmPassword === '' || !termsAndPolicy.checked) {
      toast.error('Please enter all required information, and agree with the Terms and Policies.')
    } else {
      if (password !== confirmPassword) {
        toast.error("Passwords don't match");
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(
          (response: any) => {
            const user = response.user;
            sessionStorage.setItem("Token", user.accessToken);
            toast.success(
              `Your account has been successfully created, ${firstName} ${lastName}. Proceed to set up your Organisation.`
            );
            updateProfile(auth.currentUser!, {
              displayName: `${firstName} ${lastName}`,
            });
            form.reset();
            router.push("/create-organisation");
          }
        )
        .catch(error => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              toast(`An account with the email address ${email} already exists. Sign in instead.`);
              break;
            case 'auth/invalid-email':
              toast(`The email address ${email} is invalid.`);
              break;
            case 'auth/operation-not-allowed':
              toast(`Error during sign up.`);
              break;
            case 'auth/weak-password':
              toast('Password is not strong enough. Your password should have a minimum of six characters.');
              break;
            default:
              toast(error.message);
              break;
            }
        });
      }
    };
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
        <ToastContainer />
        <h2>Register</h2>
        <p className={styles.subtitle}>
          Create an account to start using the Task Tracker.
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              id="firstName"
              ref={firstNameRef}
              required
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              id="lastName"
              ref={lastNameRef}
              required
            />
          </label>

          <label htmlFor="phoneNumber">
            Phone Number
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              ref={phoneNumberRef}
              required
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              required
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
              required
            />
          </label>

          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              ref={confirmPasswordRef}
              required
            />
          </label>

          <div className={styles.termsAndPolicy}>
            <input
              type="checkbox"
              name="termsAndPolicy"
              id="termsAndPolicy"
              ref={termsAndPolicyRef}
              required
            />
            <span>
              I have read, and I agree with the{" "}
              <Link href="/">Terms and Policy</Link>.
            </span>
          </div>

          <input
            type="submit"
            value="Create Account"
          />

          <p className={styles.haveAnAccount}>
            Already have an account? <Link href="/">Sign in</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}
 
export default Signup;