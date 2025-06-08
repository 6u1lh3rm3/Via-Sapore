import React from 'react';

const MenuSection = () => {
  const traditionalPizzas = [
    { name: "Alho e Óleo", price: "R$ 67,90" },
    { name: "Aliche", price: "R$ 87,90" },
    { name: "Americana", price: "R$ 78,90" },
    { name: "Atum", price: "R$ 88,90" },
    { name: "Baiana", price: "R$ 73,90" },
    { name: "Brócolis", price: "R$ 76,90" },
    { name: "Calabresa", price: "R$ 62,90" },
    { name: "Catupiry", price: "R$ 80,90" },
    { name: "Champignon", price: "R$ 72,90" },
    { name: "Cinco Queijos", price: "R$ 83,90" },
    { name: "Creme de Milho", price: "R$ 80,90" },
    { name: "Corn & Bacon", price: "R$ 72,90" },
    { name: "Da Nona", price: "R$ 60,90" },
    { name: "Dois Queijos", price: "R$ 70,90" },
    { name: "Escarola", price: "R$ 72,90" },
    { name: "Escarola com Aliche", price: "R$ 82,90" },
    { name: "Portuguesa", price: "R$ 73,90" },
    { name: "Quatro Queijos", price: "R$ 79,90" },
    { name: "Sapore", price: "R$ 83,90" },
    { name: "Siciliana", price: "R$ 73,90" },
    { name: "Strogonoff", price: "R$ 83,90" },
    { name: "Toscana", price: "R$ 73,90" },
    { name: "Vegetariana", price: "R$ 78,90" }
  ];

  const rightColumnPizzas = [
    { name: "Francesa", price: "R$ 77,90" },
    { name: "Frango Caipira", price: "R$ 80,90" },
    { name: "Frango com Catupiry", price: "R$ 73,90" },
    { name: "Jardineira", price: "R$ 80,90" },
    { name: "Lombo Canadense", price: "R$ 73,90" },
    { name: "Marguerita", price: "R$ 70,90" },
    { name: "Milho", price: "R$ 66,90" },
    { name: "Moda da Casa", price: "R$ 83,90" },
    { name: "Muçarela", price: "R$ 60,90" },
    { name: "Napolitana", price: "R$ 67,90" },
    { name: "Palmito", price: "R$ 78,90" },
    { name: "Palmito Especial", price: "R$ 89,90" },
    { name: "Peito de Peru", price: "R$ 78,90" },
    { name: "Peito de Peru c/ Palmito", price: "R$ 88,90" },
    { name: "Pepperoni", price: "R$ 79,90" },
    { name: "Peruana", price: "R$ 88,90" }
  ];

  const lightPizzas = [
    { name: "Abobrinha", price: "R$ 79,90" },
    { name: "Berinjela", price: "R$ 79,90" },
    { name: "Luce", price: "R$ 82,90" },
    { name: "Peito de Peru Light", price: "R$ 83,90" },
    { name: "Rúcula", price: "R$ 73,90" },
    { name: "Salute", price: "R$ 92,90" }
  ];

  const sweetPizzas = [
    { name: "Banana c/ Chocolate", price: "R$ 63,90" },
    { name: "Brigadeiro", price: "R$ 63,90" },
    { name: "Kids", price: "R$ 63,90" },
    { name: "Romeu e Julieta", price: "R$ 63,90" }
  ];

  const beverages = [
    { name: "Refrigerante 1,5 e 2L", price: "Consultar" },
    { name: "Cervejas Long Neck e Lata", price: "Consultar" },
    { name: "Sucos", price: "Consultar" }
  ];

  return (
    <section id="cardapio" className="relative bg-black">
      {/* Background Pizza Image */}
      <div className="absolute inset-0">
        <img
          src="/images/img_pizza5_1.png"
          alt="Menu Background"
          className="w-full h-[3034px] object-cover"
          style={{ top: '2111px' }}
        />
      </div>

      <div className="relative z-10 px-[100px] py-[100px]">
        {/* Menu Title */}
        <div className="text-center mb-[200px]">
          <h2 className="text-white text-[200px] font-satisfy font-normal leading-[289px]">
            Cardápio
          </h2>
        </div>

        {/* Traditional Pizzas Section */}
        <div className="mb-[100px]">
          {/* Section Title */}
          <div className="flex items-center mb-[35px]">
            <div className="w-[1435px] h-[15px] bg-[#d9d9d9]"></div>
          </div>
          <h3 className="text-white text-[45px] font-satisfy font-normal leading-[64px] text-center mb-[35px]">
            Tradicionais
          </h3>

          {/* Pizza Grid */}
          <div className="grid grid-cols-2 gap-x-[200px]">
            {/* Left Column */}
            <div className="space-y-[10px]">
              {traditionalPizzas.slice(0, 16).map((pizza, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.name} {'............................'.slice(0, Math.max(0, 30 - pizza.name.length))}
                  </span>
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-[10px]">
              {rightColumnPizzas.map((pizza, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.name} {'............................'.slice(0, Math.max(0, 30 - pizza.name.length))}
                  </span>
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Traditional Pizzas */}
          <div className="mt-[10px] space-y-[10px]">
            {traditionalPizzas.slice(16).map((pizza, index) => (
              <div key={index} className="flex justify-between items-center max-w-[700px]">
                <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                  {pizza.name} {'............................'.slice(0, Math.max(0, 30 - pizza.name.length))}
                </span>
                <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                  {pizza.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Light and Sweet Pizzas Section */}
        <div className="grid grid-cols-2 gap-x-[200px] mb-[100px]">
          {/* Light Pizzas */}
          <div>
            <div className="flex items-center mb-[35px]">
              <div className="w-[535px] h-[15px] bg-[#d9d9d9]"></div>
            </div>
            <h3 className="text-white text-[45px] font-satisfy font-normal leading-[64px] text-center mb-[35px]">
              Light
            </h3>
            <div className="space-y-[10px]">
              {lightPizzas.map((pizza, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.name} {'............................'.slice(0, Math.max(0, 25 - pizza.name.length))}
                  </span>
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sweet Pizzas and Beverages */}
          <div>
            <div className="flex items-center mb-[35px]">
              <div className="w-[355px] h-[15px] bg-[#d9d9d9]"></div>
            </div>
            <h3 className="text-white text-[45px] font-satisfy font-normal leading-[64px] text-center mb-[35px]">
              Doces
            </h3>
            <div className="space-y-[10px] mb-[100px]">
              {sweetPizzas.map((pizza, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.name} {'............................'.slice(0, Math.max(0, 25 - pizza.name.length))}
                  </span>
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {pizza.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Beverages */}
            <div className="flex items-center mb-[35px]">
              <div className="w-[355px] h-[15px] bg-[#d9d9d9]"></div>
            </div>
            <h3 className="text-white text-[45px] font-satisfy font-normal leading-[64px] text-center mb-[35px]">
              Bebidas
            </h3>
            <div className="space-y-[10px]">
              {beverages.map((beverage, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {beverage.name} {'............................'.slice(0, Math.max(0, 25 - beverage.name.length))}
                  </span>
                  <span className="text-white text-[45px] font-satisfy font-normal leading-[65px]">
                    {beverage.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;