export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const buttonsContainer = buttonsContainer;
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
