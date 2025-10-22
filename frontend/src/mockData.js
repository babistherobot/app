export const personalInfo = {
  name: "Alex Robotics",
  tagline: "Building intelligent autonomous systems at the intersection of AI/ML and robotics. Specializing in multi-robot coordination and vision-language models.",
  email: "alex@robotics.edu",
  location: "IIT Gandhinagar, India",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  scholar: "https://scholar.google.com/",
  cv: "/cv.pdf",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
};

export const about = {
  bio: `I'm a robotics researcher focused on building intelligent autonomous systems that bridge the gap between AI research and real-world deployment. My work spans multi-robot coordination, vision-language models, and control systems for complex robotic platforms.\n\nCurrently working with cutting-edge platforms including TurtleBot3, Unitree Go2 quadrupeds, and SO-101 robotic arms. My research has been presented at IROS and deployed in production environments at IITGN.\n\nI specialize in developing practical solutions for autonomous navigation, sensor fusion, and multi-agent systems using Python, C++, and ROS 2.`,
  education: [
    {
      degree: "M.Tech in Robotics",
      institution: "Indian Institute of Technology Gandhinagar",
      year: "2022-2024"
    },
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "Technical University",
      year: "2018-2022"
    }
  ],
  experience: [
    {
      role: "Research Assistant",
      organization: "IIT Gandhinagar Robotics Lab",
      period: "2023-Present"
    },
    {
      role: "Robotics Intern",
      organization: "Autonomous Systems Lab",
      period: "Summer 2022"
    }
  ]
};

export const featuredProjects = [
  {
    id: 1,
    slug: "comuros",
    title: "CoMuRoS: Multi-Robot Manager-Worker LLM System",
    shortDesc: "Collaborative multi-robot orchestration using Large Language Models for intelligent task allocation and real-time coordination.",
    category: ["AI/ML", "Multi-Robot"],
    tech: ["Python", "ROS 2", "LLMs", "Multi-Agent"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    metrics: {
      performance: "40% faster",
      accuracy: "95% success rate"
    },
    links: {
      github: "https://github.com/username/comuros",
      demo: "https://example.com/demo",
      paper: "https://arxiv.org/"
    }
  },
  {
    id: 2,
    slug: "groot",
    title: "GR00T Vision-Language Model Finetuning Pipeline",
    shortDesc: "Custom finetuning pipeline for robot manipulation using vision-language models with domain-specific optimization.",
    category: ["AI/ML", "Vision"],
    tech: ["PyTorch", "VLM", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800",
    metrics: {
      performance: "32% improvement",
      accuracy: "89% task success"
    },
    links: {
      github: "https://github.com/username/groot",
      paper: "https://arxiv.org/"
    }
  },
  {
    id: 3,
    slug: "sensor-fusion",
    title: "Sensor Fusion for Autonomous Navigation",
    shortDesc: "LiDAR and camera fusion system for robust autonomous navigation in complex indoor/outdoor environments.",
    category: ["Vision", "Control"],
    tech: ["C++", "ROS 2", "LiDAR", "Kalman Filter"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    metrics: {
      performance: "99.2% accuracy",
      accuracy: "<15ms latency"
    },
    links: {
      github: "https://github.com/username/sensor-fusion",
      demo: "https://example.com/demo"
    }
  }
];

export const skills = {
  "PROGRAMMING": ["Python", "C++", "MATLAB", "JavaScript"],
  "ROBOTICS": ["ROS 2", "ROS 1", "MoveIt", "Gazebo", "IsaacGym"],
  "AI/ML": ["PyTorch", "TensorFlow", "RL", "Computer Vision", "VLM"],
  "HARDWARE": ["TurtleBot3", "Unitree Go2", "SO-101", "LiDAR"],
  "CONTROL": ["MPC", "Optimal Control", "State Estimation", "Kalman Filters"],
  "VISION": ["OpenCV", "PCL", "Sensor Fusion", "SLAM"],
  "TOOLS": ["Git", "Docker", "Linux", "CMake"]
};

export const publications = [
  {
    id: 1,
    title: "CoMuRoS: Collaborative Multi-Robot Systems with Large Language Models",
    authors: "Alex R., Co-Author 1, Co-Author 2",
    venue: "IROS 2024",
    year: 2024,
    link: "https://arxiv.org/"
  },
  {
    id: 2,
    title: "Vision-Language Models for Robot Manipulation: A Finetuning Approach",
    authors: "Alex R., Advisor Name",
    venue: "arXiv preprint",
    year: 2024,
    link: "https://arxiv.org/"
  },
  {
    id: 3,
    title: "Multi-Sensor Fusion for Robust Autonomous Navigation",
    authors: "Alex R., Team Members",
    venue: "ICRA 2023",
    year: 2023,
    link: "https://ieeexplore.ieee.org/"
  }
];

export const talks = [
  {
    id: 1,
    title: "Multi-Robot Coordination with LLMs",
    event: "IROS 2024 Workshop",
    date: "October 2024"
  },
  {
    id: 2,
    title: "Demo: CoMuRoS System at IITGN",
    event: "IITGN Open House",
    date: "March 2024"
  }
];