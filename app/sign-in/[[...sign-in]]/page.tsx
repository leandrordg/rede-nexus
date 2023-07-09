import GoBack from "@/app/components/goback";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex flex-col gap-6 items-center justify-center h-full py-6">
      <GoBack title="Voltar" type="square" />

      <SignIn />
    </section>
  );
}
