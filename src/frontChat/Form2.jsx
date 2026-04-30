import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Mycontext from "../../Context";
import imageCompression from "browser-image-compression";
import ClearIcon from "@mui/icons-material/Clear";

export default function Form2() {
  const [complaint, setComplaint] = useState({
    subject: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setBack, setComplain, setAlert2 } = useContext(Mycontext);

  function handleChange(e) {
    setComplaint((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 4,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      setComplaint((prev) => ({ ...prev, image: compressedFile }));
      setPreview(URL.createObjectURL(compressedFile));
    } catch (err) {
      toast("Image compression failed", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  async function handleSubmit() {
    if (!complaint.subject || !complaint.description || !complaint.image) {
      toast("Please fill all fields and attach an image", {
        position: "top-center",
        autoClose: 1500,
        theme: "dark",
      });
      return;
    }

    const formData = new FormData();
    formData.append("subject", complaint.subject);
    formData.append("description", complaint.description);
    formData.append("image", complaint.image);

    setLoading(true);

    try {
      const response = await fetch("https://chatbot-backend-0k0q.onrender.com/complaint", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.message || "Submission failed");
      }

      setBack((prev) => [...prev, res]);
      toast(res.message, {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      setComplain(false);
      setAlert2(true);
    } catch (err) {
      toast(err.message || "Something went wrong", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="outerForms">
      <div className="innerForm2">
        <div id="cross" onClick={() => setComplain((prev) => !prev)}>
          <ClearIcon className="clear" />
        </div>

        <div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              onChange={handleChange}
              value={complaint.subject}  
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              id="subject"
            />
          </div>

          <div style={{ marginTop: "2rem" }} className="form-group">
            <label htmlFor="description">Complaint</label>
            <textarea
              onChange={handleChange}
              value={complaint.description}
              style={{ height: "10rem" }}
              placeholder="Describe your complaint"
              name="description"
              className="form-control"
              id="description"
            />
          </div>

          <div className="mb-3" style={{ marginTop: "1rem" }}>
            <input type="file" accept="image/*" onChange={handleImage} />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{
                  marginTop: "10px",
                  maxWidth: "100%",
                  maxHeight: "200px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            )}
          </div>

          <button
            style={{ marginTop: "2rem" }}
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}