import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const formData = await request.formData();
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (!["login", "signup"].includes(mode)) {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  console.log("response", response);

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate" }, { status: 500 });
  }

  const resData = await response.json();
  console.log("resData ", resData);

  const token = resData.token;

  localStorage.setItem("token", token);

  return redirect("/");
}
