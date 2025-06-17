export default function Home() {
  return (
    // <div classNameName="flex w-full bg-white">
    //   <div classNameName="max-w-container mx-auto">
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //     <h1>test</h1>
    //   </div>
    // </div>

    <div className="bg-white text-black">
      <header>
        <h1>SocietyHub</h1>
        <p>Simple, Smart Society Management for Apartments in Chennai</p>
      </header>

      <section>
        <h2>📌 What SocietyHub Can Do</h2>
        <div className="features mt-[10px]">
          <div>✅ Maintenance billing & reminders</div>
          <div>✅ Complaint tracking system</div>
          <div>✅ Owner & tenant login</div>
          <div>✅ Digital notices and updates</div>
        </div>

        <div className="testimonial">
          “This would save us hours every month.”
          <br />— Secretary, 12-unit society, Tambaram
        </div>

        <div className="cta">
          <h3>🚀 Try a Free Demo</h3>
          <p>
            We’re offering a free demo for select societies in Chennai. No
            commitments.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScOtHWZwxQ1kR-XyZJZnFxGmIdbw5K7fKQ7Z7zUGEUGNRTR3w/viewform?usp=header"
            target="_blank"
          >
            Request a Free Demo
          </a>
          <p className="mt-[10px]">
            Perfect for 10–100 unit apartments • UPI-ready • Built for Indian
            societies
          </p>
        </div>
      </section>

      <footer>&copy; 2025 SocietyHub. Made in Chennai with ❤️</footer>
    </div>
  );
}
