import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("token");
  console.log("logout!");
  return redirect("/");
}
