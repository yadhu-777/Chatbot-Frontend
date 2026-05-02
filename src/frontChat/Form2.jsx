import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Mycontext from "../../Context";
import imageCompression from "browser-image-compression";
import ClearIcon from "@mui/icons-material/Clear";

export default function Form2() {
  const [Complaint, setComplainT] = useState({
    subject: "",
    description: "",
    image: null
  });

  const { setBack, setComplain, setAlert2 } = useContext(Mycontext);

  function handleConplaint(e) {
    setComplainT(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function handleImage(e) {
  try {
    const file = e.target.files[0];
    if (!file) return;

    const options = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };

    const compressedBlob = await imageCompression(file, options);

    // ✅ Convert Blob → File
    const finalFile = new File(
      [compressedBlob],
      file.name,
      { type: compressedBlob.type }
    );

    setComplainT(prev => ({
      ...prev,
      image: finalFile
    }));

  } catch (err) {
    console.error(err);
    toast("Image processing failed");
  }
}

  function handleSubmit() {
    if (!Complaint.subject || !Complaint.description) {
      toast("Subject and description are required");
      return;
    }

    if (!Complaint.image) {
      toast("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("subject", Complaint.subject);
    formData.append("description", Complaint.description);
    formData.append("image", Complaint.image);

    // DEBUG
    console.log("Sending:", Complaint);

    fetch("https://chatbot-backend-0k0q.onrender.com/complaint", {
      method: "POST",
      credentials: "include",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        toast(data.message, {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
        });

        setBack(prev => [...prev, data]);
        setComplain(false);
        setAlert2(true);

        // reset form
        setComplainT({
          subject: "",
          description: "",
          image: null
        });
      })
      .catch(err => {
        console.log(err.message);
        toast(err.message, {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
        });
      });
  }

  return (
    <div className="outerForms">
      <div className="innerForm2">

        <div id="cross" onClick={() => setComplain(prev => !prev)}>
          <ClearIcon className="clear" />
        </div>

        <form>
          <div className="form-group">
            <label>Subject</label>
            <input
              onChange={handleConplaint}
              value={Complaint.subject}  
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
            />
          </div>

          <div style={{ marginTop: "2rem" }} className="form-group">
            <label>Complaint</label>
            <textarea
              onChange={handleConplaint}
              value={Complaint.description}
              style={{ height: "10rem" }}
              placeholder="Describe your complaint"
              name="description"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <input
              type="file"
              name="image"  
              onChange={handleImage}
            />
          </div>

          <button
            style={{ marginTop: "2rem" }}
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}