import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import CryptocurrencySection from "../components/sections/CryptocurrencySection.jsx";
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
    </Layout>
  );
}
