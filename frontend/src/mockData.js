export const personalInfo = {
  name: "Bhavish Rai B",
  tagline: "Bridging the gap between AI research and real-world robotics. Developing autonomous systems that perceive, reason, and act intelligently.",
  email: "alex@robotics.edu",
  location: "IIT Gandhinagar, India",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  scholar: "https://scholar.google.com/",
  resume: "/resume.pdf",
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
    slug: "isaac-sim-manipulation",
    title: "Isaac Sim Robotic Manipulation",
    shortDesc: "Advanced robotic manipulation training using NVIDIA Isaac Sim with reinforcement learning for precise object handling and assembly tasks.",
    category: ["AI/ML", "Vision"],
    tech: ["Python", "Isaac Sim", "PyTorch", "ROS 2", "USD"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    metrics: {
      performance: "40% faster training",
      accuracy: "94% success rate"
    },
    featured: true,
    links: {
      github: "https://github.com/username/isaac-sim-manipulation",
      demo: "https://demo.com",
      paper: null
    }
  },
  {
    id: 2,
    slug: "groot-finetuning",
    title: "GR00T Model Fine-tuning",
    shortDesc: "Fine-tuning NVIDIA's GR00T foundation model for humanoid robot control with custom task-specific behaviors and motion primitives.",
    category: ["AI/ML", "Control"],
    tech: ["Python", "GR00T", "Isaac Lab", "PyTorch", "ROS 2"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
    metrics: {
      performance: "2.5x faster adaptation",
      accuracy: "91% task completion"
    },
    featured: true,
    links: {
      github: "https://github.com/username/groot-finetuning",
      demo: null,
      paper: null
    }
  },
  {
    id: 3,
    slug: "multi-robot-mpc",
    title: "Multi-Robot MPC Controller",
    shortDesc: "Model Predictive Control system for coordinated multi-robot navigation with collision avoidance and dynamic obstacle handling.",
    category: ["Multi-Robot", "Control"],
    tech: ["C++", "Python", "MPC", "ROS 2", "CasADi"],
    image: "https://images.unsplash.com/photo-1563968743333-044cef800494?w=800",
    metrics: {
      performance: "Zero collisions",
      accuracy: "98% path accuracy"
    },
    featured: true,
    links: {
      github: "https://github.com/username/multi-robot-mpc",
      demo: "https://demo.com",
      paper: "https://paper.com"
    }
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    id: 4,
    slug: "vision-language-manipulation",
    title: "Vision-Language Robot Manipulation",
    shortDesc: "Natural language-driven robotic manipulation using vision-language models for intuitive human-robot interaction.",
    category: ["AI/ML", "Vision"],
    tech: ["Python", "CLIP", "ROS 2", "OpenCV", "PyTorch"],
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/vision-language-manipulation",
      demo: null,
      paper: null
    }
  },
  {
    id: 5,
    slug: "legged-locomotion",
    title: "Quadruped Legged Locomotion",
    shortDesc: "RL-based adaptive locomotion for quadruped robots on challenging terrains with real-time gait optimization.",
    category: ["AI/ML", "Control"],
    tech: ["Python", "Isaac Gym", "PyTorch", "ROS 2"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/legged-locomotion",
      demo: "https://demo.com",
      paper: null
    }
  },
  {
    id: 6,
    slug: "swarm-coordination",
    title: "Swarm Robot Coordination",
    shortDesc: "Decentralized multi-agent coordination for robot swarms with emergent collective behaviors and task allocation.",
    category: ["Multi-Robot", "AI/ML"],
    tech: ["Python", "ROS 2", "Graph Theory", "Multi-Agent RL"],
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
    slug: "semantic-slam",
    title: "Semantic SLAM System",
    shortDesc: "Real-time semantic mapping and localization combining deep learning object detection with traditional SLAM.",
    category: ["Vision", "AI/ML"],
    tech: ["C++", "Python", "ORB-SLAM3", "YOLOv8", "ROS 2"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/semantic-slam",
      demo: null,
      paper: null
    }
  },
  {
    id: 8,
    slug: "embedded-motor-control",
    title: "Real-Time Motor Control",
    shortDesc: "Low-latency embedded motor control system for BLDC motors with FOC and advanced PID tuning.",
    category: ["Embedded", "Control"],
    tech: ["C", "STM32", "FOC", "CAN Bus", "RTOS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    featured: false,
    links: {
      github: "https://github.com/username/embedded-motor-control",
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