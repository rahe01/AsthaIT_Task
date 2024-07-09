const Gender = ({ handleGenderChange, genderError }) => {
  return (
    <div>
      <p className="gender-l">Please choose a gender . You can change who can see this later</p>
      <div className="gender">
        <div className="gender-in">
          <span>Female</span>
          <input type="radio" name="gender" value="female" onChange={handleGenderChange} />
        </div>
        <div className="gender-in">
          <span>Male</span>
          <input type="radio" name="gender" value="male" onChange={handleGenderChange} />
        </div>
        <div className="gender-in">
          <span>Custom</span>
          <input type="radio" name="gender" value="custom" onChange={handleGenderChange} />
        </div>
      </div>
      <p className="click-signup">By clicking Sign Up, you agree to our User Agreement, Privacy Policy, and Cookie Policy</p>
      {genderError && <span className="error">{genderError}</span>}
    </div>
  );
};

export default Gender;
