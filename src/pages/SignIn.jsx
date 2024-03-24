import { Alert, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice.js";
import * as service from "../services/auth.js";
import kitm from "../assets/kitm.png";
import logo from "../assets/SignInlogo.png";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const login = async (e) => {
    e.preventDefault();
    service.login(
      formData,
      dispatch,
      signInStart,
      signInSuccess,
      signInFailure,
      navigate
    );
  };

  return (
    <div className="flex items-center">
      <div className="flex p-3 w-screen max-w-[80%] mx-auto flex-col md:flex-row md:items-center gap-10 m-[-90px]">
        <div className="flex ">
          <form className="flex flex-col gap-4" onSubmit={login}>
            <img src={logo} className="" alt="" />
            <h1 className="text-5xl">Prisijungimas</h1>
            <p className="text-[1.4rem] text-[#a8aebb]  hover:text-blue-600 mb-2">
              Prisijunkite, su savo Office 365 duomenimis.
            </p>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-00 text-white font-bold py-1 px-24 border-b-4 border-blue-700 hover:border-blue-500 rounded buttonas"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-1">Krauna...</span>
                </>
              ) : (
                "Prisijungti"
              )}
            </button>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                Įvyko klaida, patikrinkite el-pašta arba slaptažodį.
              </Alert>
            )}
          </form>
        </div>
        <div className="flex-2 bg-sky-300">
          <img src={kitm} className="object-fill" alt="" />
        </div>
      </div>
    </div>
  );
}
