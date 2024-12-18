import Image from "next/image";
import { ReactNode } from "react";
// import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/images/site-logo.svg"
            alt="ConnectaTool Logo"
            width={80}
            height={50}
            className="invert-colors object-contain"
          />

          <h1 className="h2-bold text-dark100_light900">
            Conecta<span className="text-primary-500">Tool</span>
          </h1>
          <p className="paragraph-regular text-dark500_light400"></p>
        </div>
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
