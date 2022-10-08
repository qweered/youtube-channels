import React, { useState } from "react";
import styles from "./YoutubeForm.module.css";

const YoutubeForm = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const urlChangeHandler = (event) => {
    setYoutubeUrl(event.target.value);
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(youtubeUrl);
    setYoutubeUrl("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="url">Enter an Youtube channel URL</label>
      <input
        onChange={urlChangeHandler}
        value={youtubeUrl}
        className={styles.input}
        type="url"
        name="url"
        id="url"
        placeholder="https://youtube.com/"
        // pattern="https://.*"
      />
      <label htmlFor="file">Choose a file instead:</label>
      <input
        className={styles.input}
        type="file"
        id="file"
        name="file"
        accept=".txt, .csv"
      />
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default YoutubeForm;
