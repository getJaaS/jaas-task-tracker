import styles from '../styles/signup.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Signup = () => {

  // useEffect(() => {
  //   setFirstName("");
  //   setLastName("");
  //   setPhoneNumber("");
  //   setEmail("");
  //   setPassword("");
  //   setConfirmPassword("");
  // }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const handleChangePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Your account has been successfully created, ${firstName} ${lastName}.`);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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

          <form>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
                name="firstName"
                id="firstName"
              />
            </label>

            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
                name="lastName"
                id="lastName"
              />
            </label>

            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                type="text"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                name="phoneNumber"
                id="phoneNumber"
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                type="text"
                value={email}
                onChange={handleChangeEmail}
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                value={password}
                onChange={handleChangePassword}
                name="password"
                id="password"
              />
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                name="confirmPassword"
                id="confirmPassword"
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