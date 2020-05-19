import React, { useState, useEffect } from 'react';

function CompanyForm({ onSubmit }) {
  const [company_name, setCompanyName] = useState('');
  const [materials, setMaterials] = useState('');
  const [address, setAddress] = useState('');
  const [expedient, setExpedient] = useState('');
  const [phone, setPhone] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e){
    e.preventDefault();

    await onSubmit({
      company_name,
      materials,
      address,
      expedient,
      phone,
      recommendations,
      latitude,
      longitude,
    });

    setCompanyName('');
    setMaterials('');
    setAddress('');
    setExpedient('');
    setPhone('');
    setRecommendations('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="company_name">Ponto de Coleta</label>
        <input 
          name="company_name"
          id="company_name" 
          required 
          value={company_name}
          onChange={e => setCompanyName(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="materials">Materiais de descarte</label>
        <input 
          name="materials" 
          id="materials"
          required
          value={materials}
          onChange={e => setMaterials(e.target.value)}  
        />
      </div>
          
      <div className="input-block">
        <label htmlFor="address">Endereço</label>
        <input 
          name="address" 
          id="address" 
          required
          value={address}
          onChange={e => setAddress(e.target.value)}  
        />
      </div>

      <div className="input-block">
        <label htmlFor="expedient">Dia e horário de entrega</label>
        <input 
          name="expedient" 
          id="expedient" 
          required
          value={expedient}
          onChange={e => setExpedient(e.target.value)}
        />
      </div>
          
      <div className="input-block">
        <label htmlFor="phone">Telefone</label>
        <input 
          name="phone" 
          id="phone" 
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="recommendations">Higienização para descarte</label>
        <input 
          name="recommendations" 
          id="recommendations" 
          required
          value={recommendations}
          onChange={e => setRecommendations(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            type="number" 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude} 
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default CompanyForm;
