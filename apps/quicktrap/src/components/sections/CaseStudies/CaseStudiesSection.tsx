import Container from "../../layout/Container";
import BeforeAfter from "./BeforeAfter";
import CaseStudyOutcome from "./CaseStudyOutcome";

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <h2 className="text-title font-bold text-graphite mb-10">
          Case Study: Municipal Drainage Improvement
        </h2>

        <BeforeAfter
          before="/images/case_before.png"
          after="/images/case_after.png"
          caption="A severely obstructed catch basin was restored to optimal flow performance using the Quicktrap device."
        />

        <div className="mt-16">
          <CaseStudyOutcome
            title="Key Outcomes"
            points={[
              "Reduced sediment entry into downstream systems",
              "Improved drainage performance after heavy rainfall",
              "Lower maintenance requirements over seasonal cycles",
              "Extended service life of municipal infrastructure"
            ]}
          />
        </div>

      </Container>
    </section>
  );
}
