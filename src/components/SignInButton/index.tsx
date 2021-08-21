import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { useState } from "react";

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color={"#04d361"} />
      UserName
      <FiX color={"#737380"} className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color={"#eba417"} />
      Sign in with Github
    </button>
  );
}
