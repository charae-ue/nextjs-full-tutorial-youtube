import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Metadata } from 'next';

import { items } from './data';
import Button from '@/components/Button';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

interface CategoryProps {
  params: {
    category: string;
  };
}

enum CategoryType {
  Illustrations = 'illustrations',
  Website = 'websites',
  Application = 'applications',
}

export async function generateMetadata({
  params,
}: CategoryProps): Promise<Metadata> {
  const { category } = params;

  return {
    title: `Portfolio - ${capitalizeFirstLetter(category)}`,
  };
}

function getData(cat: CategoryType) {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
}

const Category = ({ params }: CategoryProps) => {
  const data = getData(params.category as CategoryType);

  return (
    <div>
      <h1 className="text-4xl font-bold capitalize">
        Category: <span className="text-indigo-500">{params.category}</span>
      </h1>

      {data.map((item, index) => (
        <div
          key={item.id}
          className={clsx(
            'flex gap-12 mt-12 mb-24',
            index % 2 && 'flex-row-reverse'
          )}
        >
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h2 className="text-5xl font-bold">{item.title}</h2>
            <p className="text-xl">{item.desc}</p>
            <Link href="#">
              <Button text="See More"></Button>
            </Link>
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              className="object-cover"
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
