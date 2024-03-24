import { useSelector } from "react-redux";

const Apklausos = () => {
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser)
  return (
    <div className="">
      <h1>
        Apklausų lentelė <span className="text-red-500">prieinama visiems</span>
      </h1>
    </div>
  );
};

export default Apklausos;
