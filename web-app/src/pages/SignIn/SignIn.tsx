import { gql, useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { SignInMutation, SignInMutationVariables } from "../../gql/graphql";
import { getErrorMessage } from "../../utils";
import { DASHBOARD_HOME } from "../paths";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/UserContext";

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!, $rememberMe: Boolean!) {
    signIn(email: $email, password: $password, rememberMe: $rememberMe) {
      id
      email
    }
  }
`;

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const userContext = useContext(UserContext);

  const [signIn, { loading }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN);
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await signIn({
        variables: { email, password, rememberMe: Boolean(rememberMe) },
      });
      toast.success(`Vous vous êtes connecté avec succès.`);
      userContext?.refetch();
      navigate(DASHBOARD_HOME);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <div className="signin-form-container">
        <h1>Connexion</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await submit();
          }}
        >
          <div className="signin-form-input">
            <label>Adresse email</label>
            <input
              type="email"
              required
              autoComplete="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
          </div>
          <div className="signin-form-input">
            <label>Mot de passe</label>
            <input
              type="password"
              required
              autoComplete="current-password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="signin-form-input2">
            <div className="remember-me-container">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={rememberMe}
                onChange={(event) => {
                  setRememberMe(event.target.checked);
                }}
              />
              <label>Se souvenir de moi</label>
            </div>
            <a href="#">Mot de passe oublié ?</a>
          </div>
          <button disabled={loading}>{loading ? <Loader /> : "Valider"}</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
