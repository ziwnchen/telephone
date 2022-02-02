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
  state = { age:"", gender:"", education:"", location:"AL",
    native_english:"", "years_english":"", income:""};

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
    const { age, gender, education, location, income, native_english, years_english} = this.state;

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
              <div class="survey_question">
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
              <div class="survey_question">
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
            <div class="survey_question">
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
              </div>
            </div>

            <div class="survey_question">
              <label>What state do you live in?</label>
                <select name="location" value={this.state.value} onChange={this.handleChange}>
              	<option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
              </select>
            </div>

            <div class="survey_question">
              <label>Is English your native language?</label>
              <div>
                <Radio
                  selected={native_english}
                  name="native_english"
                  value="1"
                  label="Yes"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={native_english}
                  name="native_english"
                  value="0"
                  label="No"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div class="survey_question">
              <label> <b>If English is NOT you native language, </b>
              How many years have you been speaking English? (If not applied, leave this question blank.)</label>
              <div>
                <input
                  id="years_english"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  dir="auto"
                  name="years_english"
                  value={years_english}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div class="survey_question">
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
          </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}
