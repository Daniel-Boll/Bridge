import React from "react";
import { useRouter } from "next/router";
import { User, Play, File, AlignJustify } from "react-feather";

import styles from "./Navigation.module.css";

const Navigation = ({ active }) => {
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
          {active == "profile" ? (
            <User color="#EF534F" size={32} />
          ) : (
            <User size={32} />
          )}
        </a>
        <a onClick={handleCourses} className={styles.nav__link}>
          {active == "courses" ? (
            <Play color="#EF534F" size={32} />
          ) : (
            <Play size={32} />
          )}
        </a>
        <a onClick={handleCertificates} className={styles.nav__link}>
          {active == "certificates" ? (
            <File color="#EF534F" size={32} />
          ) : (
            <File size={32} />
          )}
        </a>
        <a onClick={handleMore} className={styles.nav__link}>
          {active == "more" ? (
            <AlignJustify color="#EF534F" size={32} />
          ) : (
            <AlignJustify size={32} />
          )}
        </a>
      </nav>
    </>
  );
};

export default Navigation;
