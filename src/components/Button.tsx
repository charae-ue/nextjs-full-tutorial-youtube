interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="px-4 py-2 cursor-pointer bg-indigo-500 border border-indigo-500 rounded-md w-fit text-white hover:bg-transparent hover:text-indigo-500">
      {text}
    </button>
  );
}
