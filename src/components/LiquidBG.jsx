import LiquidEther from "../components/bg/LiquidEther";

export default function LiquidBG() {
  return (
    <div className="absolute inset-0 z-10">
      <LiquidEther
        colors={["#fbbf24", "#ff9f43", "#fde68a"]}
        resolution={0.5}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={2}
      />
    </div>
  );
}
