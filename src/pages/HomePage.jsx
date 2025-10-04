import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import heroIllustration from '../assets/hero-illustration.webp';
import valuingTomorrowBadge from '../assets/valuing-tomorrow-badge.webp';
import coreValuesIllustration from '../assets/core-values-illustration.webp';
import timeLeftIllustration from '../assets/time-patience-left-illustration.webp';
import timeRightIllustration from '../assets/time-patience-right-illustration.webp';
import portfolioFeature1 from '../assets/portfolio-feature-1.webp';
import portfolioFeature2 from '../assets/portfolio-feature-2.webp';
import portfolioFeature3 from '../assets/portfolio-feature-3.webp';
import portfolioFeature4 from '../assets/portfolio-feature-4.webp';
import ranjitDongre from '../assets/ranjit-dongre.webp';
import pSrinath from '../assets/p-srinath.webp';
import { ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  const [cagr, cagrRef] = useCountUp(22.6, 2000, 0);
  const [crores1, crores1Ref] = useCountUp(3000, 2500, 0);
  const [crores2, crores2Ref] = useCountUp(1300, 2500, 0);

  // Performance chart data
  const performanceData = [
    { year: 'FY04', BELLWETHER: 1, BSE500TRI: 1, NIFTY50: 1 },
    { year: 'FY08', BELLWETHER: 4.2, BSE500TRI: 3.1, NIFTY50: 2.8 },
    { year: 'FY12', BELLWETHER: 6.8, BSE500TRI: 4.2, NIFTY50: 3.5 },
    { year: 'FY15', BELLWETHER: 12.5, BSE500TRI: 6.8, NIFTY50: 5.9 },
    { year: 'FY20', BELLWETHER: 28.3, BSE500TRI: 11.2, NIFTY50: 9.8 },
    { year: 'FY25', BELLWETHER: 52.7, BSE500TRI: 18.5, NIFTY50: 15.2 },
  ];

  // Bar chart data
  const barChartData = [
    { period: '5 Years', BELLWETHER: 26.3, BSE500TRI: 22.3, NIFTY50: 22.3 },
    { period: '10 Years', BELLWETHER: 13.2, BSE500TRI: 13.2, NIFTY50: 10.7 },
    { period: '15 Years', BELLWETHER: 12.6, BSE500TRI: 12.6, NIFTY50: 10.5 },
    { period: '21 Years', BELLWETHER: 14.7, BSE500TRI: 14.7, NIFTY50: 12.8 },
  ];

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
                Your money is an extension of your life's work and aspirations
              </h1>
              <p className="text-lg mb-8 text-white/90">
                At Bellwether Capital, we aim to strike a balance between capital preservation and alpha creation.
              </p>
              <button onClick={scrollToContact} className="btn-primary">
                Get In Touch
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img src={heroIllustration} alt="Bellwether Capital" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl mb-6 text-navy">
                Bellwether Capital offers the accessibility of a boutique firm with the expertise of a major investment house.
              </p>
              <p className="text-xl mb-8 text-navy">
                We believe what's right for everyone is not right for everyone – no one-size-fits-all.
              </p>
              <a href="/aboutus" className="inline-block px-8 py-3 bg-navy text-white rounded-full hover:bg-navy/90 transition-all duration-300">
                Who We Are
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img src={valuingTomorrowBadge} alt="Valuing Tomorrow Since 2004" className="w-64 h-64 object-contain animate-rotate-badge" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-navy section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-16 text-white"
          >
            At the heart of our approach to wealth creation are quality, conviction, and patience
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={coreValuesIllustration} alt="Core Values" className="w-full h-auto" />
            </motion.div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Quality Investments</h3>
                    <p className="text-white/80">We look beyond numbers and focus on management quality</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Sizeable Bets</h3>
                    <p className="text-white/80">We create concentrated portfolios of 10 to 15 stocks</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Long-term Focus</h3>
                    <p className="text-white/80">We leverage the power of compounding, not unusual for us to stay invested for 10+ years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Time & Patience Section */}
      <section className="section-beige section-padding relative overflow-hidden">
        <img src={timeLeftIllustration} alt="" className="absolute left-0 bottom-0 w-64 h-auto opacity-80" />
        <img src={timeRightIllustration} alt="" className="absolute right-0 bottom-0 w-64 h-auto opacity-80" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-8 text-navy">
              We believe sustainable wealth creation requires time and patience
            </h2>
            <blockquote className="text-xl italic mb-4 text-navy">
              "We must use time as a tool, not as a crutch."
            </blockquote>
            <p className="text-lg mb-8 text-navy/70">~ John F. Kennedy</p>
            <button onClick={scrollToContact} className="btn-primary">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Differentiated thinking, Disproportionate outcomes
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 mb-12 shadow-lg"
          >
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="BELLWETHER" stroke="#FF6B35" strokeWidth={3} animationDuration={2000} />
                <Line type="monotone" dataKey="BSE500TRI" stroke="#2C3E5E" strokeWidth={2} animationDuration={2000} animationBegin={300} />
                <Line type="monotone" dataKey="NIFTY50" stroke="#A8C5DD" strokeWidth={2} animationDuration={2000} animationBegin={600} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              ref={cagrRef}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover-lift"
            >
              <div className="text-5xl font-bold text-navy mb-2">{cagr.toFixed(1)}%</div>
              <div className="text-lg text-navy/60 mb-2">CAGR</div>
              <p className="text-sm text-navy/70">generated over the past 21 years</p>
            </motion.div>
            
            <motion.div
              ref={crores1Ref}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover-lift"
            >
              <div className="text-5xl font-bold text-navy mb-2">{crores1.toLocaleString()}</div>
              <div className="text-lg text-navy/60 mb-2">Crores</div>
              <p className="text-sm text-navy/70">assets managed for an exclusive set of 580 clients</p>
            </motion.div>
            
            <motion.div
              ref={crores2Ref}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover-lift"
            >
              <div className="text-5xl font-bold text-navy mb-2">{crores2.toLocaleString()}</div>
              <div className="text-lg text-navy/60 mb-2">Crores</div>
              <p className="text-sm text-navy/70">returned in the form of capital and profits</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Bellwether calibrates risk to unearth opportunity
          </motion.h2>
          <p className="text-center text-xl mb-12 text-navy/70">
            Two decades of value creation while keeping your capital protected
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">We are performance driven</h3>
              <p className="text-navy/70">We have outperformed the benchmark for 15 out of 21 years</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">We have demonstrated resilience</h3>
              <p className="text-navy/70">We have survived two black swan events, delivered positive returns for 18 years and generated 20% CAGR from covid peak</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">We anchor our performance on yours</h3>
              <p className="text-navy/70">The cost of managing your money is ours – no management fee structure</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="BELLWETHER" fill="#FF6B35" animationDuration={1500} />
                <Bar dataKey="BSE500TRI" fill="#2C3E5E" animationDuration={1500} animationBegin={200} />
                <Bar dataKey="NIFTY50" fill="#A8C5DD" animationDuration={1500} animationBegin={400} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Features Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-16 text-navy"
          >
            The Bellwether portfolio is characterised by certain features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="feature-card text-center"
            >
              <img src={portfolioFeature1} alt="Superior Stock Picking" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold text-navy">Superior Stock Picking</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="feature-card text-center"
            >
              <img src={portfolioFeature2} alt="Concentrated Portfolio" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold text-navy">Concentrated Portfolio</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="feature-card text-center"
            >
              <img src={portfolioFeature3} alt="Long Holding Periods" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold text-navy">Long Holding Periods</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="feature-card text-center"
            >
              <img src={portfolioFeature4} alt="Low Churn" className="w-32 h-32 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-semibold text-navy">Low Churn</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-beige section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Let's value tomorrow today
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift relative group"
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-6 h-6 text-navy" />
              </div>
              <img src={ranjitDongre} alt="Ranjit Dongre" className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-2xl font-semibold mb-2 text-navy">Ranjit Dongre</h3>
              <a href="mailto:ranjit@bellwethercapital.in" className="text-green hover:underline">
                ranjit@bellwethercapital.in
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover-lift relative group"
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-6 h-6 text-navy" />
              </div>
              <img src={pSrinath} alt="P. Srinath" className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-2xl font-semibold mb-2 text-navy">P. Srinath</h3>
              <a href="mailto:srinath@bellwethercapital.in" className="text-green hover:underline">
                srinath@bellwethercapital.in
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
