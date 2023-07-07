import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Signup = ({ setUser, setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      name: username,
      password,
    };

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsLoading(false);
          setUser(user);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }
  return (
    <div>
      <Card className='login_card' style={{ backgroundColor: '#f2efed' }}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <h2 style={{ marginBottom: '10px' }}>Create account</h2>
            <div>
              <label>Username </label>
              <input
                type="text"
                placeholder="Enter new username..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label style={{ marginTop: '5px' }}>Password </label>
              <input
                type="password"
                placeholder="Enter new password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <CardActions>
              <Button
                className="button-primary"
                type="submit"
                value={isLoading ? "Loading..." : "Sign Up"}
                style={{ backgroundColor: '#BD8B4E' }}
              >
                Sign Up
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
