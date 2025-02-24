export default async function Table() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <table className="min-w-full border-collapse border border-gray-300 text-black items-center">
      <thead>
        <tr className="bg-gray-200 text-gray-700 uppercase">
          <th className="border px-4 py-2">S/N</th>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Content</th>
          <th className="border px-4 py-2">Author</th>
          <th className="border px-4 py-2">Data</th>
          <th className="border px-4 py-2">Category</th>
        </tr>
      </thead>
      {posts.map((post, index) => (
        <tbody key={post.id}>
          <tr
            key={post.id}
            className={index % 2 === 0 ? "bg-gray-300" : "bg-white"}
          >
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{post.title}</td>
            <td className="border px-4 py-2 truncate max-w-xs">
              {post.content}
            </td>
            <td className="border px-4 py-2">{post.author}</td>
            <td className="border px-4 py-2">{post.date}</td>
            <td className="border px-4 py-2">{post.category}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
