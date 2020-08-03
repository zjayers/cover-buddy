import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Form, Header } from "semantic-ui-react";
import { generateFromData } from "./generator";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gitProfile, setGitProfile] = useState("");
  const [website, setWebsite] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [stack, setStack] = useState("");
  const [years, setYears] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [languagesAndFrameworks, setLanguages] = useState("");
  const [keywords1, setKeywords1] = useState("");
  const [keywords2, setKeywords2] = useState("");
  const [keywords3, setKeywords3] = useState("");

  return (
    <div>
      <div className="sticky">
        <Header as="h3" block>
          Cover Buddy
        </Header>
      </div>

      <Container
        className="App"
        fluid
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "40% 60%",
        }}
      >
        <Form style={{ display: "flex", margin: "20px" }}>
          <Container textAlign="left">
            <h2>Company Information</h2>
            <Form.Field>
              <label>Company Name</label>
              <input
                value={companyName}
                onChange={(e) => setCompanyname(e.target.value)}
                type="text"
                placeholder="Company Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Job Title</label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                placeholder="Job Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Tech Stack</label>
              <input
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                type="text"
                placeholder="Tech Stack"
              />
            </Form.Field>
            <h2>Key Terms</h2>
            <Form.Field>
              <label>Key Term 1</label>
              <input
                value={keywords1}
                onChange={(e) => setKeywords1(e.target.value)}
                type="text"
                placeholder="Key Term 1"
              />
            </Form.Field>
            <Form.Field>
              <label>Key Term 2</label>
              <input
                value={keywords2}
                onChange={(e) => setKeywords2(e.target.value)}
                type="text"
                placeholder="Key Term 2"
              />
            </Form.Field>
            <Form.Field>
              <label>Key Term 3</label>
              <input
                value={keywords3}
                onChange={(e) => setKeywords3(e.target.value)}
                type="text"
                placeholder="Key Term 3"
              />
            </Form.Field>
            <h2>Personal Information</h2>
            <Form.Field>
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="(555)-555-5555"
              />
            </Form.Field>
            <Form.Field>
              <label>Current Role</label>
              <input
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                type="text"
                placeholder="Front End Engineer"
              />
            </Form.Field>
            <Form.Field>
              <label>Github Username</label>
              <input
                value={gitProfile}
                onChange={(e) => setGitProfile(e.target.value)}
                type="text"
                placeholder="Github Username"
              />
            </Form.Field>
            <Form.Field>
              <label>Website</label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type="text"
                placeholder="Website Address"
              />
            </Form.Field>
            <Form.Field>
              <label>Years In Industry (Leave Blank to Skip)</label>
              <input
                value={years}
                onChange={(e) => setYears(e.target.value)}
                type="number"
                min="0"
                placeholder="0"
              />
            </Form.Field>
            <Form.Field>
              <label>Introduction</label>
              <textarea
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                type="text"
                placeholder="Quickly introduce yourself in a few sentences..."
              />
            </Form.Field>
            <h2>Technical Information</h2>
            <Form.Field>
              <label>Platforms</label>
              <textarea
                value={platforms}
                onChange={(e) => setPlatforms(e.target.value)}
                type="text"
                placeholder="Windows, Mac, Linux"
              />
            </Form.Field>
            <Form.Field>
              <label>Languages / Frameworks</label>
              <textarea
                value={languagesAndFrameworks}
                onChange={(e) => setLanguages(e.target.value)}
                type="text"
                placeholder="JavaScript, React, Express, SQL (4+ separated by comma)"
              />
            </Form.Field>
          </Container>
        </Form>
        <Container style={{ position: "relative" }}>
          <textarea
            className="cover-letter"
            style={{ margin: "20px" }}
            value={generateFromData(
              firstName + " " + lastName,
              email,
              phoneNumber,
              gitProfile,
              website,
              currentRole,
              introduction,
              companyName,
              jobTitle,
              stack,
              years,
              platforms.replace("  ", " "),
              languagesAndFrameworks.split(","),
              [keywords1, keywords2, keywords3]
            )}
            wrap="true"
            style={{ width: "80%", height: "100%" }}
            readOnly={true}
          ></textarea>
        </Container>
      </Container>
    </div>
  );
}

export default App;
