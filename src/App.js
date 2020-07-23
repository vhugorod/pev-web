import React, { useState, useEffect } from 'react';
import Logo from './assets/logo.png';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import CompanyForm from  './components/CompanyForm';
import CompanyItem from  './components/CompanyItem';

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('/companies');

      setCompanies(response.data);
    }

    loadCompanies();
  })

  async function handleAddCompany(data) {
    const response = await api.post('/companies', data)

    setCompanies([...companies, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <img className="logo" src={Logo} alt="Instituto Agronelli"/>
        <strong>Cadastrar Ponto</strong>
        <CompanyForm onSubmit={handleAddCompany} />
      </aside>

      <main>
        <ul>
          {companies.map(company => (
            <CompanyItem key={company._id} company={company} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
