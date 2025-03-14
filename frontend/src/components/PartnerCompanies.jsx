import yamahaLogo from "../assets/yamahaLogo.png";
import reLogo from '../assets/reLogo.png';
import ktmLogo from '../assets/ktmLogo.png';

const PartnerCompanies = () => {
    const partners = [
      { name: "Yamaha", logo: yamahaLogo },
      { name: "Royal Enfield", logo: reLogo },
      { name: "KTM", logo: ktmLogo }
    ];
  
    return (
      <section className="py-16 text-center bg-gray-200">
        <h2 className="text-3xl font-bold">Our Partner Companies</h2>
        <div className="mt-8 flex justify-center gap-8">
          {partners.map((partner, index) => (
            <img key={index} src={partner.logo} alt={partner.name} className="w-24 h-18" />
          ))}
        </div>
      </section>
    );
  };
  
  export default PartnerCompanies;
  