import styled from "styled-components";

export const Section = styled.section`


  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 500px;
    margin: 50px auto;
    padding: 10px;
    background-size: 100% 2em
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
  .form input[type="text"]{
    padding:10px;
    width: 85%;
    border: 1px solid #eee;
    border-radius: 6px;
  }
  .form input[type="text"]:focus,
  .form button[type="submit"]:focus{
    outline:none;
  }
  .form button[type="submit"]{
    background-color: #977;
    margin-right: 20px;
    color: #fff;
    font-weight: bolder;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer
  }

  .divAll {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  .all {
    display: flex;
    margin-right: 20px;
    justify-content: space-around;
    width: 100%;
  }

  .buttons {
    display: flex;
    margin-right: 0;
    justify-content: space-between;
    width: 120px;
  }
  input[type=checkbox] {
    display: flex;
    position: relative;
    margin-top: -2px;
    justify-content: center;
    cursor: pointer;
    margin-right: 30px;
  }

  input[type=checkbox]:before {
  content: "";
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 2;
  left: 0.5;
  border-radius: 20px;
  background-color: #977;
}

input[type=checkbox]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2.1px;
  left: 2px;
}
span{
  margin: 0px 15px;
}
  .contact-listItems{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .contact-item{
    display:flex;
    border-radius: 50%;
    color: red;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px
  }
  .item-content{
    width: 60%;
    margin-left: 20px;
  }

  .item-content.tracejado {
    text-decoration: line-through;
    color: #3e314b;
  }

  .contact-item button{
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 8px;
    
  }
  .contact-item button:focus{
    outline:none
  }
  .update-item{
    background-color: #928123;
    color:#fff;
    border-radius: 5px;
    padding: 7px;
  }
  .delete-item{
    background-color: #683998;
    color:#fff;
    border-radius: 5px;
    padding: 7px;
  }
  .update-form{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .update-new-input{
    width: 80%;
    border-radius: 6px;
    border: 1px solid #eee;
    padding: 8px;
    outline: none;
  }
  .update-new-btn{
    background-color: #977;
    border-radius: 5px;
    padding: 7px;
    color: #fff;
    cursor: pointer;
  }
`