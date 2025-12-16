export default function ProductSpecs() {
  return (
    <section id="specs" className="mb-20 blueprint-grid py-16 rounded-lg">
      <h2 className="text-2xl font-bold text-graphite mb-8 px-6">Technical Specifications</h2>

      <div className="bg-white/80 backdrop-blur-sm border border-concrete rounded-lg mx-6 p-8">
        <ul className="space-y-4 text-graphite text-sm">

          <li><strong>Material:</strong> HDPE body with stainless steel internal baffle</li>
          <li><strong>Dimensions:</strong> 24" x 18" x 12" (standard catch-basin fit)</li>
          <li><strong>Weight:</strong> 14.2 lbs</li>
          <li><strong>Flow Rating:</strong> 480 L/min (max tested throughput)</li>
          <li><strong>Sediment Capacity:</strong> 8.5 kg retention volume</li>
          <li><strong>Load Rating:</strong> H-20 (AASHTO compliant)</li>
          <li><strong>Temperature Resistance:</strong> -40°C to 85°C</li>
          <li><strong>Maintenance Interval:</strong> Recommended inspection every 6 months</li>

        </ul>
      </div>
    </section>
  );
}
