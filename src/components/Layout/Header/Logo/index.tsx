import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      {/* <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#a21caf]/35 bg-[linear-gradient(140deg,#ff6a1a_0%,#ef4444_35%,#a21caf_68%,#2563eb_100%)] text-white font-extrabold shadow-[0_10px_24px_rgba(126,34,206,0.35)]">
        <span className="pointer-events-none absolute inset-[2px] rounded-[10px] border border-white/30"></span>
        <span className="relative">C</span>
      </span> */}
      <span className="text-[25px] font-extrabold tracking-tight leading-none">
        <span className="bg-gradient-to-r from-[#ff6a1a] via-[#ef4444] to-[#a21caf] bg-clip-text text-transparent">
          Cubic
        </span>
        <span className="bg-gradient-to-r from-[#8b00c7] via-[#6d28d9] to-[#2563eb] bg-clip-text text-transparent">
          so
        </span>
      </span>
    </Link>
  );
};

export default Logo;
