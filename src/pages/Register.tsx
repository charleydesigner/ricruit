
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="pt-24 pb-12 bg-develop-50">
          <div className="develop-container">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Register for an Interview</h1>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
              Complete the form below to register for an interview with our migration specialists. 
              A small $3 fee is required to secure your appointment.
            </p>
          </div>
        </div>
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
