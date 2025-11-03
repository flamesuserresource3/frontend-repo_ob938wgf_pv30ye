import { Crown, PenTool, User, Megaphone } from "lucide-react";

const roles = [
  {
    title: "Admin",
    icon: Crown,
    color: "from-amber-500 to-rose-500",
    points: [
      "Full control over users, posts, ads, and backups",
      "Approve advertisers and review content",
      "Customize themes and global settings",
    ],
  },
  {
    title: "Author",
    icon: PenTool,
    color: "from-indigo-500 to-fuchsia-500",
    points: [
      "Create, edit, and publish posts with images and tags",
      "Manage categories and see likes/comments",
      "Build your profile and audience",
    ],
  },
  {
    title: "Reader",
    icon: User,
    color: "from-emerald-500 to-teal-500",
    points: [
      "Read public and permitted posts",
      "Like, comment, and share",
      "Follow favorite authors (optional)",
    ],
  },
  {
    title: "Advertiser",
    icon: Megaphone,
    color: "from-violet-500 to-purple-500",
    points: [
      "Upload and manage ad campaigns",
      "Track views and clicks",
      "Submit for admin approval",
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for every role</h2>
          <p className="mt-3 text-slate-600">Clear permissions for admins, authors, readers, and advertisers keep your community healthy and thriving.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br ${r.color} text-white`}> 
                <r.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{r.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {r.points.map((p, idx) => (
                  <li key={idx} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
