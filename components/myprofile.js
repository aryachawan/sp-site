"use client"

const profileData = [
  { label: "Age", value: "22 years" },
  { label: "Eyes", value: "Dark Brown" },
  { label: "Hair", value: "Black" },
  { label: "Skin", value: "Dusky" },
  { label: "Weight", value: "70 kg" },
  { label: "Height", value: "178 cm" },
  { label: "Chest", value: "38 inch" },
  { label: "Waist", value: "33 inch" },
  { label: "Shoe", value: "UK 8" },
];

export default function ProfileSection() {
  return (
    <section className="w-full bg-black text-white py-6 px-6 md:px-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-normal mb-12 md:mb-16 tracking-wide">
          My Profile
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 md:gap-x-8">
          {profileData.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 group cursor-default"
            >
              <span className="text-sm md:text-lg text-zinc-400 font-medium transition-colors duration-300 group-hover:text-zinc-400">
                {item.label}
              </span>
              
              <span className="text-xl md:text-3xl font-serif text-zinc-200 tracking-wide transition-colors duration-300 group-hover:text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}