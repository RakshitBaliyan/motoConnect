const HowItWorks = () => {
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="max-w-sm bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">1. Sign Up</h3>
            <p>Create an account and verify your profile.</p>
          </div>
          <div className="max-w-sm bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">2. Browse Sponsorships</h3>
            <p>Find sponsorships suitable for you.</p>
          </div>
          <div className="max-w-sm bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">3. Apply & Earn</h3>
            <p>Apply and Get sponsorship in seconds...</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  