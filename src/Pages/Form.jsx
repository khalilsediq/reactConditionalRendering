import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ Title: "", Desc: "", Phone: "" });
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onAdd = () => {
    if (!formData.Title && !formData.Desc && !formData.Phone) return;
    setSubmissions((prev) => [...prev, formData]);
    setFormData({ Title: "", Desc: "", Phone: "" });
  };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          width: "350px",

          margin: "20px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            gap: "0.75rem",
            maxWidth: "320px",
          }}
        >
          <input
            type="text"
            name="Title"
            placeholder="Enter your title"
            value={formData.Title ?? ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Desc"
            placeholder="Enter your description"
            value={formData.Desc ?? ""}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="Phone"
            placeholder="Enter your phone"
            value={formData.Phone ?? ""}
            onChange={handleChange}
          />
          <button type="button" onClick={onAdd}>
            Add
          </button>
        </div>
      </div>

      {submissions.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: '20px',
            justifyContent: "space-evenly"
          }}
        >
          {submissions.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "0.75rem",
                marginTop: "0.75rem",
              }}
            >
              <h2>Title: {item.Title}</h2>
              <p>Description: {item.Desc}</p>
              <p>Phone: {item.Phone}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
