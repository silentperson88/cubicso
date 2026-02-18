import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="group inline-flex items-center gap-2">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky_blue text-white font-bold shadow-md shadow-primary/30">
        C
      </span>
      <span className="text-[25px] font-extrabold tracking-tight leading-none">
        <span className="text-midnight_text transition-colors group-hover:text-primary">
          Cubic
        </span>
        <span className="bg-gradient-to-r from-sky_blue to-primary bg-clip-text text-transparent">
          so
        </span>
      </span>
    </Link>
  );
};

export default Logo;
