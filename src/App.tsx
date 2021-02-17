import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import InputPage from "./page/InputPage";
function App() {
  return (
    <>
      <Container maxWidth="sm" style={{border:"1px solid #000000"}}>
        <InputPage />
      </Container>
    </>
  );
}

export default App;
