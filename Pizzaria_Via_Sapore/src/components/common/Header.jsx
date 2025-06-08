import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex items-center justify-between px-[100px] py-[45px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/img_logoviasapore_3.png"
            alt="Via Sapore Logo"
            className="w-[138px] h-[126px]"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-[53px]">
          <a
            href="#cardapio"
            className="text-white text-[24px] font-roboto font-semibold leading-[29px] hover:text-gray-300 transition-colors"
          >
            Cardápio
          </a>
          <a
            href="#ifood"
            className="text-white text-[24px] font-roboto font-semibold leading-[29px] hover:text-gray-300 transition-colors"
          >
            iFood
          </a>
          <a
            href="#contato"
            className="text-white text-[24px] font-roboto font-semibold leading-[29px] hover:text-gray-300 transition-colors"
          >
            Contato
          </a>
          <a
            href="#endereco"
            className="text-white text-[24px] font-roboto font-semibold leading-[29px] hover:text-gray-300 transition-colors"
          >
            Endereço
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;