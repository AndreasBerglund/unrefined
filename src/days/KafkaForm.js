import { useState } from "react";

const KafkaForm = () => {
  const [firstName, setFirstName] = useState("");
  const [counterFirstName, setCounterFirstName] = useState(0);

  const handleBlur = () => {
    setCounterFirstName(counterFirstName + 1);
    if (counterFirstName === 2) {
      alert("Your firstname is now Grumm");
      setFirstName("Grumm");
    } else {
      alert("No, your real name!");
      setFirstName("");
    }
  };

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="firstName">
          <input
            id="firstName"
            disabled={counterFirstName === 3}
            value={firstName}
            onChange={handleChange}
            placeholder="first name"
            onBlur={handleBlur}
          />
        </label>
      </form>
    </div>
  );
};

export default KafkaForm;
