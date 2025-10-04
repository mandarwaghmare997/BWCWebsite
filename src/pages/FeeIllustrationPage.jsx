import { motion } from 'framer-motion';
import { useState } from 'react';

const FeeIllustrationPage = () => {
  const [formData, setFormData] = useState({
    capitalContribution: '10000000',
    managementFee: '0.00',
    otherExpenses: '0.50',
    performanceFee: '15',
    hurdleRate: '0.00',
    brokerageCost: '0.20',
    gain: '20'
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateResults = () => {
    const capital = parseFloat(formData.capitalContribution) || 0;
    const gain = parseFloat(formData.gain) || 0;
    const managementFee = parseFloat(formData.managementFee) || 0;
    const otherExpenses = parseFloat(formData.otherExpenses) || 0;
    const performanceFee = parseFloat(formData.performanceFee) || 0;
    const hurdleRate = parseFloat(formData.hurdleRate) || 0;
    const brokerageCost = parseFloat(formData.brokerageCost) || 0;

    // Calculate gross gain
    const grossGain = capital * (gain / 100);
    const grossValue = capital + grossGain;

    // Calculate fees
    const managementFeeAmount = capital * (managementFee / 100);
    const otherExpensesAmount = capital * (otherExpenses / 100);
    const brokerageCostAmount = capital * (brokerageCost / 100);
    
    // Calculate performance fee (only on gains above hurdle rate)
    const hurdleAmount = capital * (hurdleRate / 100);
    const gainAboveHurdle = Math.max(0, grossGain - hurdleAmount);
    const performanceFeeAmount = gainAboveHurdle * (performanceFee / 100);

    // Total fees
    const totalFees = managementFeeAmount + otherExpensesAmount + brokerageCostAmount + performanceFeeAmount;

    // Net value
    const netValue = grossValue - totalFees;
    const netGain = netValue - capital;
    const netReturn = (netGain / capital) * 100;

    setResults({
      grossValue: grossValue.toFixed(2),
      grossGain: grossGain.toFixed(2),
      managementFeeAmount: managementFeeAmount.toFixed(2),
      otherExpensesAmount: otherExpensesAmount.toFixed(2),
      brokerageCostAmount: brokerageCostAmount.toFixed(2),
      performanceFeeAmount: performanceFeeAmount.toFixed(2),
      totalFees: totalFees.toFixed(2),
      netValue: netValue.toFixed(2),
      netGain: netGain.toFixed(2),
      netReturn: netReturn.toFixed(2)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults();
  };

  const handleReset = () => {
    setFormData({
      capitalContribution: '10000000',
      managementFee: '0.00',
      otherExpenses: '0.50',
      performanceFee: '15',
      hurdleRate: '0.00',
      brokerageCost: '0.20',
      gain: '20'
    });
    setResults(null);
  };

  const inputFields = [
    { name: 'capitalContribution', label: 'a. Capital Contribution / Opening Value (Rs.) / High Water Mark NAV(Rs.)', placeholder: 'Enter amount' },
    { name: 'managementFee', label: 'b. Management Fee (% per annum)', placeholder: 'Enter percentage' },
    { name: 'otherExpenses', label: 'c. Other Expenses (% per annum)', placeholder: 'Enter percentage' },
    { name: 'performanceFee', label: 'd. Performance Fee(% per annum)', placeholder: 'Enter percentage' },
    { name: 'hurdleRate', label: 'e. Hurdle Rate of Return (% per annum)', placeholder: 'Enter percentage' },
    { name: 'brokerageCost', label: 'f. Brokerage and Transaction Cost (% per annum)', placeholder: 'Enter percentage' },
    { name: 'gain', label: 'g. Gain (%)', placeholder: 'Enter percentage' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-navy section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6 text-white">
              Fee Illustration
            </h1>
            <p className="text-xl text-white/80">
              Calculate your investment returns and understand the fee structure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-beige section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {inputFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-medium text-navy">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green focus:outline-none transition-colors"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-200 text-navy rounded-full font-semibold hover:bg-gray-300 transition-colors"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Results Section */}
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 bg-white rounded-3xl p-8 shadow-xl"
              >
                <h2 className="heading-md mb-8 text-navy">Calculation Results</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-navy mb-4">Gross Returns</h3>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                      <span className="text-navy/70">Gross Value:</span>
                      <span className="font-semibold text-navy">₹ {parseFloat(results.grossValue).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                      <span className="text-navy/70">Gross Gain:</span>
                      <span className="font-semibold text-green">₹ {parseFloat(results.grossGain).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-navy mb-4">Fees Breakdown</h3>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                      <span className="text-navy/70">Management Fee:</span>
                      <span className="font-semibold text-navy">₹ {parseFloat(results.managementFeeAmount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                      <span className="text-navy/70">Other Expenses:</span>
                      <span className="font-semibold text-navy">₹ {parseFloat(results.otherExpensesAmount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                      <span className="text-navy/70">Brokerage Cost:</span>
                      <span className="font-semibold text-navy">₹ {parseFloat(results.brokerageCostAmount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                      <span className="text-navy/70">Performance Fee:</span>
                      <span className="font-semibold text-navy">₹ {parseFloat(results.performanceFeeAmount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-100 rounded-xl border-2 border-orange-300">
                      <span className="text-navy font-semibold">Total Fees:</span>
                      <span className="font-bold text-orange">₹ {parseFloat(results.totalFees).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-navy rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-white/70 mb-2">Net Value</p>
                      <p className="text-3xl font-bold text-white">₹ {parseFloat(results.netValue).toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-2">Net Gain</p>
                      <p className="text-3xl font-bold text-green">₹ {parseFloat(results.netGain).toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-2">Net Return</p>
                      <p className="text-3xl font-bold text-green">{results.netReturn}%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeeIllustrationPage;
