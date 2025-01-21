import { useSelector } from "react-redux";
import Header from "./components/Header";
import Modal from "./components/modal";
import MealFood from "./components/MealFood";


function App() {
  const displayModal=useSelector(state=>state.modal.showModal)
  console.log('this is:',displayModal)
  return (
    <>
     
      <Header />
      {displayModal &&  <Modal />  }
      <MealFood />
     
    </>
  );
}

export default App;
