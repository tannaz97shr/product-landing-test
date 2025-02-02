interface BackdropProps {
  onClick?: () => void;
}

const Backdrop = ({ onClick }: BackdropProps) => {
  return (
    <div
      onClick={onClick}
      className={`fixed h-[100vh] w-[100vw] bg-backdrop left-0 z-10 top-0`}
    />
  );
};

export default Backdrop;
