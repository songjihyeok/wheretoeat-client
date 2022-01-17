import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components"
import "slick/slick.css";
import "slick/slick-theme.css";

const Container = styled.div`
  display: flex; 
  justify-content: center;
`
const MobileLayout = styled.div`
  max-width: 512px;
  width: 100%;
  position: relative;
 `

ReactDOM.render(
  <React.StrictMode>
      <Container>
        <MobileLayout>
          <App />
        </MobileLayout>
      </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
