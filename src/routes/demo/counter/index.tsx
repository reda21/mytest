import { component$ } from "@builder.io/qwik";
import { useSignal, $ } from "@builder.io/qwik";
import styles from "./counter.module.css";

export default component$(() => {
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div class={styles["counter-wrapper"]}>
      <button aia-label="Diminuer" type="button"
        class="button-dark button-small"
        onClick$={() => setCount(count.value - 1)}
      ></button>
      <p class= {styles["text-black"]}>{count.value}</p>
      <button aria-label="Augmenter" type="button"
        class="button-dark button-small"
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
});
