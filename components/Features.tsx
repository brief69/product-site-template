import { FaRobot, FaBrain, FaChartLine } from 'react-icons/fa';

const Features = () => (
  <section id="features" className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaRobot className="text-5xl mb-4 text-blue-500" />}
          title="AI-Powered Automation"
          description="Streamline your processes with intelligent automation"
        />
        <FeatureCard
          icon={<FaBrain className="text-5xl mb-4 text-purple-500" />}
          title="Machine Learning Integration"
          description="Leverage advanced ML models for smarter decision-making"
        />
        <FeatureCard
          icon={<FaChartLine className="text-5xl mb-4 text-green-500" />}
          title="Predictive Analytics"
          description="Gain insights and forecast trends with our analytics tools"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;
