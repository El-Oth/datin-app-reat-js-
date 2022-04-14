import { useState } from "react";
import Nav from "./Nav";
const onBoarding = () => {
  const handleSubmit = () => {
    console.log("submited");
  };
  const handleChange = () => {
    console.log("changed");
  };
  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />

      <div className="onBoarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first-name">Fisrt Name</label>
            <input
              id="first-name"
              type="text"
              name="first-name"
              placeholder="first-name"
              required={true}
              value={""}
              onChange={handleChange}
            />
            <label>BirthDay</label>
            <div className="multiple-input">
              <input
                id="dob-d"
                type="number"
                name="dob-d"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <input
                id="dob-m"
                type="number"
                name="dob-m"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />
              <input
                id="dob-y"
                type="number"
                name="first-name"
                placeholder="first-name"
                required={true}
                value={""}
                onChange={handleChange}
              />{" "}
            </div>
            <label>Gender</label>

            <div className="multiple-input">
              <label htmlFor="man-gender-identity">man</label>
              <input
                id="man-gender"
                type="radio"
                name="gender-identity"
                required={true}
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-identity">woman</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender-identity"
                required={true}
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="more-gender-identity">more</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender-identity"
                required={true}
                value="more"
                onChange={handleChange}
                checked={false}
              />
            </div>
            <label>show gender on my profile</label>
            <input
              id="more-gender"
              type="checkbox"
              name="show-gender"
              onChange={handleChange}
              checked={false}
            />
            <label>Show Me</label>
            <div className="multiple-input">
              <label htmlFor="man-gender-interest">man</label>
              <input
                id="man-gender"
                type="radio"
                name="gender-interest"
                required={true}
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-interest">woman</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender-interest"
                required={true}
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="everyone-gender-interest">everyone</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender-interest"
                required={true}
                value="everyone"
                onChange={handleChange}
                checked={false}
              />
            </div>

            <label htmlFor="about">about me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks.."
              value={""}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>
          <section>
            <label htmlFor="about">Profile</label>
            <input
              id="url"
              name="url"
              type="url"
              required={true}
              onChange={handleChange}
            />
          </section>
        </form>
      </div>
    </>
  );
};
export default onBoarding;
