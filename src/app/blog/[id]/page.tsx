const BlogPost = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Blog Post Title</h1>
      <h2>ID: {params.id}</h2>
    </div>
  );
};

export default BlogPost;
