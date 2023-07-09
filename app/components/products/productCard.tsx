const ProductCard = ({
    title,
    description,
    duration,
    tag,
    imageUrl,
  }: ProductCardProps) => {
    return (
      <div className="rounded overflow-hidden shadow-lg flex flex-col bg-[#212121]">
        <img className="h-full max-h-[300px] object-cover" src={imageUrl} alt="Sunset in the mountains" />
  
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title} ({duration} dias)
          </div>
          <p className="text-gray-300 text-base">{description}</p>
        </div>
  
        <div className="px-6">
          <li>Acesso prioritário</li>
          <li>Kits exclusivos</li>
          <li>Moeda virtual extra</li>
          <li>Habilidades exclusivas</li>
          <li>Acesso a áreas restritas</li>
          <li>Customização avançada</li>
          <li>Suporte dedicado</li>
          <li>Eventos VIP</li>
          <li>Armazenamento adicional</li>
          <li>Tag [{tag}]</li>
        </div>
  
        <div className="px-6 py-4">
          <button className="p-2 bg-sky-600 w-full rounded-md">
            Adquirir já
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  