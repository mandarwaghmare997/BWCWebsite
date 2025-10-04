import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-2">BELLWETHER</h2>
          <p className="text-xl text-green">Valuing Tomorrow</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <Link to="/aboutus" className="block hover:text-green transition-colors">
                About Us
              </Link>
              <a href="#contact" className="block hover:text-orange transition-colors">
                Contact
              </a>
              <a href="#" className="block hover:text-green transition-colors">
                Fee Illustration
              </a>
              <a 
                href="https://app.bellwethercapital.in/wealthspectrum/app/loginWith"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-green transition-colors"
              >
                Client Login
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-orange transition-colors">
                Regulatory Info
              </a>
              <a href="#" className="block hover:text-green transition-colors">
                Investor Complaints
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="text-sm text-white/60">© Copyright 2024 Bellwether</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
