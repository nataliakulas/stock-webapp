import color from "./colors";

export const ButtonMixin = `
  font-family: "Lato", sans-serif;
  color: ${color.white};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  
  border: 1px solid ${color.primary};
  background-color: ${color.primary};
  border-radius: 4px;
  
  padding: 10px 20px;
  
  cursor: pointer;
  
  &:hover {
    border-color: ${color.secondary};
    background-color: ${color.secondary};
  }
`;
