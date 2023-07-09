"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const GoBack = ({
  title,
  type = "rounded",
}: {
  title: string;
  type: "rounded" | "square";
}) => {
  const router = useRouter();

  if (type === "rounded") {
    return (
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 px-3 py-1 hover:bg-neutral-800/50 rounded-full transition"
      >
        <ArrowLeftIcon className="w-6 h-6" />
        <span>{title}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-3 py-1 hover:bg-neutral-800/50 rounded-md transition"
    >
      <ArrowLeftIcon className="w-6 h-6" />
      <span>{title}</span>
    </button>
  );
};

export default GoBack;
