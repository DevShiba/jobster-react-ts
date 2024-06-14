import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(100, 100, 100, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .content {
    position: relative;
    background: var(--background-color);
    width: 90vw;
    height: 95vh;
    border-radius: 5px;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: var(--white-color);
  }

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .nav-link {
      display: flex;
      align-items: center;
      color: #a1a1a1;
      text-transform: capitalize;
      transition: 0.3s;

      .nav-link:hover {
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
    }

    .active {
      color: var(--white-color);
    }
    .active .icon {
      color: var(--second-color);
    }
  }
`;
export default Wrapper;
