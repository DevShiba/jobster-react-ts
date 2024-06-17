import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  .form {
    background-color: var(--first-color);
    padding: 2.5rem;
    border-radius: 5px;
    border-top: 5px solid var(--second-color);
    display: flex;
    flex-direction: column;
    width: 400px;
    .logo {
      align-self: center;
      margin-bottom: 2rem;
    }
    .title {
      color: var(--white-color);
      font-size: var(--h2-font-size);
      text-align: center;
      font-family: var(--h1-font);
      font-weight: var(--font-medium);
      margin-bottom: 2rem;
    }
    .form-row {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      .form-label {
        text-transform: capitalize;
        color: var(--white-color-2);
        font-size: var(--normal-font-size);
      }
      .form-input {
        padding: 0.5rem;
        border-radius: 3px;
        border: none;
        background-color: var(--background-color);
        color: var(--white-color);
        margin-bottom: 2rem;
      }
    }

    .btn {
      padding: 0.5rem 1.3rem;
      font-size: var(--normal-font-size);
      background-color: var(--second-color);
      border: 0;
      color: var(--white-color-2);
      text-transform: capitalize;
      border-radius: 0.2rem;
      transition: background 0.3s;
      &:hover {
        background-color: var(--second-color-alt);
      }
    }

    .test-btn {
      margin-top: 1rem;
    }

    .member-verification {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      gap: 0.5rem;
      .member-btn {
        background: none;
        border: none;
        color: var(--second-color);
        cursor: pointer;
        font-size: var(--normal-font-size);
      }
    }
  }
`;

export default Wrapper;
