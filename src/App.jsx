import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/section/Hero';
import ProfileCard from './components/product/ProfileCard';
import './App.css';

function App() {
  // Datos de la tarjeta de perfil
  const profileData = {
    name: "Sophie Bennett",
    description: "A Product Designer focused on intuitive user experiences.",
    imageUrl: "/profile.jpg",
    followers: 99999,
    likes: 12345,
    isVerified: true
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProfileCard 
        name={profileData.name}
        description={profileData.description}
        imageUrl={profileData.imageUrl}
        followers={profileData.followers}
        likes={profileData.likes}
        isVerified={profileData.isVerified}
      />
    </div>
  );
}

export default App;