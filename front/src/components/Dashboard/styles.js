import styled from "styled-components";
  
export const Section = styled.section`
  nav {
    z-index: 1;
    position: absolute;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .nav {
    display: flex;
    position: fixed;
    padding: 10px;
    width: 100%;
    justify-content:space-between;
    height: 60px;
    margin-top: -100px;
    border-bottom: 3px solid #333;
    align-items: center;
    background-color: #000;
    z-index: 3;
  }

  .profile {
    display: flex;
    margin-left: 30px;
    color: #fff;

    h2{
      margin-right: 30px;
    }

    button {
      padding: 10px;
      background-color: #683998;
      border-radius: 10px;
      color: #fff;
      margin-right: 10px;
    }

    button:hover{
      background-color: #232434;
    }
  }

  .infos {
    margin-top: 100px;
    padding: 25px;

    h1{
      margin-bottom: 20px;
      color: #fff;
    }

    button {
      padding: 10px;
      background-color: #683998;
      border-radius: 10px;
      color: #fff;
      margin-right: 10px;
    }

    button:hover{
      background-color: #232434;
    }
  }

  .divAll {
    display: flex;
    margin-top: 15px;
    color: #f5f5f5;
  }

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 500px;
    margin: 50px auto;
    padding: 10px;
    background-size: 100% 2em;
    margin: 60px;
  }

  .App h1{
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    color: #d3d3d3;
    width: 200px;
    background-color: #fff;
    border-radius: 8px 0 8px 0;
  }
  .form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 12px
  }

  .divAll {
    display: flex;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .all {
    display: flex;
    margin-right: 20px;
    justify-content: space-around;
    width: 100%;
  }

  .editarModal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #77d7;
    width: 250px;
    border-radius: 12px;
    margin: 0 auto;
    padding: 20px;

    label {
      display: flex;
      color: #fff;
      margin-top: 10px;
    }

    input {
      display: flex;
      margin: 15px;
      height: 25px;
      border-radius: 7px;
    }

    button{
      display: flex;
      justify-content: center;
    }
  }
`

