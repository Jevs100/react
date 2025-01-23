export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {

// \\  console.log(buttonsContainer)
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
