import Container from "../../layout/Container";
import InstallStep from "./InstallStep";

const steps = [
  {
    title: "Inspect Catch Basin",
    desc: "Confirm catch basin dimensions and ensure compatibility with Quicktrap. Check for structural damage or obstructions.",
  },
  {
    title: "Clean & Prepare",
    desc: "Remove in-basin debris, sediment, and standing water. Ensure the base surface is clear for proper fitting.",
  },
  {
    title: "Lower Quicktrap Device",
    desc: "Carefully lower the Quicktrap insert into the basin using gloved hands or lifting hooks if required.",
  },
  {
    title: "Align Mounting Points",
    desc: "Adjust the device to ensure proper seating and alignment with the basin's internal contours.",
  },
  {
    title: "Seat the Device",
    desc: "Apply gentle downward pressure to fully seat the insert. Confirm the baffle and internal flow paths are unobstructed.",
  },
  {
    title: "Verify Clearance",
    desc: "Check that the device sits flush and does not interfere with the grate or cover. Perform a final visual inspection.",
  },
];

export default function InstallationSection() {
  return (
    <section className="py-24 blueprint-grid">
      <Container>
        <h2 className="text-title font-bold text-graphite mb-12">
          Installation Procedure
        </h2>

        <div className="bg-white/90 backdrop-blur-sm border border-concrete rounded-lg p-10">
          {steps.map((s, i) => (
            <InstallStep
              key={i}
              number={i + 1}
              title={s.title}
              desc={s.desc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
