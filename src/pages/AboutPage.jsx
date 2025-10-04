import { motion } from 'framer-motion';
import aboutHeroIllustration from '../assets/about-hero-illustration.webp';
import mitenMehta from '../assets/miten-mehta.webp';
import ranjitDongre from '../assets/ranjit-dongre-about.webp';
import vSrinath from '../assets/v-srinath.webp';
import navinJR from '../assets/navin-jr.webp';
import pSrinath from '../assets/p-srinath-about.webp';
import rohitPai from '../assets/rohit-pai.webp';

const AboutPage = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-navy section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-xl mb-6 text-white">
                At Bellwether, we manage money to help transform lives
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img src={aboutHeroIllustration} alt="Bellwether Capital" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="heading-md mb-8 text-navy">
              We are a boutique investment house committed to crafting our clients' financial freedom
            </h2>
            <p className="text-xl mb-6 text-navy/80">
              The arithmetic of our portfolio management strives to meet the emotional quotient of our clients and emphasises on delayed gratification to lead to asymmetric outcomes.
            </p>
            <p className="text-xl mb-8 text-navy/80">
              With two decades in the financial markets, we are ideally positioned to leverage our experience to empower our clients to build a legacy that goes beyond wealth.
            </p>
            <button onClick={scrollToContact} className="btn-primary">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-16 text-navy"
          >
            Bellwether's Founding Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift">
                <img src={mitenMehta} alt="Miten Mehta" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-navy mb-2">Miten Mehta</h3>
                  <p className="text-navy/60">Fund Manager</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift">
                <img src={ranjitDongre} alt="Ranjit Dongre" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-navy mb-2">Ranjit Dongre</h3>
                  <p className="text-navy/60">Client Relationships</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Leading Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-16 text-navy"
          >
            Team Leading Bellwether
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift">
                <img src={vSrinath} alt="V. Srinath" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">V. Srinath</h3>
                  <p className="text-navy/60">Head of Research</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift">
                <img src={navinJR} alt="Navin JR" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">Navin JR</h3>
                  <p className="text-navy/60">Sr. Research Analyst</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift">
                <img src={pSrinath} alt="P. Srinath" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">P. Srinath</h3>
                  <p className="text-navy/60">Head of Operations</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift">
                <img src={rohitPai} alt="Rohit Pai" className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">Rohit Pai</h3>
                  <p className="text-navy/60">Dealer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Whole Team Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-16 text-navy"
          >
            The Whole Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Kumar M', role: 'Research Analyst', experience: '9 years of experience' },
              { name: 'Aman Srivastav', role: 'Research Analyst', experience: '10 years of experience' },
              { name: 'Surbhi Soni', role: 'Research Analyst', experience: '4 years of experience' },
              { name: 'Mangesh Kolekar', role: 'Head of Compliance', experience: '20 years of experience' },
              { name: 'Kushal Dere', role: 'Head of Accounts', experience: '20 years of experience' },
              { name: 'Jyoti Mirchandani', role: 'Executive Assistant', experience: '15 years of experience' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover-lift"
              >
                <h3 className="text-xl font-semibold text-navy mb-2">{member.name}</h3>
                <p className="text-navy/60 mb-1">{member.role}</p>
                <p className="text-sm text-navy/50">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="heading-md mb-8 text-navy">Reach Us</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xl text-navy">
                  405, Raheja Chambers, Free Press Journal Road, Nariman Point, Mumbai 400 021
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Hours</h3>
                <p className="text-navy/70">Monday–Friday</p>
                <p className="text-navy/70">9am–6pm</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Phone</h3>
                <a href="tel:+912266548178" className="text-navy hover:text-green transition-colors">
                  +91 22 6654 8178
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
