import Link from "next/link";

export default function index() {
  return (
    <div className="min-h-screen">
      <button>
        <Link href="/">back</Link>
      </button>
    </div>
  );
}
