import React, { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    links: { href: string; text: string }[];    
}

const shortenLabel = (text: string, maxLength = 15) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
    const lastIndex = links.length - 1;
    return (
        <nav
            aria-label="Breadcrumb"
            className="inline-flex max-w-full min-w-0 flex-nowrap items-center gap-2"
        >
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    {index !== lastIndex ? (
                        <Link
                            href={link.href}
                            className="inline-flex min-w-0 max-w-[120px] items-center truncate rounded-full bg-[#f3f9ff] px-3 py-1.5 text-14 font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:max-w-[150px] lg:max-w-[190px]"
                            title={link.text}
                        >
                            {shortenLabel(link.text)}
                        </Link>
                    ) : (
                        <span className="inline-flex min-w-0 max-w-[170px] items-center truncate rounded-full border border-primary/22 bg-white px-3 py-1.5 text-14 font-semibold text-midnight_text sm:max-w-[260px] lg:max-w-[380px]" title={link.text}>
                            {shortenLabel(link.text)}
                        </span>
                    )}
                    {index !== lastIndex && (
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M10 17L15 12L10 7"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
