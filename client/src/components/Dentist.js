import { useState, useEffect } from "react";
import NewAppointmentForm from './NewAppointmentForm'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams, useNavigate } from "react-router-dom";

const Dentist = ({ user, isEdit }) => {
  const [currentDentist, setCurrentDentist] = useState(null);
  const dentist = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/dentists/${dentist.id}`).then((r) => {
      if (r.ok) {
        r.json().then((d) => setCurrentDentist(d));
      }
    });
  }, [dentist.id]);

  const createAppointment = (value) => {
    const newAppointment = {
      user_id: user.id,
      dentist_id: currentDentist.id,
      appointment_date_time: value,
    };

    fetch("/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppointment),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("success");
          navigate('/appointments')
        });
      } else {
        res.json().then((json) => console.log("wrong"));
      }
    });
  };

  if (!currentDentist) {
    return <></>;
  }

  return (
    <Card sx={{minHeight: 500, border: '1px solid', borderColor: 'error.main', borderRadius: '16px', mt: 5, bgcolor: '#E8E7E2'}} className="header-container">
      <CardContent className="dentist_card">
        <img
          src={currentDentist.image}
          alt={currentDentist.name}
          style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'cover' }}
        />
        <Typography variant="h2" fontFamily="Roboto" sx={{ fontSize: 24 }}>
          Make a new appointment with: <br /> {currentDentist.name}
        </Typography>
        <Typography variant="h3" fontFamily="Roboto" sx={{ fontSize: 18 }}>
          Specialty: {currentDentist.specialty}
        </Typography>
        <NewAppointmentForm
          currentDentist={currentDentist}
          user={user}
          isEdit={isEdit}
          action={createAppointment}
          defaultValue={new Date()}
        />
      </CardContent>
    </Card>
  );
};

export default Dentist;
