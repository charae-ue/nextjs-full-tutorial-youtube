import clsx from 'clsx';

interface ButtonProps {
  text: string;
  fullWidth?: boolean;
}

export default function Button({ text, fullWidth }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 cursor-pointer bg-indigo-500 border border-indigo-500 rounded-md text-white hover:bg-transparent hover:text-indigo-500',
        fullWidth ? 'w-full' : 'w-fit'
      )}
    >
      {text}
    </button>
  );
}
