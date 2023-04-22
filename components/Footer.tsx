import Link from "next/link";

const Footer = () => {
  const footerLinks = (
    <Link href="" target="_blank" rel="noopener noreferrer">
      Footer
    </Link>
  );

  return (
    <>
      <footer className="py-20 flex h-fit w-full flex-row flex-wrap items-center justify-center gap-20 px-16 text-black dark:text-white">
        {footerLinks}
      </footer>
    </>
  );
};

export default Footer;
