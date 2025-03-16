import { useTextSweepEffect } from "@/util/useanim";

interface TextSweepEffectProps {
  text: string; // Required text to animate
  className?: string; // Optional class for the wrapper
  letterClassName?: string; // Optional class for each letter
}

export const TextSweepEffect = ({
  text,
  className = "",
  letterClassName = "",
}: TextSweepEffectProps) => {
  const brightnessValues = useTextSweepEffect(text);

  return (
    <span className={className} style={{ whiteSpace: "nowrap" }}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`${letterClassName}`}
          style={{
            opacity: 0.3 + brightnessValues[index] * 0.7, // Adjust opacity only
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};
