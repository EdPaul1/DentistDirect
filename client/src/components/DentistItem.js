import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const DentistItem = ({ dentist }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`dentists/${dentist.id}`);
  };

  return (
    <div className="dentist_container">
      <Card sx={{ maxWidth: 200, border: 1 }} className="dentist_card">
        <CardContent>
          <img
            src={dentist.image}
            alt={dentist.name}
            style={{ maxWidth: '70px', maxHeight: '70px' }}
          />
          <Typography sx={{ fontSize: 20 }} color="text.error" gutterBottom>
            {dentist.name}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Specialty:
            <br />
            {dentist.specialty}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick} sx={{ bgcolor: '#BD8B4E', color: '#3D4C52' }}>
            Schedule Appointment
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default DentistItem;
