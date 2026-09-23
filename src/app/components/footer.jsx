import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-base-200 bg-base-200/60">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-12">
                <div className="max-w-sm">
                    <Link href="/" className="inline-block text-3xl font-black tracking-tight">
                        <span className="text-success">Book</span>let
                    </Link>
                    <p className="mt-4 leading-7 text-base-content/60">
                        A quiet place to discover thoughtful stories, keep track of your reads,
                        and find your next favorite book.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-base-content/50">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Made for curious readers
                    </div>
                </div>

                <nav aria-label="Footer navigation">
                    <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-base-content/50">
                        Explore
                    </h2>
                    <div className="mt-5 flex flex-col items-start gap-3">
                        <Link href="/" className="link link-hover text-base-content/75">Home</Link>
                        <Link href="../components/listedPage" className="link link-hover text-base-content/75">Listed Books</Link>
                        <Link href="../components/readBooks" className="link link-hover text-base-content/75">Pages to Read</Link>
                    </div>
                </nav>

                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-base-content/50">
                        Keep reading
                    </h2>
                    <p className="mt-5 leading-6 text-base-content/60">
                        Get occasional recommendations and reading inspiration in your inbox.
                    </p>
                    <form className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <label className="sr-only" htmlFor="footer-email">Email address</label>
                        <input
                            id="footer-email"
                            type="email"
                            placeholder="Your email address"
                            className="input input-bordered min-w-0 flex-1 rounded-xl bg-base-100"
                        />
                        <button type="submit" className="btn btn-success rounded-xl px-5">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-base-300/70">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-base-content/50 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
                    <p>© {new Date().getFullYear()} Booklet. Made for readers.</p>
                    <div className="flex gap-5">
                        <Link href="/" className="link link-hover">Privacy</Link>
                        <Link href="/" className="link link-hover">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;