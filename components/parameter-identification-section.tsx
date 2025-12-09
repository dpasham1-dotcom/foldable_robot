import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, FlaskConical, Gauge } from "lucide-react"

const teamMembers = [
  {
    name: "Dheeraj Reddy Pasham",
    studentId: "1233405721",
    contribution: "Servo Parameter Identification",
    icon: Settings,
  },
  {
    name: "Yeshwanth Voragunti",
    studentId: "1238208480",
    contribution: "Stiffness & Damping Identification",
    icon: Gauge,
  },
  {
    name: "Dhansukh Jaladi",
    studentId: "",
    contribution: "Friction Measurement",
    icon: FlaskConical,
  },
]

const servoParameters = [
  { parameter: "Nominal Voltage (Vnom)", value: "6 V" },
  { parameter: "Gear Ratio (G)", value: "55.5" },
  { parameter: "Torque Constant (kt)", value: "4.5e-3 N·m/A" },
  { parameter: "Coil Resistance (R)", value: "10 Ω" },
  { parameter: "Back-EMF Constant (ke)", value: "4.5e-3 V·s/rad" },
  { parameter: "Viscous Friction (b)", value: "2.9e-6 N·m·s/rad" },
  { parameter: "Proportional Gain (Kp)", value: "15-20" },
  { parameter: "Maximum Angle Range", value: "~172°" },
]

const frictionParameters = [
  { parameter: "Static Angle (θs)", value: "21.181°" },
  { parameter: "Dynamic Angle (θk)", value: "18.650°" },
  { parameter: "Static Friction (μs)", value: "0.3875 ± 0.0100" },
  { parameter: "Kinetic Friction (μk)", value: "0.3375 ± 0.0097" },
]

const stiffnessParameters = [
  { component: "Single Link", symbol: "k_link", stiffness: "12.80 N/m" },
  { component: "One Leg (2 links series)", symbol: "k_leg", stiffness: "6.40 N/m" },
  { component: "One Side (2 legs parallel)", symbol: "k_side", stiffness: "12.80 N/m" },
  { component: "All Legs Combined", symbol: "k_sides", stiffness: "25.60 N/m" },
  { component: "Deck (clamped-clamped)", symbol: "k_deck", stiffness: "28,974.8 N/m" },
  { component: "Whole Robot", symbol: "k_robot", stiffness: "25.58 N/m" },
]

const dampingParameters = [
  { parameter: "Damping Ratio (ζ)", value: "0.104" },
  { parameter: "Natural Frequency (ωn)", value: "19.67 rad/s" },
  { parameter: "Single Link Damping (c)", value: "0.0105 N·s/m" },
  { parameter: "Full Robot Damping", value: "0.0122 N·s/m" },
]

export function ParameterIdentificationSection() {
  return (
    <section id="parameter-identification" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Parameter Identification</h2>
          <p className="text-slate-600 mb-8">
            Individual team member contributions to system parameter identification for accurate MuJoCo simulation.
          </p>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                      <member.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{member.name}</h4>
                      {member.studentId && <p className="text-xs text-slate-500 mb-1">ID: {member.studentId}</p>}
                      <p className="text-sm text-cyan-600 font-medium">{member.contribution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Servo Parameter Identification - Dheeraj */}
          <Card className="mb-8 border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Settings className="w-5 h-5 text-cyan-600" />
                Servo Parameter Identification
                <span className="text-sm font-normal text-slate-500 ml-2">— Dheeraj Reddy Pasham</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-slate max-w-none mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Methodology</h4>
                <p className="text-slate-600 mb-4">
                  The servo parameter identification combined experimental motion capture with computational parameter
                  fitting to characterize the SG90 servo motor&apos;s dynamic behavior. The workflow included:
                </p>
                <ol className="list-decimal list-inside text-slate-600 space-y-2 mb-6">
                  <li>Video capture of servo-driven arm executing a square-wave command</li>
                  <li>Motion tracking using Tracker software with dual high-contrast markers</li>
                  <li>Center of rotation optimization via least-squares minimization</li>
                  <li>Angle extraction and unwrapping for continuous measurement</li>
                  <li>MuJoCo simulation with P-controller and motor dynamics</li>
                  <li>Sensitivity analysis for Kp and viscous friction parameters</li>
                </ol>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">Experimental Setup</h4>
                <p className="text-slate-600 mb-4">
                  An SG90 micro-servo was mounted to a rigid table with a Chapstick tube (9.08g, 67mm length) attached
                  to the servo horn as a known inertial load. Video was captured at 30fps using a gimbal-stabilized
                  smartphone to minimize perspective distortion.
                </p>
              </div>

              <h4 className="text-lg font-semibold text-slate-900 mb-3">Identified Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="text-left py-2 px-3 font-semibold text-slate-700">Parameter</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-700">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servoParameters.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100">
                        <td className="py-2 px-3 text-slate-600">{row.parameter}</td>
                        <td className="py-2 px-3 font-mono text-slate-900">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-800 mb-2">Key Finding</h5>
                <p className="text-sm text-cyan-700">
                  The simulation trajectory shows excellent agreement with experimental data, both exhibiting the
                  characteristic &quot;shark-fin&quot; shape with linear velocity ramps and rounded peaks. This
                  validates that the P-controller model correctly captures the servo&apos;s velocity-limited behavior.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Stiffness & Damping - Yeshwanth */}
          <Card className="mb-8 border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gauge className="w-5 h-5 text-cyan-600" />
                Stiffness & Damping Identification
                <span className="text-sm font-normal text-slate-500 ml-2">— Yeshwanth Voragunti</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-slate max-w-none mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Goal</h4>
                <p className="text-slate-600 mb-4">
                  Determine the stiffness characteristics of the links and overall body structure of the robot
                  constructed using cardboard components and 4-bar leg mechanisms through free vibration analysis.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">Methodology</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                  <li>Cantilever beam vibration test captured with Tracker software</li>
                  <li>Nonlinear least-squares fit to decaying sinusoidal model</li>
                  <li>Young&apos;s modulus identification: E = 0.77 GPa for cardboard</li>
                  <li>Series/parallel combination of link stiffnesses for total system</li>
                  <li>Deck modeled as clamped-clamped beam</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Stiffness Parameters</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <th className="text-left py-2 px-3 font-semibold text-slate-700">Component</th>
                          <th className="text-left py-2 px-3 font-semibold text-slate-700">Stiffness</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stiffnessParameters.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100">
                            <td className="py-2 px-3 text-slate-600">{row.component}</td>
                            <td className="py-2 px-3 font-mono text-slate-900">{row.stiffness}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Damping Parameters</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <th className="text-left py-2 px-3 font-semibold text-slate-700">Parameter</th>
                          <th className="text-left py-2 px-3 font-semibold text-slate-700">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dampingParameters.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100">
                            <td className="py-2 px-3 text-slate-600">{row.parameter}</td>
                            <td className="py-2 px-3 font-mono text-slate-900">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-800 mb-2">Key Finding</h5>
                <p className="text-sm text-cyan-700">
                  The deck is significantly stiffer (28,974.8 N/m) than the legs (25.60 N/m combined), making the
                  overall robot stiffness and damping behavior primarily governed by the compliant legs rather than the
                  rigid deck structure. Total robot stiffness: <strong>25.58 N/m</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Friction Measurement - Dhansukh */}
          <Card className="border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="flex items-center gap-2 text-xl">
                <FlaskConical className="w-5 h-5 text-cyan-600" />
                Friction Measurement
                <span className="text-sm font-normal text-slate-500 ml-2">— Dhansukh Jaladi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-slate max-w-none mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Goal</h4>
                <p className="text-slate-600 mb-4">
                  Measure static and dynamic friction coefficients between the foot material and floor surface using an
                  inclined plane experiment for use in MuJoCo simulation.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 mb-3">Procedure</h4>
                <ol className="list-decimal list-inside text-slate-600 space-y-2 mb-6">
                  <li>Cut a sample of the foot material</li>
                  <li>Place a mass of known weight on the sample</li>
                  <li>Slowly increase ramp angle until block begins to slide → record θs (static)</li>
                  <li>Reduce angle until block slides with constant velocity → record θk (kinetic)</li>
                  <li>Compute friction coefficients: μ = tan(θ)</li>
                </ol>
              </div>

              <h4 className="text-lg font-semibold text-slate-900 mb-3">Identified Parameters</h4>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="text-left py-2 px-3 font-semibold text-slate-700">Parameter</th>
                      <th className="text-left py-2 px-3 font-semibold text-slate-700">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {frictionParameters.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100">
                        <td className="py-2 px-3 text-slate-600">{row.parameter}</td>
                        <td className="py-2 px-3 font-mono text-slate-900">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-800 mb-2">Key Finding</h5>
                <p className="text-sm text-cyan-700">
                  The results demonstrate the expected hierarchy μs &gt; μk (~13% difference), consistent with typical
                  dry Coulomb friction. The kinetic friction value (μk = 0.3375) is used directly in MuJoCo to tune the
                  sliding friction parameter for accurate simulation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
