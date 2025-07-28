// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import { LogOut, PencilLine, Save, Upload } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('profileData');
    if (stored) {
      const parsed = JSON.parse(stored);
      setProfile(parsed);
      setImagePreview(parsed.image || null);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(profile));
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  const handleLogout = () => {
    localStorage.removeItem('profileData');
    setProfile({
      name: '',
      email: '',
      image: '',
    });
    setImagePreview(null);
    setIsEditing(true);
  };

  return (
    <section className="max-w-2xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-2xl shadow-2xl mt-12 mb-[50px]">
      <h1 className="text-3xl font-bold mb-6 tracking-wide text-center">
        {isEditing ? "Profil yaratish yoki tahrirlash" : "Mening Profilim"}
      </h1>

      {imagePreview && !isEditing && (
        <div className="flex justify-center mb-6">
          <img
            src={imagePreview}
            alt="Profil rasmi"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block mb-1 font-medium">Ismingiz</label>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={profile.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email manzilingiz</label>
            <input
              type="email"
              name="email"
              placeholder="Email manzilingiz"
              value={profile.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Rasm yuklang</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
            />
          </div>
          {imagePreview && (
            <div className="flex justify-center">
              <img
                src={imagePreview}
                alt="Yuklangan rasm"
                className="w-24 h-24 object-cover rounded-full border border-gray-400 mt-2"
              />
            </div>
          )}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 mt-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            <Save size={18} /> Saqlash
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-lg"><strong>Ism:</strong> {profile.name}</p>
          <p className="text-lg"><strong>Email:</strong> {profile.email}</p>
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-xl font-medium shadow-md"
            >
              <PencilLine size={18} /> Tahrirlash
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-xl font-medium shadow-md"
            >
              <LogOut size={18} /> Chiqish
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
