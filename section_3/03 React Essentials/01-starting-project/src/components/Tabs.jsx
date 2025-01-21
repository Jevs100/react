export default function Tabs({ children, buttons, buttonsContainer }) {
  const buttonsContainer = buttonsContainer;
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
