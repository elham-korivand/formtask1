import "../styles/globals.css";
import List from "../component/List";
import ShowList from "../component/ShowList";
import Takhfif from "../component/Takhfif";

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <List />
     
      <Component {...pageProps} />
      
    </div>
  );
}

export default MyApp;
