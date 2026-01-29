 import { useSelector, useDispatch } from "react-redux";
 import Input from "@/Components/InputPage/InPut";
 
export default function Home() {
 
  const handleAdd = () => {
    const description = prompt("Enter bug description:");
    if (description) dispatch(addBug(description));
  };

  const handleRemove = (id) => {
    dispatch(removeBug(id));
  };

  return (
    <div style={{ padding: 20 }}>
       <Input />
       
    </div>
  );
}
