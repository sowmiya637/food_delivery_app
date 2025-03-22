import React from 'react';

const Register = () => {
  return (
    <div>
      <form className="register-form">
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">User Name</label>
          <input type="text" className="form-control" id="exampleInputUserName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Internal CSS */}
      <style jsx>{`
        .register-form {
          background-color: rgba(100,100,100);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          margin: auto;
          margin-top: 5rem;
        }

        .register-form .form-label {
          font-size: 1.1rem;
          font-weight: bold;
        }

        .register-form .form-control {
          border-radius: 4px;
          padding: 0.8rem;
        }

        .register-form .form-text {
          font-size: 0.9rem;
          color: black;
        }

        .register-form .btn-primary {
          width: 100%;
          padding: 0.8rem;
          border-radius: 4px;
          font-size: 1.1rem;
          background-color: #007bff;
          border-color: #007bff;
        }

        .register-form .form-check-label {
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Register;
