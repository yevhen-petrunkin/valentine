const Title = ({ notHome, open }) => {
  return (
    <h1 className="title">
      {notHome && open ? "You Are My Valentine!" : "Be My Valentine?"}
    </h1>
  );
};

export default Title;
