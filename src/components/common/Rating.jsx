import { FaStar } from "react-icons/fa";

const Rating = ({rating, reviews}) => {
  

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={15}
          color={star <= rating ? "#ffc107" : "#ddd"}
          style={{ cursor: "pointer" }}
        />
      ))}

      <span style={{
        fontSize: 12
      }}>{rating}   ({reviews})</span>
    </div>
  );
};

export default Rating;