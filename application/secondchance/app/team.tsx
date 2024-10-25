import Image from "next/image";
import "./globals.css";

const members = [
  {
    name: "Parth Desai",
    image: "Parth.jpg",
    position: "Team Lead",
    bio: "Parth is a passionate Data Engineer. He loves architecting innovative solutions in the big data realm across AWS, GCP, and Kubernetes. He's quite proficient in writing SQL queries & utilizing Scala, Spark, and Python for optimal big data processing. He's currently pursuing a masters in Data Science and AI at San Francisco State University.",
  },
  {
    name: "Nath Andre Velarde",
    image: "Andre.jpg",
    position: "Backend Lead",
    bio: "Andre is a computer science student at SFSU aspiring to be a software developer. As a backend lead, he will be responsible for managing the software development, creating an efficient/high quality system. He is skilled in C++ and Python and enjoys solving complex problems that lead to an impactful result.",
  },
  {
    name: "Josue Hernandez",
    image: "Josue.jpg",
    position: "Git Master",
    bio: "Josue manages version control and ensures smooth collaboration within the team.",
  },
  {
    name: "Hsin Ying Tsai",
    image: "Hsin.jpg",
    position: "Back End Developer",
    bio: "With a focus on server-side logic and database management, Hsin Ying ensures that the backbone of our application runs smoothly. He’s skilled in Python, Django, and REST APIs, and is responsible for integrating third-party services and managing complex data flows.",
  },
  {
    name: "Pedro Grande",
    image: "Pedro.jpg",
    position: "Front End Developer",
    bio: "Pedro is a computer science student aiming to become a software engineer. He has recently taken interest in understanding how to optimize interfaces for a better user experience. He helps in implementing and creating the website's UI elements. He is actively experimenting and learning about how to optimize his use of REACT.",
  },
  {
    name: "Charvi Sharma",
    image: "Charvi.jpg",
    position: "Scrum Master",
    bio: "Charvi is an undergraduate computer science student who enjoys exploring the business aspects of technology. She is particularly passionate about communicating with others and staying informed about emerging tech trends. While she's still a novice in many areas, her ability to learn quickly and grasp new tools at a high level allows her to effectively contribute to projects. She will ensure that everybody is aware, prepared, and excited for weekly group meetings and for the overall term project!",
  },
  {
    name: "Preet Vithani",
    image: "Preet.jpg",
    position: "Front-end Lead",
    bio: "I am Preet Vithani from Mumbai and majoring in computer science. My interest is in Artificial Intelligence and App development so I would love to pursue it for my future. My hobbies are reading books, traveling, hanging out with my friends, and gaming.",
  },
];

export default function Team() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="border p-6 rounded-xl shadow-md">
            <div className="flex flex-col items-center mb-4">
              <Image
                src={`/${member.image}`}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-gray-500">{member.position}</p>
            </div>
            <p className="text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
