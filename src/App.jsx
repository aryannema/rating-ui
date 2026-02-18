import Rating from "./components/Rating";
const App = () => {
  return (
    <div>
      <Rating
        heading="How do you feel about React"
        color="red"
        feedbackMessages={[
          "Hate it",
          "Dislike it",
          "Okayish",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
