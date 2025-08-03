import { createContext, useContext, useState, useEffect } from 'react';
import { parsePDF } from '../utils/pdfParser';

const CVContext = createContext();

export function CVProvider({ children }) {
  const [cvData, setCVData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCVData() {
      try {
        setLoading(true);
        const data = await parsePDF('/Divyansh_Ahuja_CV.pdf');
        setCVData(data);
      } catch (error) {
        console.error('Error loading CV data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCVData();
  }, []);

  return (
    <CVContext.Provider value={{ cvData, loading }}>
      {children}
    </CVContext.Provider>
  );
}

export function useCV() {
  return useContext(CVContext);
}
