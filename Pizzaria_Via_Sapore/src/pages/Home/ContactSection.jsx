import React from 'react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511270955579', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5511270955575', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/viasaporepizzaria', '_blank');
  };

  return (
    <section id="contato" className="relative bg-black">
      <div className="text-center py-[100px]">
        <h2 className="text-white text-[200px] font-satisfy font-normal leading-[289px] mb-[100px]">
          Contato
        </h2>

        {/* Contact Information */}
        <div className="bg-[#d9d9d9af] w-full h-[569px] flex items-center justify-center">
          <div className="flex flex-col space-y-[54px] px-[171px]">
            {/* WhatsApp */}
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleWhatsAppClick}
            >
              <img
                src="/images/img_whatsapp_1.png"
                alt="WhatsApp"
                className="w-[134px] h-[135px] mr-[60px]"
              />
              <span className="text-black text-[100px] font-satisfy font-normal leading-[145px]">
                (11) 2709-5579
              </span>
            </div>

            {/* Phone */}
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handlePhoneClick}
            >
              <img
                src="/images/img_telefone_1.png"
                alt="Telefone"
                className="w-[134px] h-[134px] mr-[60px]"
              />
              <span className="text-black text-[100px] font-satisfy font-normal leading-[145px]">
                (11) 2709-5575
              </span>
            </div>

            {/* Instagram */}
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleInstagramClick}
            >
              <img
                src="/images/img_instagram_1.png"
                alt="Instagram"
                className="w-[134px] h-[134px] mr-[60px]"
              />
              <span className="text-black text-[100px] font-satisfy font-normal leading-[145px] text-center">
                @VIASAPOREPIZZARIA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;