import {
  ArrowDownCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import HomeCard from "./components/home/homecard";
import { vipList } from "./constants/vips";

const Page = () => {
  return (
    <>
      <Image
        src="/background.png"
        alt="Background"
        width={1920}
        height={1080}
        className="-z-10 object-cover fixed left-0 top-0 w-full h-full"
      />

      <section className="p-4 relative min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center gap-4">
          <h1 className="uppercase text-4xl font-bold">Rede Nexus</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            repellendus tempora tenetur praesentium quasi illo mollitia saepe.
            Odio asperiores ea ut, illo quasi laborum perferendis tempore
            consectetur sunt dolorem minima quo cum doloremque nemo mollitia,
            ullam inventore voluptate ducimus dolores.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="px-6 py-2 rounded-md bg-sky-400 transition hover:bg-sky-500 text-sm"
            >
              Acessar loja
            </Link>
            <Link
              href="#"
              className="px-6 py-2 rounded-md flex items-center gap-2"
            >
              <span className="text-sm">Saiba mais</span>
              <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[10%] left-0 right-0 flex justify-center">
          <ArrowDownCircleIcon className="w-8 h-8" />
        </div>
      </section>

      <section className="bg-[#141414]/95 py-14">
        <div className="p-4 min-h-screen flex flex-col items-center gap-14">
          <div className="flex flex-col gap-1">
            <h1 className="text-center text-2xl font-bold uppercase">
              Sobre nossos vips
            </h1>
            <p className="text-neutral-300">
              Abaixo estão algumas informações sobre os nossos vips
            </p>
          </div>
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {vipList?.splice(0, 3).map((vip) => {
              return (
                <HomeCard
                  id={vip.id}
                  key={vip.id}
                  title={vip.title}
                  description={vip.description}
                  duration={vip.duration}
                  tag={vip.tag}
                  imageUrl={vip.imageUrl}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sky-600">
        <div className="p-4 py-14 max-w-7xl mx-auto">
          <span className="text-2xl font-bold">
            Não deixe essa oportunidade escapar!
          </span>

          <p className="mb-4">
            Torne-se um VIP no servidor de Minecraft agora e aproveite acesso
            prioritário, kits exclusivos, moeda extra, habilidades especiais,
            áreas restritas, customização avançada e suporte dedicado. Não deixe
            essa oportunidade escapar!
          </p>

          <Link
            href="/products"
            className="bg-white text-neutral-500 px-4 py-2 rounded-md shadow text-sm"
          >
            Ver os produtos
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
