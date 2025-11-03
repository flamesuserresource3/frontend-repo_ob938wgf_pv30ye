import { Calendar, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Designing with Depth: Bringing 3D to the Web",
    excerpt:
      "How interactive scenes elevate storytelling and keep readers engaged without sacrificing performance.",
    author: "Ava Thompson",
    date: "Oct 2, 2025",
    tag: "Design",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Writer's Toolkit: Habits that Compound",
    excerpt:
      "From idea capture to ruthless editing — a simple workflow that makes publishing consistent and fun.",
    author: "Noah Carter",
    date: "Sep 28, 2025",
    tag: "Writing",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Monetizing a Niche Blog in 2025",
    excerpt:
      "Tactics that still work: memberships, sponsor spots, and premium guides without selling your soul.",
    author: "Maya Lee",
    date: "Sep 15, 2025",
    tag: "Business",
    cover:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  },
];

function PostCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-[#0f0f0f] border border-white/10">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-[#c4ff00] px-2.5 py-1 text-xs font-bold text-black">
          {post.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-white group-hover:text-[#c4ff00] transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time>{post.date}</time>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedPosts() {
  return (
    <section id="featured" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Featured stories</h2>
            <p className="mt-2 text-gray-400">Curated reads to get you inspired this week.</p>
          </div>
          <a href="#latest" className="hidden sm:inline-block text-[#c4ff00] font-bold hover:opacity-80">
            View all →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
