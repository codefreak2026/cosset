import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "Architectural Debate at the Design Forum",
    excerpt: "Exploring the intersection of tradition and modernity in contemporary architecture.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    tags: ["Architecture", "Interior"],
    date: "3 years ago",
  },
  {
    id: "2",
    title: "Climate Change, Heritage & Sustainable Habitat",
    excerpt: "International perspectives on sustainable design and cultural heritage.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
    tags: ["Sustainability", "Heritage"],
    date: "2 years ago",
  },
  {
    id: "3",
    title: "Exploring Architectural Marvels",
    excerpt: "Unveiling the stories behind iconic buildings and their design philosophy.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=600",
    tags: ["Architecture", "Design"],
    date: "2 years ago",
  },
  {
    id: "4",
    title: "Urban Renewal: Old and New City",
    excerpt: "How cities balance preservation and progress in urban planning.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
    tags: ["Urban", "Planning"],
    date: "2 years ago",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Blog</p>
        <h2 className="section-title mb-4">Latest from Our Blog</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          Insights on architecture, interior design, and sustainable building.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm card-hover"
            >
              <Link href={`#blog`} className="block">
                <div className="relative aspect-[3/2] bg-stone-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-amber-600 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mb-2">{post.date}</p>
                  <h3 className="font-semibold text-stone-800 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-stone-600 mt-1 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="#blog"
            className="inline-flex items-center px-5 py-2.5 border-2 border-stone-800 text-stone-800 font-medium rounded-md hover:bg-stone-800 hover:text-white transition-colors"
          >
            Load more
          </Link>
        </div>
      </div>
    </section>
  );
}
