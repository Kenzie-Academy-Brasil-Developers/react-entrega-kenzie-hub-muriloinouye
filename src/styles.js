import styled from "styled-components";

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding-left: 10px;

  background-color: var(--grey-2);
  color: var(--grey-0);
  border: none;
  outline: none;
  border-radius: 4px;

  :focus {
    outline: solid 2px var(--grey-0);
  }
`;

export const Label = styled.label`
  color: var(--grey-0);
  font-size: 12px;
  margin-bottom: -12px;
`;

export const LabelModal = styled(Label)`
  margin-bottom: 0px;
`;

export const Button = styled.button`
  height: 48px;
  width: 100%;
  padding-left: 10px;
  margin-top: ${(props) => `${props.marginTop}px`};

  background-color: var(--grey-1);
  color: var(--grey-0);
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
  border-radius: 4px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: var(--color-primary);
  color: var(--grey-0);
`;

export const ButtonSmaller = styled.button`
  height: 32px;
  padding: 0 15px;

  background-color: var(--grey-3);
  color: var(--grey-0);
  font-size: 14px;

  border-radius: 5px;
  border: none;
`;

export const Select = styled.select`
  height: 48px;
  width: 100%;
  padding-left: 10px;

  background-color: var(--grey-2);
  color: var(--grey-0);
  border: none;
  outline: none;
  border-radius: 4px;
`;

export const Form = styled.form`
  width: 370px;
  max-width: 90%;
  margin: 0 auto;
  padding: 42px 22px;

  display: flex;
  flex-direction: column;

  background-color: var(--grey-3);
  border-radius: 4px;
`;

export const HeaderFormLogin = styled.header`
  width: 100%;
  margin-bottom: 22px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  color: var(--grey-0);
`;

export const FormLoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const FormLoginUnregisted = styled.div`
  margin-top: 44px;

  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const FormLoginUnregistedP = styled.p`
  color: var(--grey-1);
  font-size: 14px;
  text-align: center;
`;

export const LoginHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormRegisterHeader = styled.header`
  width: 100%;
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

export const FormRegisterHeaderTitle = styled.h2`
  font-size: 16px;
  color: var(--grey-0);
`;

export const FormRegisterHeaderP = styled.p`
  font-size: 12px;
  color: var(--grey-1);
`;

export const FormRegisterInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const StyleRegisterHeader = styled.header`
  width: 370px;
  max-width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Warning = styled.p`
  margin-top: -15px;
  color: var(--negative);
  font-size: 12px;
`;

export const AddContainer = styled.div`
  width: 780px;
  max-width: 90%;
  margin: 20px auto;
`;

export const AddHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    color: var(--grey-0);
  }
`;

export const AddButton = styled.button`
  height: 32px;
  width: 32px;

  background-color: var(--grey-2);
  color: var(--grey-0);
  font-size: 25px;

  border: none;
  border-radius: 4px;
`;

export const ModalHeader = styled.header`
  height: 50px;
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-2);
  border-radius: 8px 8px 0 0;

  h2 {
    font-size: 16px;
    color: var(--grey-0);
  }

  button {
    background: none;
    border: none;
    color: var(--grey-0);
    font-size: 16px;
  }
`;

export const AddForm = styled.form`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledDashHeader = styled.header`
  height: 52px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--grey-3);
`;

export const DashHeaderContainer = styled.div`
  width: 780px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashListContainer = styled.ul`
  width: 780px;
  margin: 0 auto;
  max-width: 90%;
  min-height: 200px;
  padding: 24px 0;

  background-color: var(--grey-3);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding-inline-start: 0;
`;

export const StyledDashNavbar = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--grey-3);
`;

export const DashNavbarContainer = styled.div`
  width: 780px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--grey-0);
    font-size: 18px;
  }

  p {
    color: var(--grey-1);
  }
`;

export const CardDiv = styled.div`
  width: 732px;
  height: 49px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--grey-4);

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: var(--grey-0);
  }
`;

export const CardRightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    font-size: 12px;
    color: var(--grey-1);
  }

  button {
    background: none;
    border: none;
    color: var(--grey-0);
  }
`;
