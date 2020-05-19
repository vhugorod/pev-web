import React from 'react';

import './styles.css';

function CompanyItem({ company }) {
  return (
    <li className="company-item">
      <header>
        <div className="company-info">
          <strong>{company.company_name}</strong>
          <span>{company.materials.join(', ')}</span>
        </div>
      </header>
      <p className="company-desc">{company.address}</p>
      <p className="company-desc">{company.expedient}</p>
      <p className="company-desc">{company.phone}</p>
      <p>{company.recommendations}</p>
    </li>
  );
}
export default CompanyItem;
