import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    cgpa: "",
    skills: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      });
  }, []);

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  const updateProfile = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(profile)
        }
      );

      const data = await response.json();

      setProfile(data);

      alert("Profile updated successfully");
    } catch (error) {
      alert("Unable to update profile");
    }
  };

  return (
    <div className="page">

      <h1>My Profile</h1>

      <form
        className="profile-form"
        onSubmit={updateProfile}
      >

        <input
          name="name"
          placeholder="Full Name"
          value={profile.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={profile.phone}
          onChange={handleChange}
        />

        <input
          name="college"
          placeholder="College"
          value={profile.college}
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          value={profile.department}
          onChange={handleChange}
        />

        <input
          name="cgpa"
          placeholder="CGPA"
          value={profile.cgpa}
          onChange={handleChange}
        />

        <input
          name="skills"
          placeholder="Skills"
          value={profile.skills}
          onChange={handleChange}
        />

        <button type="submit">
          Update Profile
        </button>

      </form>

    </div>
  );
}

export default Profile;