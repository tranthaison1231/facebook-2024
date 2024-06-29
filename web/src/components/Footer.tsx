function Footer() {
  return (
    <footer className="bg-white w-full  md:flex md:items-center md:justify-between">
      <ul className="flex flex-wrap items-center p-4 text-sm font-medium text-[#232D42]">
        <li>
          <a className="hover:underline me-4 md:me-6" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="hover:underline me-4 md:me-6" href="#">
            Terms of Use
          </a>
        </li>
      </ul>
      <p>© 2021 Hope UI, Made with ❤ by IQONIC Design.</p>
    </footer>
  );
}

export default Footer;
