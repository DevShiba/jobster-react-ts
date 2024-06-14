import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(100, 100, 100, 0.1);
    .sidebar-container {
      background: var(--first-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: 0.5s;
      .content {
        position: sticky;
        top: 0;

        header {
          height: 6rem;
          display: flex;
          align-items: center;
          padding-left: 2.5rem;
        }
        .nav-links {
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
        }
        .nav-link {
          display: flex;
          align-items: center;
          color: var(--white-color-second);
          padding: 1rem 0;
          padding-left: 2.5rem;
          text-transform: capitalize;
          transition: 0.3s;
        }
        .nav-link:hover {
          background: #12141f;
          padding-left: 3rem;
          color: var(--white-color);
        }
        .nav-link:hover .icon {
          color: var(--second-color);
        }
        .icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          display: grid;
          place-items: center;
          transition: 0.3s;
        }

        .active {
          color: var(--white-color);
        }
        .active .icon {
          color: var(--second-color);
        }
      }
    }

    .show-sidebar {
      margin-left: 0;
    }
  }
`;
export default Wrapper;
