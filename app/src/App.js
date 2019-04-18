import React, { Component } from "react";
import Container from "./components/Container";
import { Button, Heading, TextInputField, Pane } from "evergreen-ui";

class App extends Component {
  render() {
    return (
      <Container background="tint1" minHeight="100vh" flexDirection="column">
        <Heading size={600} marginBottom={35}>
          Create an User
        </Heading>
        <Pane display="flex" justifyContent="space-between" width={500}>
          <Pane width="48%" marginBottom={25}>
            <TextInputField
              label="Firstname"
              name="firstname"
              placeholder="Firstname"
            />
            <TextInputField
              label="Surname"
              name="surname"
              placeholder="Surname"
            />
          </Pane>
          <Pane width="48%" marginBottom={25}>
            <TextInputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <TextInputField
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Pane>
        </Pane>
        <Pane
          width={500}
          marginBottom={25}
          textAlign="right"
        >
          <Button type="submit">Submit</Button>
        </Pane>
      </Container>
    );
  }
}

export default App;
