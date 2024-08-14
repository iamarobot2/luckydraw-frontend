import { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    semester: '',
    branch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.phone && formData.semester && formData.branch) {
      const response = await fetch('http://localhost:4500/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const registeredStudent = await response.json();
      onSubmit(registeredStudent);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Semester:</label>
        <input
          type="text"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Branch:</label>
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default StudentForm;
