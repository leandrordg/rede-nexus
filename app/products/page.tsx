import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ProductCard from "../components/products/productCard";
import { vipList } from "../constants/vips";
import GoBack from "../components/goback";

const Page = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto p-4">
        <GoBack title="Voltar" type="square"/>

        <p className="text-2xl font-bold mt-10">Todos os produtos</p>
        <p className="text-neutral-300 text-sm">
          Abaixo estão todos os produtos da nossa loja, então, aproveite!
        </p>

        <div className="flex items-center mt-4 w-full max-w-md rounded-md bg-[#1a1a1a] border border-neutral-800 overflow-hidden">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="py-1 px-2 flex-1 bg-transparent outline-none"
          />
          <button className="px-2">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <span className="sr-only">Buscar</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {vipList?.map((vip) => (
            <ProductCard
              id={vip.id}
              key={vip.id}
              title={vip.title}
              description={vip.description}
              duration={vip.duration}
              tag={vip.tag}
              imageUrl={vip.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
