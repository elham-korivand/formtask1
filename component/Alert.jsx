import styles from "../styles/Alert.module.css";

const Alert = ({ alert }) => {
  return <p className={styles.alert}>{alert.msg}</p>;
};
export default Alert;
