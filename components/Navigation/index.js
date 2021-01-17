import React from "react";
import { useRouter } from "next/router";
import { User, Play, File, AlignJustify } from "react-feather";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push("/profile");
  };

  const handleCourses = () => {
    router.push("/courses");
  };

  const handleCertificates = () => {
    router.push("/certificates");
  };

  const handleMore = () => {
    router.push("/more");
  };

  return (
    <>
      <nav className={styles.nav}>
        <a onClick={handleProfileClick} className={styles.nav__link}>
          <User size={32} />
        </a>
        <a onClick={handleCourses} className={styles.nav__link}>
          <Play color="#EF534F" size={32} />
        </a>
        <a onClick={handleCertificates} className={styles.nav__link}>
          <File size={32} />
        </a>
        <a onClick={handleMore} className={styles.nav__link}>
          <AlignJustify size={32} />
        </a>
      </nav>
    </>
  );
};

export default Navigation;
