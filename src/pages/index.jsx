import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import CryptocurrencySection from "../components/sections/CryptocurrencySection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BuyAndTradeSection from "../components/sections/BuyAndTradeSection.jsx";
import PartnerSection from "../components/sections/PartnerSection.jsx";
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      <Footer />
    </Layout>
  );
}
