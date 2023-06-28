import { Fragment } from "react";
import styles from "../styles/sidebar.module.scss";
import Image from "next/image";

const Sidebar = (props: any) => {
  function changeColor(event: any): void {
    (event.target as HTMLElement).classList.add("hovered");
    ((event.target as HTMLElement).children[1] as HTMLElement).classList.add("hovered");
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
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
                width: "50%",
                height: "auto",
              }}
            />
          </div>

          <div className={styles.sidebarItems}>
            <div className={styles.item} onMouseOver={() => changeColor}>
              <Image
                src="/dashboard.svg"
                alt="dashboard"
                width={30}
                height={30}
              />
              <p className="font-14 font-500 text-transparent-black item-text">
                Dashboard
              </p>
            </div>

            <div className={styles.item} onMouseOver={() => changeColor}>
              <Image src="/teams.svg" alt="teams" width={30} height={30} />
              <p className="font-14 font-500 text-transparent-black item-text">
                Teams
              </p>
            </div>

            <div className={styles.item} onMouseOver={() => changeColor}>
              <Image
                src="/timesheets.svg"
                alt="timesheets"
                width={30}
                height={30}
              />
              <p className="font-14 font-500 text-transparent-black item-text">
                Timesheets
              </p>
            </div>

            <div className={styles.item} onMouseOver={() => changeColor}>
              <Image
                src="/projects.svg"
                alt="projects"
                width={30}
                height={30}
              />
              <p className="font-14 font-500 text-transparent-black item-text">
                Projects
              </p>
            </div>

            <div className={styles.item} onMouseOver={() => changeColor}>
              <Image
                src="/settings.svg"
                alt="settings"
                width={30}
                height={30}
              />
              <p className="font-14 font-500 text-transparent-black item-text">
                Settings
              </p>
            </div>
          </div>
        </div>
        <div className={styles.children}>
          {/* <Component {...props} /> */}
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;