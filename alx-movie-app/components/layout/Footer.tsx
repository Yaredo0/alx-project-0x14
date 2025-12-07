const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} MovieApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;