const LoadMore = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center  m-5">
      <button onClick={handleClick}>Daha Fazla</button>
    </div>
  );
};

export default LoadMore;
