import { useState, useEffect } from "react";
import AppointmentItem from "./AppointmentItem";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Appointments = ({ user, editApptMode }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/myappointments").then((r) => {
      if (r.ok) {
        r.json().then((appts) => setAppointments(appts));
      }
    });
  }, []);

  const cancelAppt = (appointment) => {
    const oneLess = appointments.filter((appt) => appointment.id !== appt.id)
    setAppointments(oneLess)
  }

  const appointmentList = appointments.map((appointment) => (
    <AppointmentItem key={appointment.id} appointment={appointment} setAppointments={setAppointments} cancelAppt={cancelAppt} editApptMode={editApptMode} />
  ));

  return (
    <Card sx={{height: 550, border: '1px solid',  borderColor: 'error.main', borderRadius: '16px', mt: 5, bgcolor: '#E8E7E2'}}>
      <CardContent>
        <div className="header-container" >
          <h2>My Appointments</h2>
        </div>
        <div id="make-appointment">
          {appointmentList}
        </div>
      </CardContent>
    </Card>
  );
};
export default Appointments;
