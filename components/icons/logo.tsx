import Link from "next/link";

export function Logo({ path = "/" }: { path?: string }) {
  return (
    <Link
      href={path}
      className="flex items-center gap-2 font-bebas font-medium text-white tracking-wider text-lg"
    >
      <img src="/images/logo.svg" alt="ActiveHive logo" width={40} height={40} />
      <p>ACTIVEHIVE</p>
    </Link>
  );
}
