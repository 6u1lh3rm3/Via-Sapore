import React from 'react';

const AddressSection = () => {
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Av.+Osmundo+dos+Santos+Pellegrini,+703', '_blank');
  };

  return (
    <section id="endereco" className="relative bg-black">
      <div className="text-center py-[100px]">
        <h2 className="text-white text-[200px] font-satisfy font-normal leading-[289px] mb-[100px]">
          Endereço
        </h2>

        {/* Address Information */}
        <div className="bg-[#d9d9d9af] w-full h-[351px] flex items-center px-[139px]">
          <img
            src="/images/img_flechagps_1.png"
            alt="GPS Icon"
            className="w-[150px] h-[150px] mr-[60px]"
          />
          <p className="text-black text-[80px] font-satisfy font-normal leading-[115px] text-left max-w-[1131px]">
            Av. Osmundo dos Santos Pellegrini, 703 - próximo ao cemitério dos IpÊs
          </p>
        </div>

        {/* Map Section */}
        <div className="relative mt-0">
          <div 
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onClick={handleMapClick}
          >
            <img
              src="/images/img_basemap_image.png"
              alt="Mapa da localização"
              className="w-full h-[1224px] object-cover"
            />
            {/* Map Pin */}
            <div className="absolute top-[443px] left-[656px]">
              <img
                src="/images/img_pinomapa_1.png"
                alt="Pin do mapa"
                className="w-[105px] h-[169px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;