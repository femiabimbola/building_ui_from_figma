import styles from "./styles";

import { NavBar } from "./components";

const App = () => (
  <div className={"bg-primary w-full overflow-hidden"}>
    <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
      <NavBar />
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <p>The hero section</p>
    </div>

    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <p>stats</p>
        <p> Business </p>
        <p className={`text-white`}> Business </p>
      </div>
    </div>
  </div>
);

export default App;
