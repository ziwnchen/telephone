import React from "react";

import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);

export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = { age:"", gender:"", education:"", location:"", income:""};

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { age, gender, education, location, income } = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1> Exit Survey (Part 1) </h1>
          <p>
            Please answer the following questions. You do not have to provide
            any information you feel uncomfortable with.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <div>
                <label htmlFor="age">Age</label>
                <div>
                  <input
                    id="age"
                    type="number"
                    min="0"
                    max="150"
                    step="1"
                    dir="auto"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <div>
                  <input
                    id="gender"
                    type="text"
                    dir="auto"
                    name="gender"
                    value={gender}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div>
              <label>What is your highest education qualification?</label>
              <div>
                <Radio
                  selected={education}
                  name="education"
                  value="high-school"
                  label="High School"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="bachelor"
                  label="US Bachelor's Degree"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="master"
                  label="Master's or higher"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={education}
                  name="education"
                  value="other"
                  label="Other"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label>What is your home location?</label>
              <div>
                <Radio
                  selected={location}
                  name="location"
                  value="north_america"
                  label="North America"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="south_america"
                  label="South America"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="europe"
                  label="Europe"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="africa"
                  label="Africa"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="asia"
                  label="Asia"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="australia"
                  label="Australia"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="caribbean"
                  label="Caribbean Islands"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="pacific"
                  label="Pacific Islands"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="other"
                  label="Other"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={location}
                  name="location"
                  value="no"
                  label="Prefer not to say"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label>What is your income level?</label>
              <div>
                <Radio
                  selected={income}
                  name="income"
                  value="_10"
                  label="Below $10k"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={income}
                  name="income"
                  value="10_50"
                  label="$10k to $50k"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={income}
                  name="income"
                  value="50_100"
                  label="$50k to $100k"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={income}
                  name="income"
                  value="100_150"
                  label="$100k to $150k"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={income}
                  name="income"
                  value="150_"
                  label="Over $150k"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={income}
                  name="income"
                  value="no"
                  label="Prefer not to say"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}
