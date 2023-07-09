import Link from "next/link";
import GoBack from "../components/goback";

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 gap-6">
      <GoBack title="Voltar" type="square" />

      <p className="text-2xl font-bold my-10">
        Informações sobre nosso Discord:
      </p>

      <div className="flex flex-col sm:flex-row gap-10">
        <iframe
          src="https://discord.com/widget?id=1122187356062089267&theme=dark"
          lang="pt-BR"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="w-full max-w-sm h-[500px]"
        />

        <div className="flex flex-col">
          <span className="text-xl">Como entrar no nosso Discord?</span>

          <p className="text-sm text-neutral-300 max-w-md">
            Existem várias maneiras de entrar no nosso discord, você pode entrar
            através do link abaixo:
          </p>

          <Link
            href="https://bit.ly/redenexus"
            className="text-sm text-sky-500 underline hover:text-sky-400 transition my-4"
          >
            bit.ly/redenexus
          </Link>

          <p className="text-sm text-neutral-300">
            Ou se prefirir, por QR Code!
          </p>

          <img src="/QRCODE.png" className="w-full max-w-sm mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Page;
