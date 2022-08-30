import type { NextPage } from "next";

import { RegisterForm } from "src/modules";
import { Layout } from "src/components";

// import { FcGoogle } from "react-icons/fc";
// import { FaTwitter, FaGithub } from "react-icons/fa";

const RegisterPage: NextPage = () => {
  return (
    <Layout title="Register">
      <div className="auth-container flex flex-wrap">
        <div className="auth-container__content registration flex flex-col justify-between items-center">
          <div className="auth-container-header flex flex-col justify-center items-center text-center">
            <h1 className="title text-3xl font-bold">
              Welcome to EazzyInteract
            </h1>
            <div className="description text-base">
            EazzyInteract is a platform of Software developers

            </div>
          </div>
         
          <div className="w-full actions-email mt-2">
              <RegisterForm message="Already have an account?" />
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
