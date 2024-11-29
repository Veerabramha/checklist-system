const axios = require('axios');
const { checklistRules } = require('../config/checklistRules');

const getApplicationData = async (req, res) => {
  try {
    const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
    const applicationData = response.data;

    const results = checklistRules.map(rule => {
      let passed = false;
      switch (rule.key) {
        case 'isValuationFeePaid':
          passed = applicationData.isValuationFeePaid === true;
          break;
        case 'isUkResident':
          passed = applicationData.isUkResident === true;
          break;
        case 'riskRating':
          passed = applicationData.riskRating === 'Medium';
          break;
        case 'ltv':
          const ltv = (applicationData.loanRequired / applicationData.purchasePrice) * 100;
          passed = ltv < 60;
          break;
        default:
          break;
      }

      return { rule: rule.name, passed };
    });

    res.render('dashboard', { results });
  } catch (error) {
    res.status(500).send('Error fetching application data');
  }
};

module.exports = { getApplicationData };
