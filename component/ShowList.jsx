import styles from "../styles/ShowList.module.css";

const ShowList = ({ list }) => {
  return (
    <div>
      {list &&list.map((item) => {
        const { name, phone, location, id, ostan, brands } = item;
        return (
          <div className={styles.container}>
            <div key={id} className={styles.items}>
              <div className={styles.item}>
                <p>آدرس</p>
                <p>{location}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.item}>
                <p>شماره تماس</p>
                <p>{phone}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.item}>
                <p>نام</p>
                <p>{name}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.item}>
                <p>شهر</p>
                <p>{ostan}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.item}>
                <p>برند</p>
                <p>{brands}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.item}>
                <p>مبلغ کل</p>
                <p>239,000 تومان</p>
              </div>

              <hr className={styles.hr} />
              <button type='button' className={styles.button}>
                پرداخت
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShowList;
