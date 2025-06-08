import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Background Pizza Image */}
      <div className="absolute inset-0">
        <img
          src="/images/img_pizza2_1.png"
          alt="Pizza Background"
          className="w-full h-[990px] object-cover"
          style={{ top: '355px' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-[140px] pt-[240px]">
        <h1 className="text-white text-[250px] font-satisfy font-normal leading-[361px] mb-[36px]">
          Via Sapore
        </h1>
        
        <h2 className="text-white text-[90px] font-satisfy font-normal leading-[130px] mb-[24px]">
          Preços Especiais de terça a quinta!
        </h2>
        
        <p className="text-white text-[60px] font-satisfy font-normal leading-[86px] max-w-[888px]">
          Calabresa, Muçarela, Da Nona, Napolitana e Dois Queijos
        </p>
      </div>

      {/* Side Pizza Image */}
      <div className="absolute right-0 top-[456px]">
        <img
          src="/images/img_pizza4_1.png"
          alt="Pizza Side"
          className="w-[591px] h-[1139px] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;