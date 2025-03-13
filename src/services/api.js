export const fetchData = async () => {
    try {
      const response = await fetch('db/infocards.json');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };

export const fetchProfessionals = async () => {
    try {
      const response = await fetch('db/professionals.json');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };
  
export const fetchBoxes = async () => {
    try {
      const response = await fetch('db/boxes.json');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };

export const fetchUsers = async () => {
    try {
      const response = await fetch('db/users.json');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };