import ClearIcon from "@mui/icons-material/Clear";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Mycontext from "../../Context";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { form, setForm } = useContext(Mycontext);

  async function handleSubmit() {
    try {
      const res = await fetch(
        "https://chatbot-backend-0k0q.onrender.com/data",
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password:password,
          }),
        },
      );

      const data = await res.json();

      toast(data.message, {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });

      if (res.ok) {
        navigate("/clg");
      }
    } catch (err) {
      toast("Login failed", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  return (
    <div className="outerform">
      <div className="innerForm">
        <div className="cross" onClick={() => setForm((prev) => !prev)}>
          <ClearIcon className="clear" />
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="emailInput"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="passwordInput"
              placeholder="Password"
            />
          </div>

          <button
            style={{ marginTop: "2rem" }}
            type="button"
            className="btn btn-secondary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
