import styles from "../styles/List.module.css";
import { city } from "../data/city";
import { brand } from "../data/brand";

import { useState } from "react";
import ShowList from "./ShowList";
import Alert from "./Alert";
import PopUp from "../component/Popup";
import Takhfif from "../component/Takhfif";
import PopupTwo from "../component/PopupTwo";
const List = () => {
  //states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [list, setList] = useState([]);
  const [ostan, setOstan] = useState(true);
  const [brands, setBrands] = useState("");
  const [open, setOpen] = useState(false);
  const [openPopUpTwo, setOpenopUpTwo] = useState(false);

  //states//

  //Alert//

  const showAlert = (show = true, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  //Alert//

  //HandleInput//
  const handleInput = (e) => {
    e.preventDefault();
    if (name && phone && location && ostan && brands) {
      setList([
        {
          name,
          location,
          phone,
          id: new Date().getTime().toString(),
          ostan,
          brands,
        },
      ]);
      showAlert(true, "اطلاعات با موفقیت ثبت شد", "sucsess");
    } else {
      showAlert(true, "تمامی فیلدها کامل شود", "error");
    }
    setName("");
    setPhone("");
    setLocation("");
  };

  const payment = () => {
    if(name =="" || phone=="" || location==""){
      showAlert(true, "تمامی فیلدها کامل شود", "error");
      return
    }
    setOpen(!open);
  };

  //HandleInput//
  return (
    <div className={styles.container}>
      <div className="alert-text"> {<p>{alert.msg}</p>}</div>
      <form className={styles.form} onSubmit={handleInput}>
        <select
          name="city"
          className={styles.select}
          value={ostan}
          onChange={(e) => setOstan(e.target.value)}
        >
          {city.map((item) => {
            return <option key={item.id}>{item.city}</option>;
          })}
        </select>
        <select
          name="brand"
          className={styles.select}
          value={brands}
          onChange={(e) => setBrands(e.target.value)}
        >
          {brand.map((item) => {
            return <option key={item.id}>{item.brand}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="شماره موبایل"
          className={styles.select}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className={styles.select}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="آدرس محل بازدید"
          className={styles.select}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <div className={styles.copen}>
          <h2 className={styles.text}>کد تخفیف</h2>
          <button
            type="button"
            className={styles.button}
            onClick={() => setOpenopUpTwo(!openPopUpTwo)}
          >
            وارد کنید
          </button>

          <PopupTwo openPopUpTwo={openPopUpTwo} setOpenopUpTwo={setOpenopUpTwo}>
            <Takhfif></Takhfif>
          </PopupTwo>
        </div>
        <hr />
        <div className={styles.price}>
          <h2 className={styles.text}>هزینه کل</h2>
          <h3>239,000 تومان</h3>
        </div>
        <button type="submit" className={styles.btn} onClick={() => payment()}>
          پرداخت و ثبت هزینه
        </button>
      </form>

      <PopUp open={open} setOpen={setOpen}>
        <ShowList list={list} />
      </PopUp>
    </div>
  );
};
export default List;
