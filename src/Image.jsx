import Pic from "./Components/Pic.jpg"
import './App.css';
import Title from "./Title";

function Image() {
  return (
    <div className="Imageapp">
     
        <img src={Pic} className="Image" alt="logo" />
        <Title />
      
   
    </div>
  );
}

export default Image;
