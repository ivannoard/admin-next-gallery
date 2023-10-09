import { ChildrenComponent } from "../../utils/types";

const AuthLayout = ({ children }: ChildrenComponent) => {
  return (
    <>
      <main className="auth-layout">
        <div className="auth-background">
          <h1>Welcome Back</h1>
          <p>
            Since we cannot change reality, let us change the eyes which see
            reality.
          </p>
          <p>-Nikos Kazantzakis-</p>
        </div>
        {children}
      </main>
    </>
  );
};

export default AuthLayout;
