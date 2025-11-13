import { motion } from "framer-motion";
import { Monitor, Clock, Globe, Video, BookOpen, Award, Users, Zap } from "lucide-react";

export default function OnlineTraining() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Learn Anywhere",
      description: "Access courses from the comfort of your home or anywhere in the world"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to course materials"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Sessions",
      description: "Interactive live classes with industry experts and Q&A sessions"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Rich Content",
      description: "Comprehensive video lectures, assignments, and study materials"
    }
  ];

  const courses = [
    {
      title: "Web Development",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Data Science & AI",
      duration: "16 Weeks",
      level: "Intermediate",
      topics: ["Python", "Machine Learning", "Data Analysis", "AI Fundamentals"]
    },
    {
      title: "Mobile App Development",
      duration: "14 Weeks",
      level: "Beginner to Advanced",
      topics: ["React Native", "Flutter", "iOS/Android", "API Integration"]
    },
    {
      title: "Digital Marketing",
      duration: "10 Weeks",
      level: "Beginner",
      topics: ["SEO", "Social Media", "Content Marketing", "Analytics"]
    }
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, text: "Global Access" },
    { icon: <Users className="w-6 h-6" />, text: "Community Support" },
    { icon: <Award className="w-6 h-6" />, text: "Certifications" },
    { icon: <Zap className="w-6 h-6" />, text: "Quick Learning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] animate-pulse"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Online Training Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Learn From Anywhere, Anytime - Your Success, Your Schedule
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Monitor className="w-5 h-5" />
                <span>100% Online</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Clock className="w-5 h-5" />
                <span>Self-Paced Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Award className="w-5 h-5" />
                <span>Certified Courses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Why Choose Online Training?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Popular Online Courses
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              What You'll Get
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <p className="font-semibold text-lg">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Start Learning Today!</h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of students who are already learning with us online
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                Browse Courses
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-full transition-colors text-lg">
                Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
