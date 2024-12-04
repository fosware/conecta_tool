import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const AuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass}>
        <Image
          src="icons/github.svg"
          alt="Auth logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in</span>
      </Button>
      <Button className={buttonClass}>
        <Image
          src="icons/github.svg"
          alt="Auth logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in Google</span>
      </Button>
    </div>
  );
};

export default AuthForm;
