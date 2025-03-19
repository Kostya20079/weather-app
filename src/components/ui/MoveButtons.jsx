function MoveButtons({ scrollRef }) {
  const scrollAmount = 120; // size to move

  const handleClickLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleClickRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        className="move-button move-button__left"
        onClick={handleClickLeft}
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      <button
        className="move-button move-button__right"
        onClick={handleClickRight}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </>
  );
}

export default MoveButtons;
