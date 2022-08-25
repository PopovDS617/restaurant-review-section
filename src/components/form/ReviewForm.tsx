import React from 'react';

const ReviewForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">name</label>
        <input type="text" name="name" />
        <label htmlFor="review">short review</label>
        <input
          type="text"
          name="review"
          placeholder="240 symbols max"
          maxLength={420}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
