import styles from "../styles/signin.module.scss";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebaseConfig";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

const Signin = () => {
  const formRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = formRef.current;
    const email: string = emailRef.current.value;
    const password: any = passwordRef.current.value;

    if (
      email === "" ||
      password === ""
    ) {
      toast.error(
        "You must enter your email and password to sign in."
      );
    } else {
        // email = "";
        // password = "";
        signInWithEmailAndPassword(auth, email, password)
          .then((response: any) => {
            const user = response.user;
            // sessionStorage.setItem("Token", user.accessToken);
            form.reset();
            router.push("/");
            toast.success(
              `You have successfully signed in.`
            );
          })
          .catch((error) => {
            switch (error.code) {
              case "auth/invalid-email":
                toast.error(`${email} is not a valid email address.`);
                break;
              case "auth/user-not-found":
                toast(`An account with the email address ${email} does not exist.`);
                break;
              case "auth/wrong-password":
                toast(`Wrong password.`);
                break;
              case "auth/user-disabled":
                toast(`The account with the email address ${email} is currently disabled.`);
                break;
              case "auth/too-many-requests":
                toast(`Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.`);
                break;
              default:
                toast(error.message);
                break;
            }
          });
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
              src="/productivityArt.png"
              alt=""
              width={100}
              height={100}
              priority
              placeholder="blur"
              blurDataURL={"/productivityArt.png"}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <h2>Track Your Productivity</h2>
        </div>
      </div>

      <div className={styles.right}>
        <ToastContainer />
        <h2>Sign in</h2>
        <p className={styles.subtitle}>
          Sign in to your account to gain access.
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
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

          <input type="submit" value="Sign In" />

          <p className={styles.haveAnAccount}>
            Don&apos;t have an account yet? <Link href="/signup">Sign up</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;