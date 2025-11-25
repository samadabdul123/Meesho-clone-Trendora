import React from "react";

const About = () => {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>

      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, #ff2e93, #ff5dc0)",
          padding: "70px 40px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 45, fontWeight: 700, marginBottom: 10 }}>
          About Us
        </h1>
        <p style={{ fontSize: 18, maxWidth: 750, margin: "auto" }}>
          Your trusted platform for affordable fashion, lifestyle & daily essentials.
        </p>
      </section>

      {/* BRAND STORY */}
      <section style={{ padding: "50px 40px", display: "flex", gap: 40 }}>
        <div style={{ flex: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322"
            alt="about"
            style={{
              width: "100%",
              borderRadius: 10,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 32, marginBottom: 15 }}>Our Story</h2>
          <p style={{ fontSize: 17, marginBottom: 20 }}>
            We started our journey with a single goal — to make online shopping 
            simple, affordable and accessible for everyone in India.
          </p>
          <p style={{ fontSize: 17 }}>
            Today, we serve millions of customers with high-quality products, fast
            delivery and seamless shopping experience.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        style={{
          background: "#f9f2f7",
          padding: "50px 40px",
          borderRadius: 10,
          margin: "40px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 30 }}>
          Our Mission & Vision
        </h2>

        <div style={{ display: "flex", gap: 40 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>🎯 Mission</h3>
            <p>
              Deliver quality products at the lowest prices with exceptional convenience.
            </p>
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>🚀 Vision</h3>
            <p>
              Become India’s most trusted e-commerce platform that empowers everyone to shop smart.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "50px 40px" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 30 }}>
          Why Choose Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 25,
          }}
        >
          {[
            {
              title: "Lowest Prices",
              desc: "We offer unbeatable prices without compromising quality.",
            },
            {
              title: "Free Delivery",
              desc: "Zero delivery charges on every order.",
            },
            {
              title: "Cash On Delivery",
              desc: "Pay only after you receive your product.",
            },
          ].map((box, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #eee",
                padding: 25,
                borderRadius: 10,
                background: "white",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: 22, marginBottom: 10 }}>{box.title}</h3>
              <p>{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section style={{ padding: "50px 40px" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 30 }}>
          Meet Our Team
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 30,
          }}
        >
          {[
            {
              name: "Aman Sharma",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Riya Verma",
              role: "Chief Designer",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Sameer Khan",
              role: "Marketing Head",
              img: "https://randomuser.me/api/portraits/men/76.jpg",
            },
          ].map((team, i) => (
            <div
              key={i}
              style={{
                padding: 20,
                textAlign: "center",
                borderRadius: 10,
                background: "#fff",
                border: "1px solid #eee",
              }}
            >
              <img
                src={team.img}
                alt={team.name}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  marginBottom: 15,
                }}
              />
              <h3>{team.name}</h3>
              <p style={{ color: "#F43399" }}>{team.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          background: "#fff5fb",
          padding: "50px 40px",
          marginTop: 30,
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 30 }}>
          What Our Customers Say
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 25,
          }}
        >
          {[
            {
              review: "Amazing quality & fast delivery. Totally worth it!",
              name: "Priya S.",
            },
            {
              review: "Super affordable and trustworthy platform.",
              name: "Rahul T.",
            },
            {
              review: "Excellent customer experience. Loved the product!",
              name: "Sneha V.",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                padding: 25,
                background: "white",
                borderRadius: 10,
                border: "1px solid #eee",
              }}
            >
              <p style={{ fontStyle: "italic", marginBottom: 10 }}>
                "{t.review}"
              </p>
              <strong>- {t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}
      <section style={{ padding: "50px 40px" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 30 }}>
          Our Journey
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            { year: "2019", event: "Idea was born" },
            { year: "2020", event: "Platform launched" },
            { year: "2021", event: "1 Lakh customers" },
            { year: "2022", event: "Expanded to 20+ categories" },
            { year: "2023", event: "10 Lakh+ happy users" },
          ].map((t, i) => (
            <li
              key={i}
              style={{
                marginBottom: 18,
                paddingLeft: 20,
                borderLeft: "4px solid #F43399",
              }}
            >
              <strong>{t.year}: </strong> {t.event}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
