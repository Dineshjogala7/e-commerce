const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-6 bg-gray-200 text-black">
      <div className="flex justify-between flex-wrap gap-8 mb-6">
        <div className="flex flex-col gap-4">
          <p className="underline text-lg">About Us</p>
          <ul className="flex flex-col gap-2">
            <li>Getting Started</li>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="underline text-lg">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Support Channels</li>
            <li>Systems</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="underline text-lg">Legal</p>
          <ul className="flex flex-col gap-2">
            <li>Terms of Service</li>
            <li>Privacy and Policy</li>
            <li>DCMA - Content Breakdown</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="underline text-lg">Follow Us</p>
          <div className="flex gap-4">
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Amazon</p>
          </div>
        </div>
      </div>

      <div className="w-full text-center border-t border-black pt-4">
        <p>&copy; 2025</p>
        <p>All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;
