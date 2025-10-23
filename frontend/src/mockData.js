export const personalInfo = {
  name: "Bhavish Rai B",
  tagline: "Building intelligent robots that think, see, and collaborate.",
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
      performance: "35% faster task completion",
      accuracy: "92% success rate"
    },
    featured: true,
    links: {
      github: "https://github.com/username/comuros",
      demo: "https://demo.com",
      paper: null
    }
  },
  {
    id: 2,
    slug: "robotic-arm",
    title: "Vision-Guided Robotic Arm Control",
    shortDesc: "Real-time object manipulation using SO-101 arm with advanced computer vision and depth perception for precise pick-and-place operations.",
    category: ["Vision", "Control"],
    tech: ["Python", "OpenCV", "ROS 2", "MoveIt"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
    metrics: {
      performance: "0.5mm precision",
      accuracy: "95% grasp success"
    },
    featured: true,
    links: {
      github: "https://github.com/username/robotic-arm",
      demo: null,
      paper: null
    }
  },
  {
    id: 3,
    slug: "turtlebot-nav",
    title: "TurtleBot3 Autonomous Navigation",
    shortDesc: "Multi-layer path planning system with dynamic obstacle avoidance and semantic mapping for complex indoor environments.",
    category: ["Control", "Vision"],
    tech: ["C++", "ROS 2", "Nav2", "SLAM"],
    image: "https://images.unsplash.com/photo-1563968743333-044cef800494?w=800",
    metrics: {
      performance: "15% faster navigation",
      accuracy: "98% obstacle detection"
    },
    featured: true,
    links: {
      github: "https://github.com/username/turtlebot-nav",
      demo: "https://demo.com",
      paper: "https://paper.com"
    }
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    id: 4,
    slug: "quadruped-gait",
    title: "Unitree Go2 Adaptive Gait Control",
    shortDesc: "Terrain-adaptive locomotion system for quadruped robots with reinforcement learning-based gait optimization.",
    category: ["AI/ML", "Control"],
    tech: ["Python", "PyTorch", "ROS 2", "Gazebo"],
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/quadruped",
      demo: null,
      paper: null
    }
  },
  {
    id: 5,
    slug: "sensor-fusion",
    title: "Multi-Sensor Fusion Framework",
    shortDesc: "Robust state estimation combining LiDAR, IMU, and camera data using Extended Kalman Filter for mobile robots.",
    category: ["Vision", "Control"],
    tech: ["C++", "ROS 2", "PCL", "OpenCV"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/sensor-fusion",
      demo: null,
      paper: null
    }
  },
  {
    id: 6,
    slug: "warehouse-fleet",
    title: "Warehouse Fleet Coordination",
    shortDesc: "Multi-robot task allocation and collision-free path planning for autonomous warehouse operations at scale.",
    category: ["Multi-Robot", "AI/ML"],
    tech: ["Python", "ROS 2", "Graph Theory", "Optimization"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    featured: false,
    links: {
      github: null,
      demo: "https://demo.com",
      paper: null
    }
  },
  {
    id: 7,
    slug: "object-detection",
    title: "Real-Time 3D Object Detection",
    shortDesc: "YOLOv8-based detection system with depth estimation for robotic manipulation in cluttered environments.",
    category: ["Vision", "AI/ML"],
    tech: ["Python", "PyTorch", "YOLO", "RealSense"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/object-detection",
      demo: null,
      paper: null
    }
  },
  {
    id: 8,
    slug: "embedded-control",
    title: "STM32 Motor Control System",
    shortDesc: "Low-level embedded control for brushless DC motors with PID tuning and real-time telemetry.",
    category: ["Embedded", "Control"],
    tech: ["C", "STM32", "CAN Bus", "RTOS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/embedded-control",
      demo: null,
      paper: null
    }
  }
];

export const skills = {
  "PROGRAMMING": ["Python", "C++", "C", "MATLAB"],
  "ROBOTICS": ["ROS 2", "Gazebo", "MoveIt", "Nav2"],
  "AI/ML": ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn"],
  "PLATFORMS": ["TurtleBot3", "Unitree Go2", "SO-101", "STM32"]
};

export const publications = [
  {
    id: 1,
    title: "CoMuRoS: Collaborative Multi-Robot System with Large Language Models",
    authors: "B. Rai et al.",
    venue: "IROS",
    year: 2023,
    link: "https://scholar.google.com"
  },
  {
    id: 2,
    title: "Vision-Language Models for Robotic Manipulation Tasks",
    authors: "B. Rai, A. Colleague",
    venue: "International Journal of Robotics Research",
    year: 2023,
    link: "https://scholar.google.com"
  }
];

export const talks = [
  {
    id: 1,
    title: "Multi-Robot Coordination with LLMs",
    event: "IITGN Robotics Symposium 2023",
    date: "December 2023"
  },
  {
    id: 2,
    title: "Quadruped Robot Demo",
    event: "National Robotics Week",
    date: "April 2023"
  }
];