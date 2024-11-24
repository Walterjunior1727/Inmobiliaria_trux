import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const professionalPalette = {
  primary: '#2C3E50',
  secondary: '#3498DB',
  accent: '#27AE60',
  background: '#F4F6F7',
  text: '#34495E'
};

const SurveySection = () => {
  const surveyData = [
    { category: 'Tipo de Propiedad', casa: 37, departamento: 63 },
    { category: 'Número de Habitaciones', una: 15, dos: 70, tres: 15 },
    { category: 'Uso de Sitios Web', si: 60, no: 40 },
    { category: 'Ubicación Preferida', suburbana: 30, urbana: 45, rural: 25 }
  ];

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 mx-auto max-w-6xl my-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Análisis de Mercado Inmobiliario</h2>
        <p className="text-xl text-gray-600">Insights basados en datos recientes del mercado</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={surveyData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="casa" stackId="a" fill={professionalPalette.primary} />
          <Bar dataKey="departamento" stackId="a" fill={professionalPalette.secondary} />
          <Bar dataKey="una" stackId="b" fill={professionalPalette.accent} />
          <Bar dataKey="dos" stackId="b" fill={professionalPalette.text} />
          <Bar dataKey="tres" stackId="b" fill={professionalPalette.background} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const InformationCards = () => {
  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>,
      title: "Ministerio del Trabajo",
      description: "Análisis detallado de las condiciones laborales en construcción y bienes raíces."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: "Organización Internacional del Trabajo",
      description: "Estrategias para un desarrollo sostenible en el sector inmobiliario."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      title: "CEPAL",
      description: "Panorama económico y tendencias en mercado inmobiliario latinoamericano."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Tu Próxima Propiedad Nos Espera</h2>
        <p className="text-xl mb-8">Descubre oportunidades únicas en el mercado inmobiliario</p>
        <a 
          href="#" 
          className="bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Explorar Propiedades
        </a>
      </div>
    </div>
  );
};

const RealEstateDesign = () => {
  return (
    <div>
      <InformationCards />
      <SurveySection />
      <CallToAction />
    </div>
  );
};

export default RealEstateDesign; 
