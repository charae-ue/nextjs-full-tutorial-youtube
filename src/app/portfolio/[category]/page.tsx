const Category = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h1>Category: {params.category}</h1>
    </div>
  );
};

export default Category;
