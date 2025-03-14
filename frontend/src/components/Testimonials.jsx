const Testimonials = () => {
    const reviews = [
      { name: "Amit R.", text: "MotoConnect made find a sponsorship so easy. Highly recommend!" },
      { name: "Sneha P.", text: "Loved the experience. Smooth and hassle-free process!" },
      { name: "Vikram S.", text: "Great platform for paid sponsorship. Found exactly what I needed." }
    ];
  
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="max-w-md bg-gray-100 p-6 rounded-lg shadow">
              <p className="italic">"{review.text}"</p>
              <h3 className="mt-4 font-semibold">- {review.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  