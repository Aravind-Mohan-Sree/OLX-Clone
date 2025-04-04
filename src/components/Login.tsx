import React, { useEffect } from "react";
import arrow from "../assets/images/asset 2.svg";
import guitar from "../assets/images/guitar.webp";
import close from "../assets/images/asset 12.svg";
import google from "../assets/images/google.png";
import { useAuth } from "../hooks/useAuth";

type LoginProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = ({ setOpen }) => {
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) setOpen(false);
  }, [user, setOpen]);

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-0 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div>
                <img
                  src={close}
                  alt=""
                  className="ms-auto cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-auto p-4">
                  <img src={arrow} alt="" className="rotate-90" />
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <img src={guitar} alt="" width={100} />
                  <h1 className="text-center !mt-5">
                    Help us become one of the safest places <br /> to buy and
                    sell
                  </h1>
                </div>
                <div className="w-aut0 p-4">
                  <img src={arrow} alt="" className="rotate-270" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-6xl text-cyan-400">.</span>
              </div>
              <div
                className="flex justify-center gap-5 border-gray-300 border-[1px] items-center p-3 rounded-[5px] hover:bg-blue-50 transition-colors cursor-pointer mt-5 mb-20"
                onClick={login}
              >
                <img src={google} alt="" width={20} className="inline" />
                <span>Continue with Google</span>
              </div>
              <div className="text-center">
                <small className="block mb-2">
                  All your personal details are safe with us.
                </small>
                <small>
                  If you continue, you are accepting{" "}
                  <span className="text-blue-600">
                    OLX Terms and <br /> Conditions and Privacy Policy
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
