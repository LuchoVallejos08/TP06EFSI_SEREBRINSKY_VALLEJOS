import { ClipLoader } from "react-spinners";
import "./Loader.css";


const Loader = () => {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
      }}
    >

      <ClipLoader
        size={60}
      />

    </div>

  );

};

export default Loader;