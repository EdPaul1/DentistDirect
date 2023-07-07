import DentistItem from "./DentistItem";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const Dentists = ({ dentists, user }) => {
  const dentistItems = dentists.map((dentist) => (
    <DentistItem
      key={dentist.id}
      dentist={dentist}
      user={user}
    />
  ));

  return (
    <Card sx={{ minHeight: 500, border: '1px solid', borderColor: 'primary.main', borderRadius: '16px', mt: 5, bgcolor: '#E8E7E2' }}>
      <div>
        <div className="header-container">
          <h2 style={{ marginTop: '5px', color: '#965F4B' }}>Available Dentists</h2>
        </div>
        <div className="dentist_container" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {dentistItems}
        </div>
      </div>
    </Card>
  );
};

export default Dentists;
